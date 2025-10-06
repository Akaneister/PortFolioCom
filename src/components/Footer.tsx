import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-gray-light border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">
          Restons en contact
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a 
            href="mailto:oscar.vieujean@outlook.com" 
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
            oscar.vieujean@outlook.com
          </a>
          
          <a 
            href="tel:+33784523309" 
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
          >
            <Phone className="w-6 h-6" />
            +33 7 84 52 33 09
          </a>
          
          <div className="flex items-center gap-3 text-lg text-muted-foreground">
            <MapPin className="w-6 h-6" />
            Brest, France
          </div>
        </div>
        
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Oscar Vieujean. Développeur Full Stack.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
