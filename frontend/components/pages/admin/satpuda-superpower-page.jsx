import { useEffect, useMemo, useState } from "react";
import { Menu, RefreshCw, Sparkles, LogOut } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Button } from "../../ui/button.jsx";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card.jsx";
import { AdminSidebar } from "../../admin/components/admin-sidebar.jsx";
import { AdminOverviewCards } from "../../admin/components/admin-overview-cards.jsx";
import { AdminToolbar } from "../../admin/components/admin-toolbar.jsx";
import { AdminDataTable } from "../../admin/components/admin-data-table.jsx";
import { AdminCharts } from "../../admin/components/admin-charts.jsx";
import { AdminRecordDialog } from "../../admin/components/admin-record-dialog.jsx";
import { useAdminOverview } from "../../admin/hooks/use-admin-overview.js";
import { useAdminCollection } from "../../admin/hooks/use-admin-collection.js";
import { useDebouncedValue } from "../../admin/hooks/use-debounced-value.js";
import { exportAdminRowsToCsv, exportAdminRowsToXlsx } from "../../admin/utils/export.js";
import { formatAdminValue } from "../../admin/utils/format.js";
import { getDefaultAdminCollectionKey } from "../../admin/config/collections.js";
import { deleteAdminRecord } from "../../admin/services/admin-api.js";
import { FeedbackManager } from "../../admin/components/feedback-manager.jsx";
import { AdminLogin } from "../../admin/components/admin-login.jsx";
import { isAdminAuthenticated, clearAdminToken, onAdminUnauthorized } from "../../admin/services/admin-auth.js";

const FEEDBACKS_KEY = "feedbacks";

function createDefaultQuery(collection) {
  return {
    search: "",
    dateFrom: "",
    dateTo: "",
    course: "",
    inquiryType: "",
    email: "",
    mobile: "",
    sortBy: collection?.defaultSortBy || "createdAt",
    sortOrder: collection?.defaultSortOrder || "desc",
    page: 1,
    limit: 10
  };
}

