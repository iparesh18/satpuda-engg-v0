import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card.jsx";
import { formatAdminDate } from "../utils/format.js";

const CHART_COLORS = ["#22d3ee", "#34d399", "#f59e0b", "#a78bfa"];

export function AdminCharts({ charts, collections }) {
  const overviewRows = collections.map((collection) => ({
    name: collection.label,
    total: collection.totalEntries || 0
  }));

  const lineSeries = charts?.labels?.map((label, index) => ({
    label: formatAdminDate(label),
    total: charts.totalSeries?.[index] || 0,
    ...Object.fromEntries(
      (charts.trendSeries || []).map((series) => [series.label, series.values?.[index] || 0])
    )
  })) || [];

  return (
    <div className="grid gap-4 2xl:grid-cols-[1.5fr_0.95fr] xl:grid-cols-[1.6fr_1fr]">
      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white">Submission trend</CardTitle>
          <CardDescription className="text-slate-300">Rolling activity across the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineSeries}>
              <defs>
                <linearGradient id="adminTotalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="label" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "rgba(15, 23, 42, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  color: "#fff"
                }}
              />
              <Area type="monotone" dataKey="total" stroke="#22d3ee" fill="url(#adminTotalGradient)" strokeWidth={3} />
              {(charts?.trendSeries || []).map((series, index) => (
                <Line
                  key={series.key}
                  type="monotone"
                  dataKey={series.label}
                  stroke={CHART_COLORS[index % CHART_COLORS.length]}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white">Collection distribution</CardTitle>
          <CardDescription className="text-slate-300">Total entries per MongoDB collection.</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={overviewRows} layout="vertical">
              <CartesianGrid stroke="rgba(255,255,255,0.08)" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} width={90} />
              <Tooltip
                contentStyle={{
                  background: "rgba(15, 23, 42, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  color: "#fff"
                }}
              />
              <Bar dataKey="total" radius={[0, 12, 12, 0]}>
                {overviewRows.map((entry, index) => (
                  <Cell key={entry.name} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
