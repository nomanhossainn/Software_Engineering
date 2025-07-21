import React from "react";
import ServiceProviderProfile from "../Components/ServiceProviderProfile";

interface ServiceProviderType {
  name: string;
  imageUrl: string;
  rating: number;
  services: string[];
  phone: string;
  email: string;
  availability: string;
}

const mockProvider: ServiceProviderType = {
  name: "Md. Noman Hossain",
  imageUrl: "https://via.placeholder.com/100x100",
  rating: 4.9,
  services: ["AC Repair", "Fridge Service", "Washing Machine Setup"],
  phone: "+880123456789",
  email: "noman@example.com",
  availability: "Monday - Saturday, 9:00 AM – 7:00 PM",
};

const ServiceProvider: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <ServiceProviderProfile provider={mockProvider} />
    </div>
  );
};

export default ServiceProvider;
