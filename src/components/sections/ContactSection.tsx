import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "luisrodriguezortigoza@gmail.com",
      href: "mailto:luisrodriguezortigoza@gmail.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 691 241 533",
      href: "tel:+34691241533"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Pamplona, España",
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/Luisdxvid",
      color: "text-white hover:text-gray-400 bg-gray-800"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/luis-rodriguez-42821a23b/",
      color: "text-white hover:text-blue-400 bg-blue-700"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      href: "https://twitter.com/usuario",
      color: "text-white hover:text-blue-300 bg-sky-500"
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      href: "https://wa.link/pi2e20",
      color: "text-white hover:text-green-300 bg-green-500"
    }
  ];
  

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            CONTACTO
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Send className="w-6 h-6 text-portfolio-glow" />
                  Envíame un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input 
                      placeholder="Tu nombre"
                      className="bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Asunto
                  </label>
                  <Input 
                    placeholder="Asunto del mensaje"
                    className="bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    className="bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {/* Contact details */}
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Información de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-portfolio-glow/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-portfolio-glow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <a 
                        href={item.href}
                        className="text-portfolio-text-dim hover:text-portfolio-glow transition-colors duration-300 cursor-pointer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Mis Redes Sociales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                    <social.icon className="w-6 h-6" />
                    </a>
                  ))}
      </div>
  </CardContent>
</Card>


            {/* Availability */}
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    Disponible para proyectos
                  </h4>
                  <p className="text-sm text-portfolio-text-dim">
                    Actualmente aceptando nuevos proyectos freelance y oportunidades remotas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;