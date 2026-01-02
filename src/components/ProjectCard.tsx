import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className={`group relative block overflow-hidden opacity-0 animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full">
          <p className="text-primary text-xs uppercase tracking-widest mb-2">
            {project.category}
          </p>
          <h3 className="text-foreground text-xl md:text-2xl font-heading font-medium">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {project.year}
          </p>
        </div>
      </div>

      {/* Always visible title on mobile */}
      <div className="md:hidden p-4 bg-card">
        <p className="text-primary text-xs uppercase tracking-widest mb-1">
          {project.category}
        </p>
        <h3 className="text-foreground text-lg font-heading font-medium">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
