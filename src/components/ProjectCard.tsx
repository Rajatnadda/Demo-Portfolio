import { useState } from 'react';
import { ExternalLink, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  liveDemo?: string;
  youtubeDemo?: string;
  tags: string[];
  delay?: number;
}

export const ProjectCard = ({ title, description, liveDemo, youtubeDemo, tags, delay = 0 }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-80"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-card border border-border rounded-xl p-6 flex flex-col justify-center items-center text-center hover:border-primary transition-colors duration-300">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
            {title}
          </h3>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-4"></div>
          <p className="text-muted-foreground font-inter">
            Hover to see details
          </p>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-card border border-primary rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-inter">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            {liveDemo && (
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(liveDemo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
            {youtubeDemo && (
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(youtubeDemo, '_blank')}
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};