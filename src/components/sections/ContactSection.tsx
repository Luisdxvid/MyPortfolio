import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      toast({
        title: t.contact.toasts.missingTitle,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await emailjs.send(
        "service_k8gjuqx",
        "template_of64gjl",
        {
          name,
          email,
          subject,
          message,
        },
        "MdJAvCreeVyVz0Ej_"
      );

      toast({
        title: t.contact.toasts.successTitle,
        description: t.contact.toasts.successDescription,
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast({
        title: t.contact.toasts.errorTitle,
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.info.email,
      value: "luisrodriguezortigoza@gmail.com",
      href: "mailto:luisrodriguezortigoza@gmail.com",
    },
    {
      icon: Phone,
      title: t.contact.info.phone,
      value: "+34 691 241 533",
      href: "tel:+34691241533",
    },
    {
      icon: MapPin,
      title: t.contact.info.location,
      value: t.contact.info.locationValue,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/Luisdxvid",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luis-rodriguez-42821a23b",
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      href: "https://wa.link/pi2e20",
    },
  ];

  return (
    <section id="contacto" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label={t.contact.eyebrowLabel}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
          {/* Contact Form */}
          <div className="w-full animate-slide-up">
            <Card className="bracket-corners lift-hover w-full rounded-lg border-border bg-card hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-display text-xl font-bold text-foreground">
                  <Send className="h-5 w-5 text-primary" />
                  {t.contact.form.heading}
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full space-y-6">
                <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {t.contact.form.name}
                    </label>
                    <Input
                      placeholder={t.contact.form.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-border bg-background/40 transition-colors duration-300 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {t.contact.form.email}
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full border-border bg-background/40 transition-colors duration-300 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {t.contact.form.subject}
                  </label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="w-full border-border bg-background/40 transition-colors duration-300 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={6}
                    className="w-full resize-none border-border bg-background/40 transition-colors duration-300 focus:border-primary"
                  />
                </div>

                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {loading ? t.contact.form.sending : t.contact.form.send}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div
            className="w-full animate-fade-in space-y-8"
            style={{ animationDelay: "200ms" }}
          >
            {/* Contact details */}
            <Card className="bracket-corners lift-hover w-full rounded-lg border-border bg-card hover:border-primary/40">
              <CardHeader>
                <CardTitle className="font-display text-xl font-bold text-foreground">
                  {t.contact.info.heading}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-md border border-border/60 bg-background/30 p-4 transition-colors duration-300 hover:border-primary/40"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="cursor-pointer text-sm text-foreground transition-colors duration-300 hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bracket-corners lift-hover w-full rounded-lg border-border bg-card hover:border-primary/40">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-7">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
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
