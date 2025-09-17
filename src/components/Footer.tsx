import { AnimatedSection } from "./AnimatedSection";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left items-start">

            {/* Developer Info */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Frontend Developer</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thanks for visiting my portfolio!
                <br />
                If you’re looking for a passionate frontend developer who loves React,
                <br />
                let’s get in touch. I’m always open to exciting opportunities and collaborations.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Connect with me</h2>
              <ul className="flex justify-center md:justify-start gap-4">
                <li>
                  <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rjt345" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="https://www.instagram.com/rajat_nadda01/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Quick Links</h2>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li><a href="#home" className="hover:text-primary transition">Home</a></li>
                <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
                <li><a href="#certifications" className="hover:text-primary transition">Certifications</a></li>
                <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © {currentYear} Rajat Kumar. All rights reserved.
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};
