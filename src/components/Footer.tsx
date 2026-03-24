import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-portfolio-text-dim flex items-center justify-center gap-2">
            {t.footer.madeBy}
          </p>
          <p className="text-sm text-portfolio-text-dim mt-2">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
