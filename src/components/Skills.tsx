import { useEffect, useRef } from "react";
import { Globe, Users, Building2, Lightbulb } from "lucide-react";

const Skills = () => {
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

  const languages = [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Niveau B2 (Certification Cambridge)" },
  ];

  const softSkills = [
    { name: "Travail en équipe", icon: Users },
    { name: "Adaptabilité internationale", icon: Globe },
    { name: "Compréhension des méthodes d'entreprise", icon: Building2 },
    { name: "Curiosité technique", icon: Lightbulb },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-20 text-center fade-in gradient-text">
          Compétences
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="fade-in" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-3xl font-semibold mb-8">Langues</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border">
                  <h4 className="text-xl font-medium mb-2">{lang.name}</h4>
                  <p className="text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-3xl font-semibold mb-8">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-2xl border border-border flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
