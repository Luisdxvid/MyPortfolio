import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiGo,
  SiPhp,
  SiGit,
  SiLinux,
  SiDocker,
  SiJira,
  SiPrimevue,
} from 'react-icons/si';
import { DiWindows } from "react-icons/di";


const StackSection = () => {
  const frontendStack = [
    { name: 'Vue.js', icon: <SiVuedotjs size={32} color="#42b883" /> },
    { name: 'TypeScript', icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} color="#38BDF8" /> },
    { name: 'JavaScript', icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: 'PrimeVue', icon: <SiPrimevue size={32} color="#42b883" /> },
  ];
  
  const backendStack = [
    { name: 'Node.js', icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} color="#336791" /> },
    { name: 'Go', icon: <SiGo size={32} color="#00ADD8" /> },
    { name: 'PHP', icon: <SiPhp size={32} color="#777BB4" /> },
  ];  
  
  const toolsStack = [
    { name: 'Git', icon: <SiGit size={32} color="#F05032" /> },
    { name: 'Jira', icon: <SiJira size={32} color="#0052CC" /> },
    { name: 'Linux', icon: <SiLinux size={32} color="#FCC624" /> },
    { name: 'Windows', icon: <DiWindows size={32} color="#0077d3"/> },
    { name: 'Docker', icon: <SiDocker size={32} color="#2496ED" /> },
  ];
  

  const StackCard = ({ title, items, delay = 0 }: { title: string; items: typeof frontendStack; delay?: number }) => (
    <Card className="bg-gradient-card border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:scale-105 group"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-foreground text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            MI STACK
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias excepcionales
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <StackCard 
            title="FRONTEND" 
            items={frontendStack} 
            delay={0}
          />
          <StackCard 
            title="BACKEND" 
            items={backendStack} 
            delay={200}
          />
          <StackCard 
            title="HERRAMIENTAS" 
            items={toolsStack} 
            delay={400}
          />
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Card className="bg-gradient-card border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Siempre aprendiendo
              </h3>
              <p className="text-portfolio-text-dim leading-relaxed">
                La tecnología evoluciona constantemente, y yo también. Siempre estoy 
                explorando nuevas herramientas, frameworks y metodologías para mantenerme 
                al día con las mejores prácticas de la industria.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StackSection;