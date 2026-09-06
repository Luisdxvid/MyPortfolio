import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background/80 px-4 py-8 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-2 text-center font-mono text-xs text-portfolio-text-dim">
          <p className="text-sm text-foreground">Luis Rodríguez</p>
          <p>© {new Date().getFullYear()} — {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
