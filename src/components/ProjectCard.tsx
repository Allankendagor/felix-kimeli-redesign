import { Link } from "react-router-dom";
import { Bed, Bath, Square } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className={`group relative block overflow-hidden opacity-0 animate-fade-up bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full font-medium">
            {project.category}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Plans
          </span>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 space-y-3">
        {/* Property specs row */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {project.beds && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{project.beds} Beds</span>
            </div>
          )}
          {project.baths && (
            <>
              {project.beds && <span className="text-border">|</span>}
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{project.baths} Baths</span>
              </div>
            </>
          )}
          {project.sqm && (
            <>
              {(project.beds || project.baths) && <span className="text-border">|</span>}
              <div className="flex items-center gap-1">
                <Square className="w-4 h-4" />
                <span>{project.sqm} sq m</span>
              </div>
            </>
          )}
          {project.projectId && (
            <>
              <span className="text-border">|</span>
              <span className="text-primary font-medium">{project.projectId}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-foreground text-lg font-heading font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        {/* Price row */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-baseline gap-1">
            <span className="text-primary text-xl font-bold">${project.price}</span>
            <span className="text-muted-foreground text-xs">Architectural drawings</span>
          </div>
          <span className="text-muted-foreground text-xs">{project.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
