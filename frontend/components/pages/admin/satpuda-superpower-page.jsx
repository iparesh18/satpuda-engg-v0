import { useEffect, useMemo, useState } from "react";
import { Menu, RefreshCw, Sparkles } from "lucide-react";
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

export default function SatpudaSuperpowerPage() {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const overviewState = useAdminOverview(apiBaseUrl);
  const overview = overviewState.data;

  const initialCollectionKey = getDefaultAdminCollectionKey(overview?.collections);
  const [activeCollectionKey, setActiveCollectionKey] = useState(initialCollectionKey);
  const activeCollection = useMemo(
    () => overview?.collections?.find((collection) => collection.key === activeCollectionKey) || overview?.collections?.[0],
    [activeCollectionKey, overview]
  );

  const [query, setQuery] = useState(() => createDefaultQuery(activeCollection));
  const debouncedSearch = useDebouncedValue(query.search, 350);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const desktopShellClass = sidebarCollapsed
    ? "mx-auto grid min-h-screen w-full lg:grid-cols-[88px_minmax(0,1fr)] 2xl:grid-cols-[88px_minmax(0,1fr)]"
    : "mx-auto grid min-h-screen w-full lg:grid-cols-[300px_minmax(0,1fr)] 2xl:grid-cols-[320px_minmax(0,1fr)]";

  useEffect(() => {
    if (!overview?.collections?.length) {
      return;
    }

    const collectionExists = overview.collections.some((collection) => collection.key === activeCollectionKey);
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] text-white">
      <Toaster richColors theme="dark" position="top-right" />

      <div className={desktopShellClass}>
        <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:self-start">
          <AdminSidebar
            collections={overview?.collections || []}
            activeCollectionKey={activeCollectionKey}
            onSelectCollection={handleSelectCollection}
            onRefresh={handleRefresh}
            loading={overviewState.loading}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((current) => !current)}
          />
        </div>

        <div className="flex min-w-0 flex-col border-l border-white/10 bg-slate-950/20">
          <header className="border-b border-white/10 bg-slate-950/60 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-start gap-3">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      className="border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 lg:hidden"
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] border-white/10 bg-slate-950/95 p-0 text-white">
                    <AdminSidebar
                      collections={overview?.collections || []}
                      activeCollectionKey={activeCollectionKey}
                      onSelectCollection={handleSelectCollection}
                      onRefresh={handleRefresh}
                      loading={overviewState.loading}
                    />
                  </SheetContent>
                </Sheet>

                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    <Sparkles className="h-4 w-4" />
                    Public admin workspace
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    {activeCollectionDetails?.label || "Admin Dashboard"}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm text-slate-300">
                    Browse MongoDB collections with filters, sorting, export tools, and responsive data inspection.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="hidden border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 lg:inline-flex"
                  onClick={() => setSidebarCollapsed((current) => !current)}
                >
                  {sidebarCollapsed ? "Open sidebar" : "Close sidebar"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh all
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 px-4 py-6 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            {overviewState.error ? (
              <Card className="border-red-400/20 bg-red-500/10 text-white backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-white">Unable to load dashboard overview</CardTitle>
                  <CardDescription className="text-red-100/80">{overviewState.error}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button type="button" onClick={overviewState.refresh} className="bg-white text-slate-950 hover:bg-slate-100">
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

            <div className="rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-5 2xl:p-6">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Active collection view</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {activeCollectionDetails?.label || "Collection data"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">Search, filter, sort, copy, and export the current visible dataset.</p>
                </div>
                <div className="text-sm text-slate-400">
                  {collectionData?.stats?.latestSubmission ? (
                    <>
                      Latest submission: <span className="text-slate-200">{new Date(collectionData.stats.latestSubmission.createdAt).toLocaleString()}</span>
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
                  <Card className="border-red-400/20 bg-red-500/10 text-white backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="text-white">Unable to load collection</CardTitle>
                      <CardDescription className="text-red-100/80">{collectionState.error}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button type="button" onClick={collectionState.refresh} className="bg-white text-slate-950 hover:bg-slate-100">
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
                  pagination={pagination}
                  onPageChange={(page) => setQuery((current) => ({ ...current, page }))}
                  onLimitChange={(limit) => setQuery((current) => ({ ...current, limit, page: 1 }))}
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      <AdminRecordDialog
        record={selectedRecord}
        columns={columns}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCopyValue={handleCopyValue}
      />
    </div>
  );
}
