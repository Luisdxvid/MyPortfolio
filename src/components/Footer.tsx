import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-portfolio-text-dim flex items-center justify-center gap-2">
            Hecho por, Luis Rodríguez
          </p>
          <p className="text-sm text-portfolio-text-dim mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
