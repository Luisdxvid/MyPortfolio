import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleMailClick = () => {
    window.location.href = "mailto:luisrodriguezortigoza@gmail.com";
  };

  const handleDownloadCV = () => {
    window.open("/CVLuisRodriguezES.pdf", "_blank");
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              {t.hero.greeting}
            </h1>
            <span className="text-4xl sm:text-5xl lg:text-6xl animate-float">👋</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text mb-6">
            Luis Rodríguez
          </h2>

          <p className="text-xl sm:text-2xl text-portfolio-text-dim mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={handleMailClick}
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-750 hover:scale-105 animate-glow"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.hero.contactame}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="border-portfolio-glow text-portfolio-glow hover:bg-portfolio-glow hover:text-background font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.hero.curriculum}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
