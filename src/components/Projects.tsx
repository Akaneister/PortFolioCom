import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const Projects = () => {
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

  const projects = [
    {
      title: "Application CRUD pour la Marine Nationale (CEPPOL)",
      description: "Conception et développement d'une application web complète permettant de centraliser les informations de suivi d'incidents de pollution en mer sur smartphone et PC, dans un contexte de gestion de crise.",
      details: "Au niveau technique, j'ai conçu le front-end en React et le back-end en Node.js, en suivant une architecture RESTful. J'ai mis en place la conteneurisation via Docker pour simplifier le déploiement et l'intégration continue.",
      techs: ["React", "Node.js", "REST API", "Docker"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
    },
    {
      title: "Application de gestion d'étudiants en Java",
      description: "Projet universitaire réalisé dans le cadre d'un cours de développement orienté objet. Conception d'une application JavaFX permettant la gestion d'étudiants : inscription, attribution de matières, options, classes, ainsi qu'une messagerie interne.",
      details: "En équipe, nous avons appliqué une méthodologie agile en utilisant GitHub pour le travail collaboratif. J'ai personnellement développé la partie logique de gestion des classes et l'interface graphique associée.",
      techs: ["Java", "JavaFX", "GitHub"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      title: "Jeu \"Agar.io\" en Kotlin",
      description: "Projet d'équipe visant à découvrir le langage Kotlin et à renforcer la compréhension des interfaces utilisateurs. Création d'un mini-jeu inspiré du célèbre \"Agar.io\" avec gestion des collisions et animations fluides.",
      details: "Sur le plan technique, nous avons travaillé sur la gestion des collisions, le rendu graphique, et la fluidité des animations. J'ai principalement contribué à la logique de jeu et à la gestion des entités mobiles.",
      techs: ["Kotlin", "GitHub"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    },
    {
      title: "Optimisation d'images en C",
      description: "Projet individuel ayant pour objectif d'optimiser des images numériques à partir de calculs matriciels. Le programme analysait les pixels et appliquait différentes transformations pour améliorer la qualité.",
      details: "Sur le plan technique, j'ai utilisé des structures de données adaptées, manipulé des matrices et implémenté des algorithmes d'optimisation. L'accent a été mis sur la performance du code et la rigueur dans la manipulation des pointeurs.",
      techs: ["C", "GitHub"],
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-20 text-center fade-in gradient-text">
          Réalisations
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="fade-in overflow-hidden border-2 hover:border-primary transition-all duration-300"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.details}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
