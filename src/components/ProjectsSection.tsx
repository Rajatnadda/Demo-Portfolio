import { AnimatedSection } from './AnimatedSection';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Job Links - Full Stack Job Portal",
      description: "Developed a RESTful API using Node.js and Express, optimizing database queries with MongoDB. Implemented role-based authentication using JWT and Redux. Engineered a responsive React-based UI.",
      liveDemo: "https://job-links.onrender.com",
      tags: ["React.js", "Node.js", "MongoDB", "JWT", "Redux"]
    },
    {
      title: "Snapgram - Instagram Clone",
      description: "Integrated Appwrite backend, enabling secure user authentication and image uploads. Optimized data fetching with React Query. Developed dynamic and responsive UI components using Tailwind CSS.",
      liveDemo: "https://micgram.netlify.app",
      youtubeDemo: "#",
      tags: ["React.js", "Appwrite", "React Query", "Tailwind CSS"]
    },
    {
      title: "Spotify Home Page Clone",
      description: "Replicated the core structure and layout of the Spotify homepage. Implemented a component-based architecture using React. Styled the interface using Tailwind CSS. Designed a responsive interface.",
      liveDemo: "https://home-page-clone-spotify.netlify.app",
      youtubeDemo: "#",
      tags: ["React.js", "Tailwind CSS", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.title} 
              delay={200 * (index + 1)}
              animation="scale-in"
            >
              <ProjectCard 
                {...project} 
                delay={200 * (index + 1)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};