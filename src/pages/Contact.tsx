import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground opacity-0 animate-fade-up stagger-1">
              Get In Touch
            </h1>
            <p className="mt-6 text-muted-foreground opacity-0 animate-fade-up stagger-2">
              Have a project in mind or just want to say hello? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up stagger-3">
              <h2 className="text-2xl font-heading text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                      Email
                    </p>
                    <a 
                      href="mailto:hello@felixkimeli.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      hello@felixkimeli.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a 
                      href="tel:+1234567890"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-foreground">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-heading text-foreground mb-4">
                  Working Hours
                </h3>
                <p className="text-muted-foreground">
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: By Appointment<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-fade-up stagger-4">
              <h2 className="text-2xl font-heading text-foreground mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
