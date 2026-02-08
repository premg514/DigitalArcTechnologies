import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Service, VisibilityState } from "@/types";

interface ServicesSectionProps {
  services: Service[];
  isVisible: VisibilityState;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  isVisible,
}) => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white" data-animate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-4 badge-pop">
            What We Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 title-slide-up">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto subtitle-fade">
            Comprehensive web solutions tailored to your unique business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isActive={activeService === index}
              isVisible={isVisible[`service-${index}`] || false}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;