function AdminDashboard({ onLogout }) {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const overviewState = useAdminOverview(apiBaseUrl);
  const overview = overviewState.data;

  const initialCollectionKey = getDefaultAdminCollectionKey(overview?.collections);
  const [activeCollectionKey, setActiveCollectionKey] = useState(initialCollectionKey);
  const isFeedbacksView = activeCollectionKey === FEEDBACKS_KEY;
  const activeCollection = useMemo(
    () => overview?.collections?.find((collection) => collection.key === activeCollectionKey) || overview?.collections?.[0],
    [activeCollectionKey, overview]
  );

  // The generic data collections plus the custom Feedbacks moderation view.
  const sidebarCollections = useMemo(
    () => [...(overview?.collections || []), { key: FEEDBACKS_KEY, label: "Feedbacks" }],
    [overview]
  );

  const [query, setQuery] = useState(() => createDefaultQuery(activeCollection));
  const debouncedSearch = useDebouncedValue(query.search, 350);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const desktopShellClass = sidebarCollapsed
    ? "mx-auto grid min-h-screen w-full lg:grid-cols-[88px_minmax(0,1fr)] 2xl:grid-cols-[88px_minmax(0,1fr)]"
    : "mx-auto grid min-h-screen w-full lg:grid-cols-[300px_minmax(0,1fr)] 2xl:grid-cols-[320px_minmax(0,1fr)]";

  useEffect(() => {
    if (!overview?.collections?.length) {
      return;
    }

    const collectionExists =
      activeCollectionKey === FEEDBACKS_KEY ||
      overview.collections.some((collection) => collection.key === activeCollectionKey);
    if (!collectionExists) {
      setActiveCollectionKey(getDefaultAdminCollectionKey(overview.collections));
    }
  }, [activeCollectionKey, overview]);

  useEffect(() => {
    if (activeCollection) {
      setQuery(createDefaultQuery(activeCollection));
    }
  }, [activeCollectionKey]);

  const collectionQuery = useMemo(
    () => ({
      search: debouncedSearch,
      dateFrom: query.dateFrom,
      dateTo: query.dateTo,
      course: query.course,
      inquiryType: query.inquiryType,
      email: query.email,
      mobile: query.mobile,
      sortBy: query.sortBy,
      sortOrder: query.sortOrder,
      page: query.page,
      limit: query.limit
    }),
    [debouncedSearch, query]
  );

  const collectionState = useAdminCollection(apiBaseUrl, activeCollectionKey, collectionQuery);
  const collectionData = collectionState.data;

  const activeCollectionDetails = collectionData?.collection || activeCollection || null;
  const rows = collectionData?.rows || [];
  const pagination = collectionData?.pagination || {
    page: query.page,
    limit: query.limit,
    totalEntries: 0,
    totalPages: 1
  };
  const columns = activeCollectionDetails?.columns || [];

  const handleRefresh = () => {
    overviewState.refresh();
    collectionState.refresh();
    toast.success("Dashboard refreshed.");
  };

  const updateQuery = (key, value) => {
    setQuery((current) => {
      const nextQuery = { ...current, [key]: value };
      if (key !== "page" && key !== "limit") {
        nextQuery.page = 1;
      }
      return nextQuery;
    });
  };

  const handleSelectCollection = (collectionKey) => {
    setActiveCollectionKey(collectionKey);
    const nextCollection = overview?.collections?.find((collection) => collection.key === collectionKey);
    setQuery(createDefaultQuery(nextCollection));
    setSelectedRecord(null);
    setDialogOpen(false);
  };

  const handleSort = (columnKey) => {
    setQuery((current) => ({
      ...current,
      sortBy: columnKey,
      sortOrder: current.sortBy === columnKey && current.sortOrder === "asc" ? "desc" : "asc",
      page: 1
    }));
  };

  const handleCopyValue = async (value) => {
    const text = formatAdminValue(value);

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Cell value copied.");
    } catch {
      toast.error("Copy failed.");
    }
  };

  const handleViewRecord = (record) => {
    setSelectedRecord(record);
    setDialogOpen(true);
  };

  const handleDeleteRecord = async (record) => {
    if (!record?._id) {
      return;
    }

    setDeletingId(record._id);

    try {
      await deleteAdminRecord(apiBaseUrl, activeCollectionKey, record._id);
      toast.success("Record deleted.");

      if (selectedRecord?._id === record._id) {
        setDialogOpen(false);
        setSelectedRecord(null);
      }

      collectionState.refresh();
      overviewState.refresh();
    } catch (error) {
      toast.error(error?.message || "Failed to delete record.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleExportCsv = () => {
    if (!rows.length || !columns.length) {
      toast.error("Nothing to export.");
      return;
    }

    exportAdminRowsToCsv(rows, columns, `${activeCollectionKey}-page-${pagination.page}`);
    toast.success("CSV export downloaded.");
  };

  const handleExportXlsx = () => {
    if (!rows.length || !columns.length) {
      toast.error("Nothing to export.");
      return;
    }

    exportAdminRowsToXlsx(rows, columns, `${activeCollectionKey}-page-${pagination.page}`);
    toast.success("Excel export downloaded.");
  };

  const handleResetFilters = () => {
    setQuery(createDefaultQuery(activeCollectionDetails));
    toast.success("Filters cleared.");
  };

  const latestSubmission = collectionData?.stats?.latestSubmission;
  const latestPreview = latestSubmission?.preview || [];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(2,21,69,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(214,11,11,0.05),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#eef2f9_100%)] text-slate-900 [&_button]:cursor-pointer">
      <Toaster richColors theme="light" position="top-right" />

      <div className={desktopShellClass}>
        <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:self-start">
          <AdminSidebar
            collections={sidebarCollections}
            activeCollectionKey={activeCollectionKey}
            onSelectCollection={handleSelectCollection}
            onRefresh={handleRefresh}
            loading={overviewState.loading}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((current) => !current)}
          />
        </div>

        <div className="flex min-w-0 flex-col border-l border-slate-200 bg-white/40">
          <header className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-start gap-3">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      className="border-slate-200 bg-white text-[#021545] hover:bg-slate-100 hover:text-black lg:hidden"
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] border-slate-200 bg-white p-0 text-slate-900 [&_button]:cursor-pointer">
                    <AdminSidebar
                      collections={sidebarCollections}
                      activeCollectionKey={activeCollectionKey}
                      onSelectCollection={handleSelectCollection}
                      onRefresh={handleRefresh}
                      loading={overviewState.loading}
                    />
                  </SheetContent>
                </Sheet>

                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d60b0b]">
                    <Sparkles className="h-4 w-4" />
                    Public admin workspace
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#021545] sm:text-3xl">
                    {isFeedbacksView ? "Feedbacks" : (activeCollectionDetails?.label || "Admin Dashboard")}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm text-slate-500">
                    {isFeedbacksView
                      ? "Review, approve, and manage student feedback shown on the homepage."
                      : "Browse MongoDB collections with filters, sorting, export tools, and responsive data inspection."}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="hidden border-slate-200 bg-white text-[#021545] hover:bg-slate-100 hover:text-black lg:inline-flex"
                  onClick={() => setSidebarCollapsed((current) => !current)}
                >
                  {sidebarCollapsed ? "Open sidebar" : "Close sidebar"}
                </Button>
                <Button
                  type="button"
                  className="bg-[#021545] text-white hover:bg-[#021545]/90"
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh all
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-[#d60b0b]/30 bg-white text-[#d60b0b] hover:bg-[#d60b0b]/5 hover:text-[#d60b0b]"
                  onClick={onLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 px-4 py-6 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            {isFeedbacksView ? (
              <FeedbackManager apiBaseUrl={apiBaseUrl} />
            ) : (
             <>
            {overviewState.error ? (
              <Card className="border-[#d60b0b]/20 bg-[#d60b0b]/5 text-slate-900">
                <CardHeader>
                  <CardTitle className="text-[#d60b0b]">Unable to load dashboard overview</CardTitle>
                  <CardDescription className="text-[#d60b0b]/80">{overviewState.error}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button type="button" onClick={overviewState.refresh} className="bg-[#021545] text-white hover:bg-[#021545]/90">
                    Retry
                  </Button>
                </CardContent>
              </Card>
            ) : null}

            <AdminOverviewCards
              collections={overview?.collections || []}
              activeCollection={activeCollectionDetails}
            />

            <AdminCharts charts={overview?.charts} collections={overview?.collections || []} />

            <div className="rounded-4xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 sm:p-5 2xl:p-6">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d60b0b]">Active collection view</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#021545]">
                    {activeCollectionDetails?.label || "Collection data"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Search, filter, sort, copy, and export the current visible dataset.</p>
                </div>
                <div className="text-sm text-slate-500">
                  {collectionData?.stats?.latestSubmission ? (
                    <>
                      Latest submission: <span className="font-medium text-[#021545]">{new Date(collectionData.stats.latestSubmission.createdAt).toLocaleString()}</span>
                    </>
                  ) : (
                    "No latest submission yet"
                  )}
                </div>
              </div>

              <AdminToolbar
                collection={activeCollectionDetails}
                query={query}
                onQueryChange={updateQuery}
                onRefresh={handleRefresh}
                onExportCsv={handleExportCsv}
                onExportXlsx={handleExportXlsx}
                onResetFilters={handleResetFilters}
                loading={collectionState.loading}
              />

              <div className="mt-6">
                {collectionState.error ? (
                  <Card className="border-[#d60b0b]/20 bg-[#d60b0b]/5 text-slate-900">
                    <CardHeader>
                      <CardTitle className="text-[#d60b0b]">Unable to load collection</CardTitle>
                      <CardDescription className="text-[#d60b0b]/80">{collectionState.error}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button type="button" onClick={collectionState.refresh} className="bg-[#021545] text-white hover:bg-[#021545]/90">
                        Retry collection
                      </Button>
                    </CardContent>
                  </Card>
                ) : null}

                <AdminDataTable
                  columns={columns}
                  rows={rows}
                  loading={collectionState.loading}
                  sortBy={query.sortBy}
                  sortOrder={query.sortOrder}
                  onSort={handleSort}
                  onCopyValue={handleCopyValue}
                  onViewRecord={handleViewRecord}
                  onDeleteRecord={handleDeleteRecord}
                  deletingId={deletingId}
                  pagination={pagination}
                  onPageChange={(page) => setQuery((current) => ({ ...current, page }))}
                  onLimitChange={(limit) => setQuery((current) => ({ ...current, limit, page: 1 }))}
                />
              </div>
            </div>
             </>
            )}
          </main>
        </div>
      </div>

      <AdminRecordDialog
        record={selectedRecord}
        columns={columns}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCopyValue={handleCopyValue}
        onDeleteRecord={handleDeleteRecord}
        deleting={Boolean(selectedRecord?._id) && deletingId === selectedRecord._id}
      />
    </div>
  );
}

export default function SatpudaSuperpowerPage() {
  const [authenticated, setAuthenticated] = useState(() => isAdminAuthenticated());

  // If a protected request returns 401 (e.g. expired/invalid token), drop back to login.
  useEffect(() => onAdminUnauthorized(() => setAuthenticated(false)), []);

  const handleLogout = () => {
    clearAdminToken();
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <AdminLogin onSuccess={() => setAuthenticated(true)} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}
