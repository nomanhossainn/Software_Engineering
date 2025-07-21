import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCategoryCardProps {
  icon: LucideIcon;            // Lucide icon component
  title: string;
  description: string;
  proCount: number | string;
  iconBgColor: string;         // Tailwind class like "bg-blue-500"
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  icon: Icon,
  title,
  description,
  proCount,
  iconBgColor,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${iconBgColor}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">{proCount}</span>
          <p className="text-xs text-gray-500">pros</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
