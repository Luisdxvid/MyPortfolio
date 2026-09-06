import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="grid-pattern flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="eyebrow mb-6 justify-center">
          <span className="text-primary">error</span>
          <span className="h-px w-10 bg-primary/50" />
          <span>404</span>
        </p>
        <h1 className="font-display text-6xl font-bold text-foreground sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-lg text-portfolio-text-dim">
          {t.notFound.message}
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors duration-300 hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.notFound.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
