
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/data";

interface ContentCardProps {
  project: Project;
}

const ContentCard = ({ project }: ContentCardProps) => {
  return (
    <div className="card-hover relative rounded-md overflow-hidden min-w-[220px] sm:min-w-[280px] h-[160px] sm:h-[180px] mx-2">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      
      {/* Info layer that appears on hover */}
      <div className="info-layer absolute inset-0 bg-gradient-to-t from-netflix-black/95 via-netflix-black/80 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white font-medium text-lg">{project.title}</h3>
        <p className="text-white/70 text-sm line-clamp-2 mb-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-netflix-gray/30 text-white/90 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-netflix-gray/30 text-white/90 px-2 py-1 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 bg-netflix-red text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
            >
              <ExternalLink size={12} />
              View
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 bg-netflix-gray/50 text-white px-2 py-1 rounded hover:bg-netflix-gray/70 transition-colors"
            >
              <Github size={12} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
