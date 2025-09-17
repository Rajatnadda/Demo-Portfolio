import { AnimatedSection } from './AnimatedSection';
import { Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              {/* Experience item */}
              <div className="relative pl-20 pb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                {/* Content card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-hover transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      Frontend Developer Intern
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>March 2025 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Vikaspuri, New Delhi</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary mb-3">Calls Master</h4>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed foundational programming skills in JavaScript and React by completing coding challenges focused on data manipulation and algorithm implementation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented React UI components, reducing development time through utilization of pre-built and reusable components.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gained hands-on experience in professional environment and enhanced problem-solving and UI design skills.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['JavaScript', 'React.js', 'UI Components', 'Problem Solving'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};