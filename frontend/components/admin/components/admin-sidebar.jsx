import { ChevronLeft, ChevronRight, Database, RefreshCw } from "lucide-react";
import { Button } from "../../ui/button.jsx";
import { ScrollArea } from "../../ui/scroll-area.jsx";
import { Skeleton } from "../../ui/skeleton.jsx";
import { getAdminCollectionTemplate } from "../config/collections.js";

export function AdminSidebar({
  collections = [],
  activeCollectionKey,
  onSelectCollection,
  onRefresh,
  loading = false,
  collapsed = false,
  onToggleCollapse
}) {
  return (
    <aside className={`flex h-full flex-col border-r border-slate-200 bg-white backdrop-blur-xl transition-[width] duration-300 ${collapsed ? "w-22" : "w-80"}`}>
      <div className="border-b border-slate-200 p-4">
        <div className={`mb-4 flex ${collapsed ? "flex-col items-center gap-3" : "items-start gap-3"}`}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#021545] text-white shadow-lg shadow-[#021545]/20">
            <Database className="h-5 w-5" />
          </div>
          {!collapsed ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d60b0b]">Satpuda Admin</p>
              <h1 className="mt-1 text-lg font-semibold text-[#021545]">Database Control</h1>
              <p className="text-sm text-slate-500">Public admin dashboard</p>
            </div>
          ) : null}
        </div>

        <div className={`flex ${collapsed ? "flex-col" : "items-center gap-2"}`}>
          <Button
            type="button"
            variant="outline"
            className={`border-slate-200 bg-white text-[#021545] hover:bg-slate-100 hover:text-black ${collapsed ? "w-full justify-center px-0" : "flex-1 justify-start"}`}
            onClick={onRefresh}
            title="Refresh dashboard"
          >
            <RefreshCw className="h-4 w-4" />
            {!collapsed ? "Refresh dashboard" : null}
          </Button>

          {onToggleCollapse ? (
            <Button
              type="button"
              variant="outline"
              className={`border-slate-200 bg-white text-[#021545] hover:bg-slate-100 hover:text-black ${collapsed ? "w-full justify-center px-0" : "shrink-0"}`}
              onClick={onToggleCollapse}
              title={collapsed ? "Open sidebar" : "Close sidebar"}
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              {!collapsed ? "Close" : null}
            </Button>
          ) : null}
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className={`space-y-2 p-4 ${collapsed ? "px-3" : ""}`}>
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-10 w-full rounded-xl bg-slate-100" />
              <Skeleton className="h-10 w-full rounded-xl bg-slate-100" />
            </div>
          ) : (
            collections.map((collection) => {
              const isActive = collection.key === activeCollectionKey;
              const Icon = getAdminCollectionTemplate(collection.key).icon;

              return (
                <button
                  key={collection.key}
                  type="button"
                  onClick={() => onSelectCollection(collection.key)}
                  title={collection.label}
                  className={`flex w-full items-center rounded-xl border py-2 text-sm transition-all duration-200 ${
                    collapsed ? "justify-center px-0" : "px-3 text-left"
                  } ${
                    isActive
                      ? "border-[#021545] bg-[#021545] font-medium text-white shadow-sm shadow-[#021545]/20"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#021545]/30 hover:bg-slate-50 hover:text-black"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${collapsed ? "" : "mr-3"}`} />
                  {!collapsed ? <span className="block truncate font-medium">{collection.label}</span> : null}
                </button>
              );
            })
          )}
        </div>
      </ScrollArea>
    </aside>
  );
}
