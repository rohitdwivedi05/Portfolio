import { Mail, Linkedin, FileText, Phone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rohit.dwivedi@example.com",
      text: "rohitdwivedi7618@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-dwivedi-63aa10366",
      text: "linkedin.com/in/rohitdwivedi",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rohitdwivedi05",
      text: "github.com/rohitdwivedi",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+919129702540",
      text: "+9129702540",
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 hover:border-primary/50 border border-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] group"
              >
                <link.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium">{link.text}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300"
              asChild
            >
              <a
                href="/rohit_resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Download Resume
              </a>
            </Button>

          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Rohit Dwivedi. Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
