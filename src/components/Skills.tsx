import { Database, Server, Brain, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "MERN Stack",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "MongoDB", logo: "🍃", color: "text-green-500" },
      { name: "Express.js", logo: "⚡", color: "text-gray-400" },
      { name: "React.js", logo: "⚛️", color: "text-cyan-400" },
      { name: "Node.js", logo: "🟢", color: "text-green-400" },
      { name: "JavaScript", logo: "🟨", color: "text-yellow-400" },
      { name: "TypeScript", logo: "🔷", color: "text-blue-400" },
      { name: "HTML5", logo: "🌐", color: "text-orange-500" },
      { name: "CSS3", logo: "🎨", color: "text-blue-500" },
      { name: "Tailwind CSS", logo: "💨", color: "text-cyan-300" },
      { name: "Redux", logo: "🔄", color: "text-purple-400" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Python", logo: "🐍", color: "text-yellow-300" },
      { name: "TensorFlow", logo: "🧠", color: "text-orange-400" },
      { name: "PyTorch", logo: "🔥", color: "text-red-400" },
      { name: "Scikit-learn", logo: "📊", color: "text-blue-400" },
      { name: "Pandas", logo: "🐼", color: "text-blue-300" },
      { name: "NumPy", logo: "🔢", color: "text-cyan-400" },
      { name: "Matplotlib", logo: "📈", color: "text-blue-500" },
      { name: "OpenCV", logo: "👁️", color: "text-green-400" },
      { name: "Anaconda", logo: "🐍", color: "text-green-500" },
      { name: "Jupyter Notebook", logo: "📓", color: "text-orange-500" },
      { name: "Spyder", logo: "🕷️", color: "text-red-500" },
      { name: "NLP", logo: "💬", color: "text-purple-400" },
      { name: "Deep Learning", logo: "🧬", color: "text-pink-400" },
      { name: "Data Analytics", logo: "📉", color: "text-teal-400" },
    ],
  },
  {
    title: "Programming & DSA",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "C", logo: "©️", color: "text-blue-400" },
      { name: "C++", logo: "➕", color: "text-blue-500" },
      { name: "Python", logo: "🐍", color: "text-yellow-300" },
      { name: "Data Structures", logo: "🏗️", color: "text-green-400" },
      { name: "Algorithms", logo: "⚙️", color: "text-purple-400" },
      { name: "Problem Solving", logo: "🧩", color: "text-cyan-400" },
    ],
  },
  {
    title: "Tools & Databases",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Git", logo: "🔀", color: "text-orange-500" },
      { name: "GitHub", logo: "🐙", color: "text-gray-300" },
      { name: "VS Code", logo: "💻", color: "text-blue-400" },
      { name: "Postman", logo: "📮", color: "text-orange-400" },
      { name: "MySQL", logo: "🗄️", color: "text-blue-500" },
      { name: "Firebase", logo: "🔶", color: "text-yellow-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform">
                      {skill.logo}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
