import StarField from '@/components/StarField';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StackSection from '@/components/sections/StackSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated star field background */}
      <StarField />
      
      {/* Fixed header */}
      <Header />
      
      {/* Page sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
