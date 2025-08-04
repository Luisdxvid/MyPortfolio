import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remoto",
      period: "2022 - Presente",
      description: "Lideré el desarrollo de aplicaciones web modernas utilizando React, Node.js y PostgreSQL. Implementé arquitecturas escalables y mentoreé a desarrolladores junior.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Aumenté la performance de la aplicación en un 40%",
        "Lideré un equipo de 5 desarrolladores",
        "Implementé CI/CD pipelines"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Madrid, España",
      period: "2020 - 2022",
      description: "Desarrollé y mantuve múltiples proyectos web utilizando tecnologías modernas. Colaboré estrechamente con equipos de diseño y producto.",
      technologies: ["Vue.js", "Express", "MongoDB", "Redis"],
      achievements: [
        "Desarrollé 3 aplicaciones web completas",
        "Reduje el tiempo de carga en un 50%",
        "Implementé testing automatizado"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Ventures",
      location: "Barcelona, España",
      period: "2019 - 2020",
      description: "Creé interfaces de usuario atractivas y funcionales. Trabajé en un ambiente ágil con sprints de 2 semanas.",
      technologies: ["React", "TypeScript", "Styled Components"],
      achievements: [
        "Mejoré la experiencia de usuario significativamente",
        "Implementé diseño responsive",
        "Colaboré con equipos multidisciplinarios"
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            EXPERIENCIA
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            Mi trayectoria profesional construyendo soluciones digitales
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-portfolio-glow rounded-full border-4 border-background z-10"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="bg-gradient-card border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-portfolio-glow font-semibold mb-2">
                            <ExternalLink className="w-4 h-4" />
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
                      
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-secondary/70 text-foreground hover:bg-portfolio-glow hover:text-background transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Logros destacados:</h4>
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