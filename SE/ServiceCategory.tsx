import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  rating: number;
  skillsCount: number;
  iconSrc?: string;
  iconAlt: string;
}

// ✅ Category Card Component
const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  rating,
  skillsCount,
  iconSrc = "/placeholder.svg",
  iconAlt,
}) => {
  const linkTo = `/categories/${title.toLowerCase().replace(/\s+&\s+/g, "-")}`;

  return (
    <Link to={linkTo}>
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center h-full">
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-gray-900">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-700">{rating}/5</span>
          </div>
          <p className="text-sm text-gray-600">{skillsCount} Skills</p>
        </div>
        <div className="w-16 h-16 relative">
          <img
            src={iconSrc}
            alt={iconAlt}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

// ✅ Main Section Component
const ServiceCategory: React.FC = () => {
  const categories: CategoryCardProps[] = [
    {
      title: "Development & IT",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Development and IT icon",
    },
    {
      title: "Design & Creative",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Design and Creative icon",
    },
    {
      title: "Sales & Marketing",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Sales and Marketing icon",
    },
    {
      title: "Customer Support",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Customer Support icon",
    },
    {
      title: "Finance & Accounting",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Finance and Accounting icon",
    },
    {
      title: "Engineering",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Engineering icon",
    },
    {
      title: "Writing & Translation",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Writing and Translation icon",
    },
    {
      title: "Legal",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Legal icon",
    },
    {
      title: "Photography",
      rating: 4.85,
      skillsCount: 459,
      iconSrc: "/placeholder.svg",
      iconAlt: "Photography icon",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Browse By Category</h2>

        <div className="mb-6 text-center">
          <p className="text-gray-700">
            Looking For Repairer?{" "}
            <Link to="/browse-jobs" className="text-blue-600 hover:underline">
              Browse your specialist
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
