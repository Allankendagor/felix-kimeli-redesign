import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import WaveDivider from "@/components/WaveDivider";
import { getFeaturedProjects } from "@/data/projects";

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-20 w-20 h-20 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-primary/15 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-wide text-foreground opacity-0 animate-fade-up">
            Felix Kimeli
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground uppercase tracking-[0.3em] opacity-0 animate-fade-up stagger-2">
            Architectural Designer
          </p>
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 mt-12 text-primary uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300 opacity-0 animate-fade-up stagger-3"
          >
            View Work <ArrowRight size={18} />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-4">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
        
        <WaveDivider />
      </section>

      {/* Introduction */}
      <section className="relative py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-foreground mb-8">
              Creating Spaces That Inspire
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With over a decade of experience in architectural design, I specialize in 
              creating innovative spaces that harmonize form and function. Each project 
              is a unique journey of transforming visions into tangible, inspiring realities.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* Featured Projects */}
      <section className="relative py-24 md:py-32">
        <WaveDivider variant="top" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-foreground">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-card">
        <WaveDivider variant="top" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-foreground mb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it and explore how we can 
            bring your architectural vision to life.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
