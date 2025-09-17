import { AnimatedSection } from './AnimatedSection';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3Alt, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SkillIcon } from './SkillIcon';

export const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "Responsive Design", icon: <FaMobileAlt className="text-pink-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-primary bg-clip-text text-transparent">
            Skills
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto w-30 h-30">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={skill.name} 
              delay={100 * (index + 1)}
              animation="bounce-in"
            >
              <SkillIcon 
              name={skill.name}
              icon={skill.icon}
              delay={100 * (index + 1)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};