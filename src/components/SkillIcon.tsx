import { useState } from 'react';

interface SkillIconProps {
  name: string;
  icon: string;
  delay?: number;
}

export const SkillIcon = ({ name, icon, delay = 0 }: SkillIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-card border rounded-xl   text-center p-2.5 h-30 hover:border-primary hover:shadow-hover transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium animate-fade-in">
          {name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
        </div>
      )}
    </div>
  );
};