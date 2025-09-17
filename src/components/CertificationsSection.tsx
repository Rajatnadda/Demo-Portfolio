import { AnimatedSection } from './AnimatedSection';
import { Award, Calendar } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp.org",
      date: "2025-02"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp.org",
      date: "2025-01"
    }
  ];

  return (
    <section id="certifications" className="py-20  bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection 
              key={cert.title} 
              delay={200 * (index + 1)}
              animation="scale-in"
            >
              <div className="bg-card border border-border rounded-2xl p-6 h-60 flex flex-col justify-between hover:border-primary hover:shadow-xl transition-all duration-300 group transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-2">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
