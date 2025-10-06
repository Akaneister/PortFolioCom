import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 fade-in gradient-text">
          Oscar Vieujean
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 fade-in" style={{ transitionDelay: "0.1s" }}>
          Développeur Full Stack
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground mb-12 fade-in" style={{ transitionDelay: "0.2s" }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Brest, France</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:oscar.vieujean@outlook.com" className="hover:text-primary transition-colors">
              oscar.vieujean@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:+33784523309" className="hover:text-primary transition-colors">
              +33 7 84 52 33 09
            </a>
          </div>
        </div>

        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed fade-in" style={{ transitionDelay: "0.3s" }}>
          Master 2 Informatique (ILLIADE) • Licence Informatique Internationale UBO • Erasmus FESB Croatie
        </p>
      </div>
    </section>
  );
};

export default Hero;
