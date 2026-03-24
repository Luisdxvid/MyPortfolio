import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactInfo = useMemo(
    () => [
      {
        icon: Mail,
        title: t.contact.labelEmail,
        value: "luisrodriguezortigoza@gmail.com",
        href: "mailto:luisrodriguezortigoza@gmail.com",
      },
      {
        icon: Phone,
        title: t.contact.labelPhone,
        value: "+34 691 241 533",
        href: "tel:+34691241533",
      },
      {
        icon: MapPin,
        title: t.contact.labelLocation,
        value: t.contact.locationValue,
      },
    ],
    [
      t.contact.labelEmail,
      t.contact.labelPhone,
      t.contact.labelLocation,
      t.contact.locationValue,
    ],
  );

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/Luisdxvid",
      color: "text-white hover:text-gray-400 bg-gray-800",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luis-rodriguez-42821a23b",
      color: "text-white hover:text-blue-400 bg-blue-700",
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      href: "https://wa.link/pi2e20",
      color: "text-white hover:text-green-300 bg-green-500",
    },
  ];

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      toast({
        title: t.contact.toastFillAll,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        "service_k8gjuqx",
        "template_of64gjl",
        {
          name,
          email,
          subject,
          message,
        },
        "MdJAvCreeVyVz0Ej_",
      );

      toast({
        title: t.contact.toastSuccessTitle,
        description: t.contact.toastSuccessDesc,
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast({
        title: t.contact.toastError,
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
          <div className="animate-slide-up w-full">
            <Card className="w-full bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Send className="w-6 h-6 text-portfolio-glow" />
                  {t.contact.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 w-full">
                <div className="grid sm:grid-cols-2 gap-4 w-full min-w-0">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t.contact.name}
                    </label>
                    <Input
                      placeholder={t.contact.placeholderName}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t.contact.email}
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.placeholderEmail}
                      className="w-full bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.subject}
                  </label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.contact.placeholderSubject}
                    className="w-full bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.message}
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.placeholderMessage}
                    rows={6}
                    className="w-full bg-secondary/50 border-border/50 focus:border-portfolio-glow transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? t.contact.sending : t.contact.send}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div
            className="space-y-8 animate-fade-in w-full"
            style={{ animationDelay: "200ms" }}
          >
            <Card className="w-full bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {t.contact.infoTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-portfolio-glow/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-portfolio-glow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-portfolio-text-dim hover:text-portfolio-glow transition-colors duration-300 cursor-pointer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="cursor-pointer text-portfolio-text-dim text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="w-full bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {t.contact.socialTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {t.contact.availableTitle}
                  </h4>
                  <p className="text-sm text-portfolio-text-dim">
                    {t.contact.availableBody}
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
