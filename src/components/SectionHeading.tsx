interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ index, label, title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-16 animate-fade-in">
      <div className="eyebrow mb-4">
        <span className="text-primary">{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-portfolio-text-dim max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
