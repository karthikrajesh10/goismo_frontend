function ServiceCard({ title, subtitle, icon: Icon, bgColor, iconColor }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
      {/* Icon */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} mb-2`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      {/* Title + Subtitle */}
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

export default ServiceCard;
