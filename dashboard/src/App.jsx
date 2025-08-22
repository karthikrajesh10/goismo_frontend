import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import ChartSection from "./components/ChartSection";
import ActionCard from "./components/ActionCard";
import ServiceCard from "./components/ServiceCard";

// Lucide Icons
import {
  DollarSign,
  FileText,
  Users,
  Truck,
  Eye,
  Star,
  ShoppingCart,
  Share2,
  Tag,
  Home,
  Megaphone,
  Gift,
  Folder,
} from "lucide-react";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ✅ Sidebar (hidden on mobile) */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* ✅ Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-x-hidden">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Action Section */}
        <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side Text */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-red-500 mb-2">
              Well begun is half done
            </h2>
            <p className="text-sm text-gray-500">
              Complete the following steps to sell
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ActionCard
              title="1. Certification"
              subtitle="Upload qualification information"
              color="linear-gradient(90deg, #ff7eb3, #ff758c)"
            />
            <ActionCard
              title="2. Upload a product"
              subtitle="Fill in product information"
              color="linear-gradient(90deg, #6a11cb, #2575fc)"
            />
            <ActionCard
              title="3. Open for sale"
              subtitle="Choose to open any sales channel"
              color="linear-gradient(90deg, #a18cd1, #fbc2eb)"
            />
          </div>
        </div>

        {/* ✅ Today's Data (Stats Section) */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Today’s Data
            </h2>
            <button className="text-sm text-blue-500 hover:underline">
              More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatsCard
              title="Payment Amount"
              value="8,992"
              icon={DollarSign}
              bgColor="bg-pink-100"
              iconColor="bg-pink-500"
              yesterday="8,638"
            />
            <StatsCard
              title="Payment Orders"
              value="793"
              icon={FileText}
              bgColor="bg-blue-100"
              iconColor="bg-blue-500"
              yesterday="753"
            />
            <StatsCard
              title="Customers"
              value="280"
              icon={Users}
              bgColor="bg-purple-100"
              iconColor="bg-purple-500"
              yesterday="320"
            />
            <StatsCard
              title="Pending Orders"
              value="480"
              icon={Truck}
              bgColor="bg-green-100"
              iconColor="bg-green-500"
              yesterday="470"
            />
            <StatsCard
              title="Live Viewers"
              value="23,466"
              icon={Eye}
              bgColor="bg-yellow-100"
              iconColor="bg-yellow-500"
              yesterday="22,089"
            />
            <StatsCard
              title="New Attention"
              value="4,890"
              icon={Star}
              bgColor="bg-red-100"
              iconColor="bg-red-500"
              yesterday="3,800"
            />
          </div>
        </div>

        {/* ✅ Chart Section */}
        <ChartSection />

        {/* ✅ Service Section */}
        <div className="bg-white rounded-xl shadow p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Operations Assistant
            </h2>
            <button className="text-sm text-pink-500 hover:underline">More</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <ServiceCard
              title="Small telecast live"
              subtitle="Live sales in WeChat"
              icon={DollarSign}
              bgColor="bg-pink-100"
              iconColor="text-pink-500"
            />
            <ServiceCard
              title="Mini Program Store"
              subtitle="WeChat Mini Program Store"
              icon={ShoppingCart}
              bgColor="bg-green-100"
              iconColor="text-green-500"
            />
            <ServiceCard
              title="Distribution market"
              subtitle="One-click promotion"
              icon={Share2}
              bgColor="bg-blue-100"
              iconColor="text-blue-500"
            />
            <ServiceCard
              title="Coupon"
              subtitle="Store marketing essentials"
              icon={Tag}
              bgColor="bg-red-100"
              iconColor="text-red-500"
            />
            <ServiceCard
              title="Store construction"
              subtitle="Can be customized"
              icon={Home}
              bgColor="bg-indigo-100"
              iconColor="text-indigo-500"
            />
            <ServiceCard
              title="Promoting ads"
              subtitle="WeChat billion-level exposure"
              icon={Megaphone}
              bgColor="bg-orange-100"
              iconColor="text-orange-500"
            />
            <ServiceCard
              title="Promotion rebate"
              subtitle="Help you sell goods"
              icon={Gift}
              bgColor="bg-rose-100"
              iconColor="text-rose-500"
            />
            <ServiceCard
              title="Asset Management"
              subtitle="Income and withdrawal"
              icon={Folder}
              bgColor="bg-teal-100"
              iconColor="text-teal-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
