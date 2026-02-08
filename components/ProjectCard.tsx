import React from "react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  delay: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isVisible,
  delay,
}) => {
  return (
    <div
      data-animate
      id={`project-${project.id}`}
      className={`project-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "card-visible" : ""}`}
      style={{ animationDelay: delay }}
    >
      <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {project.id === 0 ? (
            <img src="/spilora.png" alt={project.title} />
          ) : (
            <div className="text-white text-6xl opacity-20">{project.emoji}</div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold ${project.categoryColor}`}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-2xl font-bold text-gray-900 mb-2 transition-colors ${project.categoryColor.replace('text-', 'group-hover:text-')}`}>
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 ${project.techColor} rounded-lg text-xs font-medium`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {project.clientIcon}
            <span>{project.clientInfo}</span>
          </div>
          {project.id !== 0 && (
            <button className={`${project.categoryColor} font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all`}>
              View Details
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;