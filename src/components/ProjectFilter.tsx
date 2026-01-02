import { categories } from "@/data/projects";

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({ activeCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
            activeCategory === category
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
