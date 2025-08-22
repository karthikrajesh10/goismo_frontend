import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-semibold">Aoki's Shop</h1>

      <div className="flex items-center space-x-6">
        {/* Notice + Help */}
        <button className="text-gray-600 hover:text-gray-800">Notice</button>
        <button className="text-gray-600 hover:text-gray-800">Help Center</button>

        {/* Profile Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <FaUserCircle className="text-3xl text-gray-700" />
            <FiChevronDown
              className={`text-gray-600 transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg overflow-hidden">
              {/* Profile Header */}
              <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 border-b">
                <FaUserCircle className="text-3xl text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Karthik R S</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>

              {/* Menu Options */}
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
