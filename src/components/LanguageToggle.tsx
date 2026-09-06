import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative h-10 w-10 rounded-full hover:bg-secondary/80 transition-all duration-300"
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <Languages className="h-5 w-5 text-portfolio-glow transition-transform duration-300" />
      <span className="pointer-events-none absolute -bottom-1 -right-1 rounded border border-border bg-background px-1 font-mono text-[9px] font-semibold leading-tight text-primary">
        {language.toUpperCase()}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
};

export { LanguageToggle };
