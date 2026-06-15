import { useCallback, useEffect, useState } from "react";
import { Star, Check, Trash2, RefreshCw, Clock, BadgeCheck, Inbox } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card.jsx";
import { Skeleton } from "../../ui/skeleton.jsx";
import { fetchAdminFeedback, approveFeedback, deleteFeedback } from "../services/feedback-api.js";

function FeedbackStars({ rating = 0 }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`h-4 w-4 ${index < filled ? "fill-current" : "text-slate-300"}`} />
      ))}
    </div>
  );
}

function FeedbackCard({ item, isPending, onApprove, onDelete, busyId }) {
  const busy = busyId === item._id;
  const meta = [item.branch, item.year, item.placed].filter(Boolean).join(" • ");
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-semibold text-[#021545]">{item.name}</p>
          {meta ? <p className="truncate text-xs font-medium text-[#d60b0b]">{meta}</p> : null}
          <p className="text-xs text-slate-400">
            {new Date(item.createdAt).toLocaleString()}
          </p>
        </div>
        <FeedbackStars rating={item.rating} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.feedback}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {isPending ? (
          <Button
            type="button"
            size="sm"
            disabled={busy}
            onClick={() => onApprove(item)}
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Check className="h-4 w-4" />
            {busy ? "Approving..." : "Okay, Approve"}
          </Button>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <BadgeCheck className="h-4 w-4" />
            Live on website
          </span>
        )}
        <Button
          type="button"
          size="sm"
          variant="outline"
          disabled={busy}
          onClick={() => onDelete(item)}
          className="border-slate-200 text-[#d60b0b] hover:bg-red-50 hover:text-black"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </div>
    </div>
  );
}

function EmptyState({ label }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-6 py-10 text-center">
      <Inbox className="h-8 w-8 text-slate-300" />
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export function FeedbackManager({ apiBaseUrl }) {
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busyId, setBusyId] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAdminFeedback(apiBaseUrl);
      setPending(Array.isArray(data?.pending) ? data.pending : []);
      setApproved(Array.isArray(data?.approved) ? data.approved : []);
    } catch (err) {
      setError(err?.message || "Failed to load feedback.");
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl]);

  useEffect(() => {
    load();
  }, [load]);

  const handleApprove = async (item) => {
    setBusyId(item._id);
    try {
      await approveFeedback(apiBaseUrl, item._id);
      toast.success("Feedback approved — now visible on the website.");
      await load();
    } catch (err) {
      toast.error(err?.message || "Failed to approve feedback.");
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (item) => {
    setBusyId(item._id);
    try {
      await deleteFeedback(apiBaseUrl, item._id);
      toast.success("Feedback deleted.");
      await load();
    } catch (err) {
      toast.error(err?.message || "Failed to delete feedback.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d60b0b]">Feedback moderation</p>
          <h3 className="mt-2 text-xl font-semibold text-[#021545]">Student Feedback</h3>
          <p className="mt-1 text-sm text-slate-500">
            Pending feedback stays hidden until you approve it. Approved feedback shows in the homepage marquee.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={load}
          disabled={loading}
          className="border-slate-200 bg-white text-[#021545] hover:bg-slate-100 hover:text-black"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error ? (
        <Card className="border-[#d60b0b]/20 bg-[#d60b0b]/5 text-slate-900">
          <CardHeader>
            <CardTitle className="text-[#d60b0b]">Unable to load feedback</CardTitle>
            <CardDescription className="text-[#d60b0b]/80">{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button type="button" onClick={load} className="bg-[#021545] text-white hover:bg-[#021545]/90">
              Retry
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Pending */}
        <section className="rounded-3xl border border-slate-200 bg-white/60 p-4 shadow-sm sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-semibold text-[#021545]">Pending Feedback</h4>
              <p className="text-xs text-slate-400">{pending.length} awaiting approval</p>
            </div>
          </div>

          <div className="space-y-3">
            {loading ? (
              <>
                <Skeleton className="h-28 w-full rounded-2xl bg-slate-100" />
                <Skeleton className="h-28 w-full rounded-2xl bg-slate-100" />
              </>
            ) : pending.length ? (
              pending.map((item) => (
                <FeedbackCard
                  key={item._id}
                  item={item}
                  isPending
                  onApprove={handleApprove}
                  onDelete={handleDelete}
                  busyId={busyId}
                />
              ))
            ) : (
              <EmptyState label="No pending feedback right now." />
            )}
          </div>
        </section>

        {/* Approved */}
        <section className="rounded-3xl border border-slate-200 bg-white/60 p-4 shadow-sm sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-semibold text-[#021545]">Current Feedback</h4>
              <p className="text-xs text-slate-400">{approved.length} live on website</p>
            </div>
          </div>

          <div className="space-y-3">
            {loading ? (
              <>
                <Skeleton className="h-28 w-full rounded-2xl bg-slate-100" />
                <Skeleton className="h-28 w-full rounded-2xl bg-slate-100" />
              </>
            ) : approved.length ? (
              approved.map((item) => (
                <FeedbackCard
                  key={item._id}
                  item={item}
                  isPending={false}
                  onApprove={handleApprove}
                  onDelete={handleDelete}
                  busyId={busyId}
                />
              ))
            ) : (
              <EmptyState label="No approved feedback yet." />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
