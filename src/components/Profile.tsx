import { useEffect, useRef } from "react";

const Profile = () => {
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
    <section ref={sectionRef} id="profile" className="py-32 px-6 bg-gray-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-12 text-center fade-in gradient-text">
          Profil
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p className="fade-in" style={{ transitionDelay: "0.1s" }}>
            Actuellement en Master 2 Informatique (parcours ILLIADE), j'ai effectué une Licence Informatique Internationale à l'UBO. 
            J'y ai acquis des compétences solides en développement (front-end et back-end) ainsi qu'en gestion de projet. 
            Mon parcours m'a permis de maîtriser la conception orientée objet, la programmation multitâche et la mise en place de solutions web complètes.
          </p>
          
          <p className="fade-in" style={{ transitionDelay: "0.2s" }}>
            J'ai également eu l'opportunité d'effectuer un échange Erasmus à la FESB (Croatie), ce qui m'a permis de découvrir de nouvelles méthodes de travail, 
            d'approfondir mes compétences en anglais et de développer une véritable adaptabilité internationale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
