import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "A Passionate Frontend Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-hero-end/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground font-inter">
              Hello, I'm
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent">
              Rajat Kumar
            </h1>
            
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold font-poppins text-foreground">
                {displayedText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
              I specialize in building intuitive and responsive user interfaces with React.js.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold px-8 py-6 text-lg animate-pulse-glow"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold px-8 py-6 text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};