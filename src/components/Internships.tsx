import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const internships = [
  {
    company: "Unified Mentor Pvt. Ltd",
    role: "MERN Stack Developer Intern",
    duration: "November 2024 - February 2025",
    description: "Developed and maintained full-stack web applications using MERN stack. Collaborated with the development team to build scalable and responsive solutions.",
    achievements: [
      "Built and deployed production-ready web applications",
      "Implemented RESTful APIs and database integrations",
      "Collaborated on agile development workflows",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 px-4 relative bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional internships and hands-on experience
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {internship.role}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground/80">
                      {internship.company}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {internship.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {internship.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {internship.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {internship.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
