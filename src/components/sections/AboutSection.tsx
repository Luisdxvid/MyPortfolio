import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Globe, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Code className="w-6 h-6 text-portfolio-glow" />
                  {t.about.whoTitle}
                </h3>
                <p className="text-portfolio-text-dim leading-relaxed">
                  {t.about.whoBody}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-portfolio-glow" />
                  {t.about.purposeTitle}
                </h3>
                <p className="text-portfolio-text-dim leading-relaxed">
                  {t.about.purposeBody}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-portfolio-glow" />
                  {t.about.locationTitle}
                </h3>
                <p className="text-portfolio-text-dim leading-relaxed">
                  {t.about.locationBody}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {t.about.badgeTitle}
                </h4>
                <p className="text-portfolio-text-dim">{t.about.badgeSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
