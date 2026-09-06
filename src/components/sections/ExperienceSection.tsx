import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar, MapPin, Computer } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experiencia" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label={t.experience.eyebrowLabel}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <Accordion
          type="multiple"
          className="animate-slide-up space-y-4"
        >
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`exp-${index}`}
              className="bracket-corners lift-hover overflow-hidden rounded-lg border border-border bg-card hover:border-primary/40"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <div className="flex flex-1 flex-col gap-2 text-left sm:flex-row sm:items-center sm:gap-4">
                  <span className="font-mono text-sm text-primary/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="font-display text-lg font-bold text-foreground">
                      {exp.title}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-portfolio-text-dim">
                      <span className="flex items-center gap-1 font-semibold text-primary">
                        <Computer className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 pt-0">
                <div className="">
                  <p className="mb-4 leading-relaxed text-portfolio-text-dim">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {t.experience.technologiesLabel}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded border border-border/60 bg-secondary/50 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {t.experience.achievementsLabel}
                    </h4>
                    <ul className="space-y-1 text-sm text-portfolio-text-dim">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-primary">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExperienceSection;
