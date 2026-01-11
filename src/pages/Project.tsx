import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Bed, Bath, Square } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Lightbox from "@/components/Lightbox";
import { getProjectById, projects } from "@/data/projects";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading text-foreground mb-4">Project not found</h1>
            <Link to="/portfolio" className="text-primary hover:underline">
              Back to Portfolio
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[70vh] md:h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url('${project.images[0]}')` }}
          onClick={() => openLightbox(0)}
        >
          <div className="absolute inset-0 bg-background/30" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto">
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </Link>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">
              {project.category} — {project.year}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Specs */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Property Details */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Bed size={20} className="text-primary" />
                <span className="text-foreground font-medium">{project.beds}</span>
                <span>Beds</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Bath size={20} className="text-primary" />
                <span className="text-foreground font-medium">{project.baths}</span>
                <span>Baths</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Square size={20} className="text-primary" />
                <span className="text-foreground font-medium">{project.sqm}</span>
                <span>sq m</span>
              </div>
              <div className="text-primary font-mono text-sm">
                {project.projectId}
              </div>
            </div>
            
            {/* Price */}
            <div className="text-right">
              <p className="text-3xl md:text-4xl font-heading text-primary font-medium">
                ${project.price}
              </p>
              <p className="text-sm text-muted-foreground">Architectural drawings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-heading text-foreground mb-6">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link 
                to={`/project/${prevProject.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft size={24} />
                <div className="hidden md:block">
                  <p className="text-xs uppercase tracking-widest mb-1">Previous</p>
                  <p className="font-heading text-foreground">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextProject ? (
              <Link 
                to={`/project/${nextProject.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right"
              >
                <div className="hidden md:block">
                  <p className="text-xs uppercase tracking-widest mb-1">Next</p>
                  <p className="font-heading text-foreground">{nextProject.title}</p>
                </div>
                <ChevronRight size={24} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={project.images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </Layout>
  );
};

export default Project;
