function StatsCard({ title, value, icon: Icon, bgColor, iconColor, yesterday }) {
  return (
    <div className={`p-4 rounded-lg shadow ${bgColor} flex flex-col`}>
      {/* Top Row */}
      <div className="flex items-center space-x-4">
        {/* Icon circle */}
        <div
          className={`p-3 rounded-full flex items-center justify-center ${iconColor}`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Value + Title */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{value}</h3>
          <p className="text-xs text-gray-600">{title}</p>
        </div>
      </div>

      {/* Yesterday’s Value */}
      <p className="text-xs text-gray-500 mt-2">Yesterday {yesterday}</p>
    </div>
  );
}

export default StatsCard;
