export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <h1 className="text-2xl font-bold text-pink-600 mb-6">Goismo</h1>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
          🏠 Home
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
          🛍 Shop
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
          📊 Data
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
          👥 Customers
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
          ⚙️ Settings
        </li>
      </ul>
    </aside>
  );
}
