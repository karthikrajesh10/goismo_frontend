import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", orders: 400, payments: 240 },
  { name: "Tue", orders: 300, payments: 139 },
  { name: "Wed", orders: 200, payments: 980 },
  { name: "Thu", orders: 278, payments: 390 },
  { name: "Fri", orders: 189, payments: 480 },
];

export default function ChartSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">Orders & Payments (This Week)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="#8884d8" />
          <Bar dataKey="payments" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
