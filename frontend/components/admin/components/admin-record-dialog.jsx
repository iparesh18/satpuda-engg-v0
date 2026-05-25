import { Copy, X } from "lucide-react";
import { Button } from "../../ui/button.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog.jsx";
import { Separator } from "../../ui/separator.jsx";
import { formatAdminDateTime, formatAdminValue } from "../utils/format.js";

export function AdminRecordDialog({ record, columns = [], open, onOpenChange, onCopyValue }) {
  if (!record) {
    return null;
  }

  const orderedEntries = columns.length
    ? columns.map((column) => [column.key, record?.[column.key]])
    : Object.entries(record).filter(([key]) => key !== "_id" && key !== "__v");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[90vh] w-[min(92vw,900px)] overflow-y-auto border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-slate-950/60 backdrop-blur-xl sm:max-w-4xl"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-white">
            <span>Record details</span>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="text-slate-300 hover:bg-white/10 hover:text-white"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <Separator className="bg-white/10" />

        <div className="grid gap-4 overflow-y-auto pr-1">
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Record ID</p>
              <p className="mt-1 break-all text-sm text-slate-100">{record._id}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Created at</p>
              <p className="mt-1 text-sm text-slate-100">{formatAdminDateTime(record.createdAt)}</p>
            </div>
          </div>

          <div className="space-y-3">
            {orderedEntries.map(([key, value]) => (
              <div key={key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/60">{key}</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-100">
                      {formatAdminValue(value)}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="shrink-0 text-slate-300 hover:bg-white/10 hover:text-white"
                    onClick={() => onCopyValue(value)}
                    title="Copy value"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
