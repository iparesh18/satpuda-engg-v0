import { Copy, Loader2, Trash2, X } from "lucide-react";
import { Button } from "../../ui/button.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog.jsx";
import { Separator } from "../../ui/separator.jsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../ui/alert-dialog.jsx";
import { formatAdminDateTime, formatAdminValue } from "../utils/format.js";

export function AdminRecordDialog({ record, columns = [], open, onOpenChange, onCopyValue, onDeleteRecord, deleting = false }) {
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
        className="max-h-[90vh] w-[min(92vw,900px)] overflow-y-auto border-slate-200 bg-white text-slate-900 shadow-2xl shadow-slate-900/20 sm:max-w-4xl"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-[#021545]">
            <span>Record details</span>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="text-slate-500 hover:bg-slate-100 hover:text-[#021545]"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <Separator className="bg-slate-200" />

        <div className="grid gap-4 overflow-y-auto pr-1">
          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Record ID</p>
              <p className="mt-1 break-all text-sm text-slate-700">{record._id}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Created at</p>
              <p className="mt-1 text-sm text-slate-700">{formatAdminDateTime(record.createdAt)}</p>
            </div>
          </div>

          <div className="space-y-3">
            {orderedEntries.map(([key, value]) => (
              <div key={key} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d60b0b]">{key}</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                      {formatAdminValue(value)}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="shrink-0 text-slate-500 hover:bg-slate-100 hover:text-[#021545]"
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

        {onDeleteRecord ? (
          <>
            <Separator className="bg-slate-200" />
            <div className="flex justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#d60b0b]/30 bg-white text-[#d60b0b] hover:bg-[#d60b0b]/10"
                    disabled={deleting}
                  >
                    {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                    Delete record
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="border-slate-200 bg-white text-slate-900">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#021545]">Delete this record?</AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-500">
                      This permanently removes the submission from the database. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-slate-200 bg-white text-slate-700 hover:bg-slate-100">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-[#d60b0b] text-white hover:bg-[#d60b0b]/90"
                      onClick={() => onDeleteRecord(record)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
