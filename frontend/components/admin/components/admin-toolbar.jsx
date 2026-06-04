import { Download, Filter, RefreshCw, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../../ui/button.jsx";
import { Input } from "../../ui/input.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select.jsx";
import { Separator } from "../../ui/separator.jsx";

export function AdminToolbar({
  collection,
  query,
  onQueryChange,
  onRefresh,
  onExportCsv,
  onExportXlsx,
  onResetFilters,
  loading = false
}) {
  const filterDefinitions = collection?.filterDefinitions || [];
  const filterOptions = collection?.filterOptions || {};
  const sortableFields = collection?.sortableFields || [];
  const columns = collection?.columns || [];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div className="grid flex-1 gap-3 md:grid-cols-[1.5fr_1fr_1fr_auto]">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query.search}
              onChange={(event) => onQueryChange("search", event.target.value)}
              placeholder="Global search in visible collection..."
              className="h-11 border-slate-200 bg-slate-50 pl-9 text-slate-900 placeholder:text-slate-400"
            />
          </label>

          <Select value={query.sortBy} onValueChange={(value) => onQueryChange("sortBy", value)}>
            <SelectTrigger className="h-11 w-full border-slate-200 bg-slate-50 text-slate-900">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortableFields.map((field) => {
                const column = columns.find((item) => item.key === field);
                return (
                  <SelectItem key={field} value={field}>
                    {column?.label || field}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <Select value={query.sortOrder} onValueChange={(value) => onQueryChange("sortOrder", value)}>
            <SelectTrigger className="h-11 w-full border-slate-200 bg-slate-50 text-slate-900">
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newest first</SelectItem>
              <SelectItem value="asc">Oldest first</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
            className="h-11 bg-[#021545] text-white hover:bg-[#021545]/90"
            onClick={onRefresh}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="border-slate-200 bg-white text-[#021545] hover:bg-slate-100"
            onClick={onResetFilters}
          >
            <Filter className="h-4 w-4" />
            Reset filters
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-slate-200 bg-white text-[#021545] hover:bg-slate-100"
            onClick={onExportCsv}
            disabled={loading}
          >
            <Download className="h-4 w-4" />
            CSV
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-slate-200 bg-white text-[#021545] hover:bg-slate-100"
            onClick={onExportXlsx}
            disabled={loading}
          >
            <Download className="h-4 w-4" />
            Excel
          </Button>
        </div>
      </div>

      <Separator className="my-4 bg-slate-200" />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {filterDefinitions.map((definition) => {
          if (definition.type === "date") {
            return (
              <label key={definition.key} className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{definition.label}</span>
                <Input
                  type="date"
                  value={query[definition.key]}
                  onChange={(event) => onQueryChange(definition.key, event.target.value)}
                  className="h-10 border-slate-200 bg-slate-50 text-slate-900"
                />
              </label>
            );
          }

          if (definition.type === "select") {
            const options = filterOptions[definition.key] || [];
            return (
              <label key={definition.key} className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{definition.label}</span>
                <Select value={query[definition.key] || "all"} onValueChange={(value) => onQueryChange(definition.key, value === "all" ? "" : value)}>
                  <SelectTrigger className="h-10 w-full border-slate-200 bg-slate-50 text-slate-900">
                    <SelectValue placeholder={`All ${definition.label.toLowerCase()}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All {definition.label}</SelectItem>
                    {options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>
            );
          }

          return (
            <label key={definition.key} className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{definition.label}</span>
              <Input
                value={query[definition.key]}
                onChange={(event) => onQueryChange(definition.key, event.target.value)}
                placeholder={`Filter by ${definition.label.toLowerCase()}`}
                className="h-10 border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
              />
            </label>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <SlidersHorizontal className="h-4 w-4 text-[#d60b0b]" />
          <span>Dynamic filters, sorting, pagination, and export controls stay in sync with the active collection.</span>
        </div>
        <div className="text-sm text-slate-400">
          Page size: {query.limit}
        </div>
      </div>
    </div>
  );
}
