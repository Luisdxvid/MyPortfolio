import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { locale, toggleLocale } = useLanguage();

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="flex items-center gap-2 hover:bg-secondary/80 transition-all duration-300"
      aria-label={
        locale === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"
      }
    >
      <span className="text-lg">
        {locale === "es" ? "🇪🇸" : "🇺🇸"}
      </span>
      <span className="text-sm font-medium">
        {locale === "es" ? "ES" : "EN"}
      </span>
    </Button>
  );
};

export { LanguageToggle };
