import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Globe, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            SOBRE MÍ
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Code className="w-6 h-6 text-portfolio-glow" />
                  Quien soy?
                </h3>
                <p className="text-portfolio-text-dim leading-relaxed">
                Soy desarrollador de software con enfoque en frontend, 
                especializado en crear interfaces web rápidas, responsivas 
                y pensadas para el usuario. Me caracterizo por ser una persona 
                proactiva, y comprometida con la calidad del código. 
                Disfruto trabajar en equipo, aprender constantemente y
                aportar soluciones funcionales que también sean elegantes y fáciles de usar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-portfolio-glow" />
                  Construyendo con propósito
                </h3>
                <p className="text-portfolio-text-dim leading-relaxed">
                La programación es mucho más que una habilidad para mí: 
                es una forma de transformar ideas en soluciones reales. 
                Disfruto cada etapa del proceso —aprender, crear, resolver— 
                y siempre estoy explorando nuevas tecnologías que me permitan mejorar 
                y aportar valor. Me motiva construir cosas útiles, con propósito, 
                que marquen una diferencia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-portfolio-glow" />
                  Remoto y Local
                </h3>
                <p className="text-portfolio-text-dim leading-relaxed">
                Estoy ubicado en España, abierto a oportunidades ubicadas en el país,
                pero también me interesa trabajar con empresas remotas a nivel global.
                Las zonas horarias no son un obstáculo, 
                y me adapto fácilmente a equipos distribuidos. 
                Siempre estoy en busca de nuevos desafíos y 
                oportunidades para crecer profesionalmente, 
                ya sea de forma remota o local.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Desarrollador Frontend
                </h4>
                <p className="text-portfolio-text-dim">
                  Diseñando soluciones, una interfaz a la vez
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;