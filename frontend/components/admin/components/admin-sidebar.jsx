import { ChevronLeft, ChevronRight, Database, RefreshCw } from "lucide-react";
import { Button } from "../../ui/button.jsx";
import { ScrollArea } from "../../ui/scroll-area.jsx";
import { Skeleton } from "../../ui/skeleton.jsx";

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
    <aside className={`flex h-full flex-col border-r border-white/10 bg-slate-950/80 backdrop-blur-xl transition-[width] duration-300 ${collapsed ? "w-22" : "w-80"}`}>
      <div className="border-b border-white/10 p-4">
        <div className={`mb-4 flex ${collapsed ? "flex-col items-center gap-3" : "items-start gap-3"}`}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/20 to-emerald-400/20 text-cyan-200 shadow-lg shadow-cyan-500/10">
            <Database className="h-5 w-5" />
          </div>
          {!collapsed ? (
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Satpuda Admin</p>
              <h1 className="mt-1 text-lg font-semibold text-white">Database Control</h1>
              <p className="text-sm text-slate-400">Public admin dashboard</p>
            </div>
          ) : null}
        </div>

        <div className={`flex ${collapsed ? "flex-col" : "items-center gap-2"}`}>
          <Button
            type="button"
            variant="outline"
            className={`border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 ${collapsed ? "w-full justify-center px-0" : "flex-1 justify-start"}`}
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
              className={`border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 ${collapsed ? "w-full justify-center px-0" : "shrink-0"}`}
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
              <Skeleton className="h-10 w-full rounded-xl bg-white/5" />
              <Skeleton className="h-10 w-full rounded-xl bg-white/5" />
            </div>
          ) : (
            collections.map((collection) => {
              const isActive = collection.key === activeCollectionKey;

              return (
                <button
                  key={collection.key}
                  type="button"
                  onClick={() => onSelectCollection(collection.key)}
                  className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition-all duration-200 ${
                    isActive
                      ? "border-cyan-400/40 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <span className="block truncate font-medium">{collection.label}</span>
                </button>
              );
            })
          )}
        </div>
      </ScrollArea>
    </aside>
  );
}
