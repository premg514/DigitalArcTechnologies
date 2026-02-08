import React from "react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isActive,
  isVisible,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      data-animate
      id={`service-${index}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`service-card group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
        isActive
          ? "border-teal-500 shadow-xl shadow-teal-500/20 scale-105 -translate-y-2"
          : "border-gray-200 hover:border-teal-300"
      } ${isVisible ? "card-visible" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      <div className="relative">
        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-bounce">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-700 feature-slide"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 checkmark-pop`}
              >
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative corner with pulse */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity corner-glow"></div>

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="shine-effect"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;