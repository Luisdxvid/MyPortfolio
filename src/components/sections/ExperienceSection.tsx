import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Computer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const experiences = t.experience.jobs;

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-portfolio-glow rounded-full border-4 border-background z-10"></div>

                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  <Card className="bg-gradient-card border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-portfolio-glow font-semibold mb-2">
                            <Computer className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-portfolio-text-dim">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-portfolio-text-dim mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          {t.experience.technologies}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-secondary/70 text-foreground hover:bg-portfolio-glow hover:text-background transition-colors duration-300 cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          {t.experience.achievements}
                        </h4>
                        <ul className="text-sm text-portfolio-text-dim space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-portfolio-glow mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
