import React from "react";
import { Technology, VisibilityState } from "@/types";

interface TechnologiesSectionProps {
  technologies: Technology[];
  isVisible: VisibilityState;
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  technologies,
  isVisible,
}) => {
  return (
    <section className="py-24 bg-white" data-animate id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${isVisible["technologies"] ? "section-visible" : ""}`}
        >
          <div className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-4 badge-pop">
            Tech Stack
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 title-slide-up">
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto subtitle-fade">
            Building with the best and most modern tools in the industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              data-animate
              id={`tech-${index}`}
              className={`tech-card group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-teal-500 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-2 cursor-pointer ${isVisible[`tech-${index}`] ? "tech-visible" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="ripple-effect"></div>
              </div>

              <div className="relative">
                <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {tech.icon}
                </div>
                <div className="text-lg font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {tech.name}
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;