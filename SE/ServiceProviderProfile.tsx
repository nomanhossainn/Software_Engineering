import React from "react";
import { Star, Phone, Mail, Clock, Wrench } from "lucide-react";

interface Provider {
  name: string;
  imageUrl: string;
  rating: number;
  services: string[];
  phone: string;
  email: string;
  availability: string;
}

interface ServiceProviderProfileProps {
  provider: Provider;
}

const ServiceProviderProfile: React.FC<ServiceProviderProfileProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl w-full mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={provider.imageUrl}
          alt={provider.name}
          className="w-20 h-20 object-cover rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-semibold">{provider.name}</h2>
          <div className="flex items-center text-yellow-500 mt-1">
            <Star className="w-4 h-4 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">{provider.rating} / 5</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2 flex items-center">
          <Wrench className="w-4 h-4 mr-2" />
          Services Offered
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {provider.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2 flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          Contact Info
        </h3>
        <p className="text-sm text-gray-700 mb-1">Phone: {provider.phone}</p>
        <p className="text-sm text-gray-700">Email: {provider.email}</p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Availability
        </h3>
        <p className="text-sm text-gray-700">{provider.availability}</p>
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
