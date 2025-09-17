import { useState } from 'react';
import emailjs from 'emailjs-com';
import { AnimatedSection } from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return toast({
        title: "All fields are required.",
        variant: "destructive"
      });
    }

    emailjs.send(
      'service_rvlpd39',        // Replace with your EmailJS service ID
      'template_npuhomf',       // Replace with your EmailJS template ID
      formData,
      '5toSUBMxh5K-i90kO'         // Replace with your EmailJS public key
    ).then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('Email send error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive"
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rjt345/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Rajatnadda", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Rajatnadda18711?t=RQ8FqYPe1JlqWhujPTJbkg&s=08s", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection delay={200} animation="fade-in-up">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-primary transition-colors duration-300"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-primary transition-colors duration-300"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-border focus:border-primary transition-colors duration-300 resize-none"
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Details */}
          <AnimatedSection delay={400} animation="fade-in-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                  Contact Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href="mailto:rjt.kumar345@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        rjt.kumar345@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a 
                        href="tel:8219652044"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        8219652044
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
