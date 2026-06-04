import { Badge } from "../../ui/badge.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card.jsx";
import { formatAdminDateTime } from "../utils/format.js";

export function AdminOverviewCards({ collections = [], activeCollection }) {
  const totalEntries = collections.reduce((sum, collection) => sum + (collection.totalEntries || 0), 0);
  const latestSubmission = collections
    .map((collection) => collection.latestSubmission)
    .filter(Boolean)
    .sort((left, right) => new Date(right) - new Date(left))[0];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-900/5">
        <CardHeader className="pb-3">
          <CardDescription className="font-medium text-slate-500">Total submissions</CardDescription>
          <CardTitle className="text-3xl text-[#021545]">{totalEntries}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-slate-500">
          All records across the public database view.
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-900/5">
        <CardHeader className="pb-3">
          <CardDescription className="font-medium text-slate-500">Latest submission</CardDescription>
          <CardTitle className="text-lg text-[#021545]">
            {latestSubmission ? formatAdminDateTime(latestSubmission) : "No records yet"}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-slate-500">
          The most recent row created in any collection.
        </CardContent>
      </Card>

      <Card className="border-transparent bg-[#021545] text-white shadow-xl shadow-[#021545]/20">
        <CardHeader className="pb-3">
          <CardDescription className="font-medium text-white/70">Active collection</CardDescription>
          <CardTitle className="text-xl text-white">{activeCollection?.label || "—"}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-white/80">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/15 text-white">{activeCollection?.totalEntries || 0} entries</Badge>
            <Badge className="bg-[#d60b0b] text-white">{activeCollection?.filterDefinitions?.length || 0} filters</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
