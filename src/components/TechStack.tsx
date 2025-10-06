import { useEffect, useRef } from "react";

const TechStack = () => {
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

  const techCategories = [
    {
      title: "Développement Web",
      techs: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ]
    },
    {
      title: "Bases de données",
      techs: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
      ]
    },
    {
      title: "Langages",
      techs: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      ]
    },
    {
      title: "Outils",
      techs: [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      ]
    },
  ];

  return (
    <section ref={sectionRef} id="stack" className="py-32 px-6 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-20 text-center fade-in gradient-text">
          Stack Technique
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="fade-in" style={{ transitionDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="grid grid-cols-3 gap-6">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all hover:scale-105 flex flex-col items-center gap-3">
                    <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                    <p className="text-sm font-medium text-center">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
