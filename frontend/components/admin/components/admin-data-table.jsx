import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, Copy, Eye, Rows3, ArrowUpDown } from "lucide-react";
import { Button } from "../../ui/button.jsx";
import { Card, CardContent } from "../../ui/card.jsx";
import { Badge } from "../../ui/badge.jsx";
import { ScrollArea } from "../../ui/scroll-area.jsx";
import { Skeleton } from "../../ui/skeleton.jsx";
import { formatAdminDateTime, formatAdminValue } from "../utils/format.js";

function DataCell({ column, value, onCopyValue }) {
  const displayValue = column.type === "date" ? formatAdminDateTime(value) : formatAdminValue(value);

  return (
    <td className="border-t border-white/8 px-4 py-3 align-top text-sm text-slate-100">
      <button
        type="button"
        onClick={() => onCopyValue(value)}
        className="group block w-full rounded-lg text-left transition hover:bg-white/5 focus:outline-none"
        title="Copy cell value"
      >
        <span className="flex items-start gap-2">
              <span className="min-w-0 flex-1 whitespace-pre-wrap break-words leading-6 text-slate-100">
            {displayValue}
          </span>
          <Copy className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500 opacity-0 transition group-hover:opacity-100" />
        </span>
      </button>
    </td>
  );
}

export function AdminDataTable({
  columns = [],
  rows = [],
  loading = false,
  sortBy,
  sortOrder,
  onSort,
  onCopyValue,
  onViewRecord,
  pagination,
  onPageChange,
  onLimitChange
}) {
  const totalEntries = pagination?.totalEntries || 0;
  const totalPages = pagination?.totalPages || 1;
  const currentPage = pagination?.page || 1;
  const startEntry = totalEntries === 0 ? 0 : (currentPage - 1) * pagination.limit + 1;
  const endEntry = Math.min(currentPage * pagination.limit, totalEntries);

  return (
    <Card className="overflow-hidden border-white/10 bg-white/5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <CardContent className="p-0">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-sm font-medium text-white">Visible records</p>
            <p className="text-xs text-slate-400">
              Showing {startEntry}-{endEntry} of {totalEntries}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Rows3 className="h-4 w-4 text-cyan-300" />
            <span>Sticky header and responsive table layout</span>
          </div>
        </div>

            <ScrollArea className="w-full overflow-x-auto">
              <div className="min-w-max">
                <table className="w-full border-separate border-spacing-0 table-auto">
              <thead className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-xl">
                <tr>
                  {columns.map((column) => {
                    const isSorted = sortBy === column.key;
                    const sortIcon = isSorted ? (sortOrder === "asc" ? ArrowUp : ArrowDown) : ArrowUpDown;
                    const SortIcon = sortIcon;

                    return (
                      <th
                        key={column.key}
                        className="border-b border-white/10 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.22em] text-slate-300"
                      >
                        <button
                          type="button"
                          onClick={() => column.sortable && onSort(column.key)}
                          className={`inline-flex items-center gap-2 rounded-lg transition ${
                            column.sortable ? "hover:text-white" : "cursor-default"
                          }`}
                        >
                          <span>{column.label}</span>
                          {column.sortable ? <SortIcon className="h-3.5 w-3.5 text-slate-500" /> : null}
                        </button>
                      </th>
                    );
                  })}
                  <th className="border-b border-white/10 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 6 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {columns.map((column) => (
                        <td key={`${column.key}-${rowIndex}`} className="border-t border-white/8 px-4 py-3">
                          <Skeleton className="h-4 w-full rounded-full bg-white/10" />
                        </td>
                      ))}
                      <td className="border-t border-white/8 px-4 py-3">
                        <Skeleton className="h-4 w-24 rounded-full bg-white/10" />
                      </td>
                    </tr>
                  ))
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length + 1} className="px-4 py-16 text-center text-slate-400">
                      <div className="mx-auto max-w-md rounded-3xl border border-dashed border-white/15 bg-white/5 p-8">
                        <p className="text-lg font-medium text-white">No records found</p>
                        <p className="mt-2 text-sm text-slate-400">
                          Adjust the search or filters to reveal matching rows.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row._id || JSON.stringify(row)} className="group hover:bg-white/4">
                      {columns.map((column) => (
                        <DataCell
                          key={column.key}
                          column={column}
                          value={row[column.key]}
                          onCopyValue={onCopyValue}
                        />
                      ))}
                      <td className="border-t border-white/8 px-4 py-3 align-top">
                        <div className="flex flex-wrap items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                            onClick={() => onViewRecord(row)}
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </ScrollArea>

        <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Badge className="bg-white/10 text-white">{totalEntries} total</Badge>
            <span>Current page {currentPage} of {totalPages}</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <span>Rows per page</span>
              <select
                value={pagination.limit}
                onChange={(event) => onLimitChange(Number(event.target.value))}
                className="h-10 rounded-xl border border-white/10 bg-slate-950/50 px-3 text-sm text-white outline-none"
              >
                {[10, 20, 50, 100].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
