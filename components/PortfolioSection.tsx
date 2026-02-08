import React from "react";
import ProjectCard from "./ProjectCard";
import { Project, VisibilityState } from "@/types";

interface PortfolioSectionProps {
  projects: Project[];
  isVisible: VisibilityState;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  isVisible,
}) => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/30"
      data-animate
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-4 badge-pop">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 title-slide-up">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto subtitle-fade">
            Delivering excellence through innovative web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={isVisible[`project-${project.id}`] || false}
              delay={`${project.id * 0.1}s`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to see your project here?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-500/40 transition-all transform hover:-translate-y-1"
          >
            Start Your Project
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;