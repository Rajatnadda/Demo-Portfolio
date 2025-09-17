import { AnimatedSection } from "./AnimatedSection";
import rajatHeadshot from "@/assets/rajat-headshot.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection delay={200} animation="scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-primary p-1">
                <div className="bg-background rounded-xl p-4">
                  <img
                    src={rajatHeadshot}
                    alt="Rajat Kumar - Frontend Developer"
                    className="w-full h-auto rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-inter">
                <p
                  className="animate-fade-in"
                  style={{ animationDelay: "0.5s", animationFillMode: "both" }}
                >
                  I am an enthusiastic and detail-oriented{" "}
                  <span className="text-primary font-semibold">
                    MCA graduate
                  </span>{" "}
                  with a strong interest in Frontend Development. I specialize
                  in{" "}
                  <span className="text-primary font-semibold">
                    React.js, HTML, CSS, and Tailwind CSS
                  </span>
                  , and have developed full-stack projects including Job Links –
                  a job portal - and Micgram, a social platform inspired by
                  Instagram.
                </p>
                <p
                  className="animate-fade-in"
                  style={{ animationDelay: "0.7s", animationFillMode: "both" }}
                >
                  I have completed an internship at{" "}
                  <span className="text-primary font-semibold">
                    Calls Master
                  </span>
                  , where I gained hands-on experience working in a professional
                  environment and sharpened my problem-solving and UI design
                  skills.
                </p>

                <p
                  className="animate-fade-in"
                  style={{ animationDelay: "0.9s", animationFillMode: "both" }}
                >
                  Passionate about building{" "}
                  <span className="text-primary font-semibold">
                    intuitive and responsive user interfaces
                  </span>
                  , I am actively seeking an opportunity to begin my career in a
                  dynamic company where I can learn, contribute, and grow as a
                  frontend developer.
                </p>
              </div>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors duration-300">
                    <h4 className="font-semibold text-primary mb-1">
                      Education
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      MCA Graduate
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors duration-300">
                    <h4 className="font-semibold text-primary mb-1">
                      Experience
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Frontend Intern
                    </p>
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
