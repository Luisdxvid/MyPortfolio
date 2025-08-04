import { useState } from 'react';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-secondary/80 transition-all duration-300"
    >
      <span className="text-lg">
        {language === 'es' ? '🇪🇸' : '🇺🇸'}
      </span>
      <span className="text-sm font-medium">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </Button>
  );
};

export { LanguageToggle };
export type { };