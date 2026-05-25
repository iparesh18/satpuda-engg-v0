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
      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <CardHeader className="pb-3">
          <CardDescription className="text-slate-300">Total submissions</CardDescription>
          <CardTitle className="text-3xl text-white">{totalEntries}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-slate-300">
          All records across the public database view.
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <CardHeader className="pb-3">
          <CardDescription className="text-slate-300">Latest submission</CardDescription>
          <CardTitle className="text-lg text-white">
            {latestSubmission ? formatAdminDateTime(latestSubmission) : "No records yet"}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-slate-300">
          The most recent row created in any collection.
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-linear-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <CardHeader className="pb-3">
          <CardDescription className="text-slate-300">Active collection</CardDescription>
          <CardTitle className="text-xl text-white">{activeCollection?.label || "—"}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-slate-200">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white">{activeCollection?.totalEntries || 0} entries</Badge>
            <Badge className="bg-white/10 text-white">{activeCollection?.filterDefinitions?.length || 0} filters</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
