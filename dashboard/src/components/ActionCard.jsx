// src/components/ActionCard.jsx
import React from "react";

function ActionCard({ title, subtitle, color }) {
  return (
    <div
      className="p-4 rounded-lg text-white shadow-md flex justify-between items-center"
      style={{ background: color }}
    >
      {/* Left side: text */}
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs opacity-90">{subtitle}</p>
      </div>

      {/* Right side: GO button */}
      <button className="bg-white text-gray-700 text-xs font-semibold px-4 py-1 rounded-full shadow">
        GO
      </button>
    </div>
  );
}

export default ActionCard;
