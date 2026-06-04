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

const CHART_COLORS = ["#021545", "#d60b0b", "#2563eb", "#f59e0b"];

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
      <Card className="border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-900/5">
        <CardHeader>
          <CardTitle className="text-[#021545]">Submission trend</CardTitle>
          <CardDescription className="text-slate-500">Rolling activity across the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineSeries}>
              <defs>
                <linearGradient id="adminTotalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#021545" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#021545" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(2,21,69,0.08)" vertical={false} />
              <XAxis dataKey="label" stroke="#64748b" tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  color: "#021545",
                  boxShadow: "0 10px 30px rgba(2,21,69,0.08)"
                }}
              />
              <Area type="monotone" dataKey="total" stroke="#021545" fill="url(#adminTotalGradient)" strokeWidth={3} />
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

      <Card className="border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-900/5">
        <CardHeader>
          <CardTitle className="text-[#021545]">Collection distribution</CardTitle>
          <CardDescription className="text-slate-500">Total entries per MongoDB collection.</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={overviewRows} layout="vertical">
              <CartesianGrid stroke="rgba(2,21,69,0.08)" horizontal={false} />
              <XAxis type="number" stroke="#64748b" tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="name" stroke="#64748b" tickLine={false} axisLine={false} width={90} />
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  color: "#021545",
                  boxShadow: "0 10px 30px rgba(2,21,69,0.08)"
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
