import { Download, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  const handleMailClick = () => {
    window.location.href = 'mailto:luisrodriguezortigoza@gmail.com';
  };

  const handleDownloadCV = () => {
    const cvFile = language === 'en' ? '/CVLuisRodriguezEN.pdf' : '/CVLuisRodriguez.pdf';
    window.open(cvFile, '_blank');
  };

  const profileLines: [string, string][] = [
    ['name', '"Luis Rodríguez"'],
    ['role', `"${t.hero.role}"`],
    ['base', t.hero.baseLocation],
    ['stack', '["Vue", "TypeScript", "Go", "Node"]'],
    ['status', '"available"'],
  ];

  return (
    <section
      id="inicio"
      className="grid-pattern relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left: content */}
        <div className="animate-fade-in text-center lg:text-left">
          <div className="eyebrow mb-6 justify-center lg:justify-start">
            <span className="status-dot" />
            <span>{t.hero.eyebrow}</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Luis <span className="marker-highlight text-primary">Rodríguez</span>
          </h1>

          <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-portfolio-secondary sm:text-base">
            {t.hero.role}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg text-portfolio-text-dim sm:text-xl lg:mx-0">
            {t.hero.paragraph}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={handleMailClick}
              className="group rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.ctaContact}
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="rounded-md border-border text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.hero.ctaResume}
            </Button>
          </div>
        </div>

        {/* Right: mock terminal / profile card */}
        <div
          className="bracket-corners animate-fade-in mx-auto w-full max-w-md rounded-lg border border-border bg-card/80 shadow-2xl backdrop-blur-sm"
          style={{ animationDelay: '150ms' }}
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              perfil.ts
            </span>
          </div>
          <div className="space-y-1.5 px-5 py-6 font-mono text-sm leading-relaxed">
            <p className="text-portfolio-secondary">const dev = {'{'}</p>
            {profileLines.map(([key, value]) => (
              <p key={key} className="pl-4">
                <span className="text-foreground">{key}</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary">{value}</span>
                <span className="text-muted-foreground">,</span>
              </p>
            ))}
            <p className="text-portfolio-secondary">{'}'}</p>
            <p className="pt-3 text-muted-foreground">
              <span className="text-primary">&gt;</span> {t.hero.ready}
              <span className="ml-1 inline-block h-4 w-2 animate-caret-blink bg-primary/70 align-middle" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
