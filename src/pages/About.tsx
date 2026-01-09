import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WaveDivider from "@/components/WaveDivider";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up">
              About
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground opacity-0 animate-fade-up stagger-1">
              Felix Kimeli
            </h1>
            <p className="mt-6 text-xl text-muted-foreground opacity-0 animate-fade-up stagger-2">
              Architectural Designer & Visualization Specialist
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden opacity-0 animate-fade-up stagger-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Felix Kimeli"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="opacity-0 animate-fade-up stagger-3">
              <h2 className="text-3xl font-heading font-light text-foreground mb-6">
                Crafting Architectural Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over a decade of experience in architectural design and visualization, 
                  I've dedicated my career to creating spaces that transcend the ordinary. 
                  My approach combines rigorous technical expertise with an intuitive 
                  understanding of how people interact with their environments.
                </p>
                <p>
                  Every project begins with a deep dive into understanding the client's 
                  vision, the site's unique characteristics, and the broader context of 
                  the built environment. This foundation allows me to develop designs 
                  that are not only aesthetically striking but also functionally superior 
                  and environmentally responsible.
                </p>
                <p>
                  I specialize in residential and commercial architecture, with particular 
                  expertise in sustainable design practices and advanced visualization 
                  techniques that bring concepts to life before the first foundation is laid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card relative">
        <WaveDivider variant="top" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-foreground">
              Services Offered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Architectural Design",
                description: "Complete design solutions from concept to construction documents, ensuring every detail aligns with your vision."
              },
              {
                title: "3D Visualization",
                description: "Photorealistic renders and virtual walkthroughs that bring designs to life before construction begins."
              },
              {
                title: "Interior Design",
                description: "Thoughtful interior spaces that balance aesthetics with functionality, creating environments that inspire."
              },
              {
                title: "Master Planning",
                description: "Comprehensive site planning for large-scale developments, optimizing land use and creating cohesive communities."
              },
              {
                title: "Sustainable Design",
                description: "Eco-conscious architecture that minimizes environmental impact while maximizing occupant comfort and efficiency."
              },
              {
                title: "Consultation",
                description: "Expert guidance on architectural decisions, helping you navigate complex projects with confidence."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="p-8 border border-border hover:border-primary transition-colors duration-300"
              >
                <h3 className="text-xl font-heading text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <WaveDivider variant="bottom" />
      </section>

      {/* Experience */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15", label: "Awards Won" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-heading text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card relative">
        <WaveDivider variant="top" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
