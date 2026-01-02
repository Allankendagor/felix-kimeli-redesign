import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import { projects, getProjectsByCategory } from "@/data/projects";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
      <section className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground opacity-0 animate-fade-up stagger-1">
              Selected Works
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2">
              A curated collection of architectural projects spanning residential, 
              commercial, and conceptual design.
            </p>
          </div>

          {/* Filter */}
          <div className="mb-12 opacity-0 animate-fade-up stagger-3">
            <ProjectFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>

          {/* Projects Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            key={activeCategory}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
