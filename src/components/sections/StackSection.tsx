import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiPrimevue,
  SiChartdotjs,
  SiMaplibre,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGo,
  SiPhp,
  SiTypeorm,
  SiJsonwebtokens,
  SiSwagger,
  SiAmazons3,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiJira,
  SiJest,
  SiWordpress,
  SiApple,
} from 'react-icons/si';
import { DiWindows } from "react-icons/di";
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';


const StackSection = () => {
  const { t } = useLanguage();
  const frontendStack = [
    { name: 'Vue.js 3', icon: <SiVuedotjs size={32} color="#42b883" /> },
    { name: 'React', icon: <SiReact size={32} color="#61DAFB" /> },
    { name: 'TypeScript', icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: 'JavaScript', icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: 'Vite', icon: <SiVite size={32} color="#646CFF" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} color="#38BDF8" /> },
    { name: 'PrimeVue', icon: <SiPrimevue size={32} color="#42b883" /> },
    { name: 'Chart.js', icon: <SiChartdotjs size={32} color="#FF6384" /> },
    { name: 'MapLibre GL', icon: <SiMaplibre size={32} color="#396CB2" /> },
  ];

  const backendStack = [
    { name: 'Node.js', icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: 'NestJS', icon: <SiNestjs size={32} color="#E0234E" /> },
    { name: 'Go', icon: <SiGo size={32} color="#00ADD8" /> },
    { name: 'PHP', icon: <SiPhp size={32} color="#777BB4" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} color="#336791" /> },
    { name: 'MySQL', icon: <SiMysql size={32} color="#4479A1" /> },
    { name: 'Redis', icon: <SiRedis size={32} color="#DC382D" /> },
    { name: 'TypeORM', icon: <SiTypeorm size={32} color="#FE0803" /> },
    { name: 'JWT', icon: <SiJsonwebtokens size={32} className="text-foreground" /> },
    { name: 'Swagger / OpenAPI', icon: <SiSwagger size={32} color="#85EA2D" /> },
    { name: 'AWS S3', icon: <SiAmazons3 size={32} color="#569A31" /> },
  ];

  const toolsStack = [
    { name: 'Git', icon: <SiGit size={32} color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub size={32} className="text-foreground" /> },
    { name: 'Docker', icon: <SiDocker size={32} color="#2496ED" /> },
    { name: 'Jira', icon: <SiJira size={32} color="#0052CC" /> },
    { name: 'Jest', icon: <SiJest size={32} color="#C21325" /> },
    { name: 'WordPress', icon: <SiWordpress size={32} color="#21759B" /> },
    { name: 'Linux', icon: <SiLinux size={32} color="#FCC624" /> },
    { name: 'macOS', icon: <SiApple size={32} className="text-foreground" /> },
    { name: 'Windows', icon: <DiWindows size={32} color="#0077d3"/> },
  ];


  const StackCard = ({
    index,
    title,
    items,
    delay = 0,
  }: {
    index: string;
    title: string;
    items: typeof frontendStack;
    delay?: number;
  }) => (
    <Card
      className="bracket-corners lift-hover animate-fade-in rounded-lg border-border bg-card hover:border-primary/40"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-display text-xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-primary/70">{index}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center rounded-md border border-border/60 bg-background/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="mb-2 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="text-center text-sm font-medium text-foreground">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="stack" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label={t.stack.eyebrowLabel}
          title={t.stack.title}
          subtitle={t.stack.subtitle}
        />

        {/* Stack Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          <StackCard index="fe" title={t.stack.categories.frontend} items={frontendStack} delay={0} />
          <StackCard index="be" title={t.stack.categories.backend} items={backendStack} delay={150} />
          <StackCard index="tl" title={t.stack.categories.tools} items={toolsStack} delay={300} />
        </div>
      </div>
    </section>
  );
};

export default StackSection;
