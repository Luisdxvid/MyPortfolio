import { Code } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label={t.about.eyebrowLabel}
          title={t.about.title}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Content */}
          <div className="animate-slide-up border-l-2 border-primary/40 pl-6 sm:pl-8">
            <p className="font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              {t.about.intro.lead}
            </p>
            <p className="mt-5 leading-relaxed text-portfolio-text-dim">
              {t.about.intro.text}
            </p>
          </div>

          {/* Visual Element */}
          <div className="animate-fade-in lg:sticky lg:top-28">
            <div className="bracket-corners relative overflow-hidden rounded-lg border border-border bg-card p-8">
              <div className="grid-pattern absolute inset-0 opacity-40" />
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-lg border-2 border-primary/50 bg-background/60">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <h4 className="font-display text-2xl font-bold text-foreground">
                  Full-Stack Developer
                </h4>
                <div className="mx-auto mt-8 max-w-xs space-y-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>location</span>
                    <span className="text-portfolio-secondary">{t.about.panel.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>education</span>
                    <span className="text-portfolio-secondary">{t.about.panel.education}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>languages</span>
                    <span className="text-portfolio-secondary">{t.about.panel.languages}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
