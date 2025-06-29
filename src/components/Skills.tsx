import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, SiDocker, SiHtml5, SiCss3, SiBootstrap, SiSass, SiAngular, SiCanva, SiFigma, SiAdobephotoshop, SiGithub, SiC, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "C", icon: SiC, level: 85 },
  { name: "C++", icon: SiCplusplus, level: 86 },
  { name: "HTML", icon: SiHtml5, level: 100 },
  { name: "CSS", icon: SiCss3, level: 100 },
  { name: "Bootstrap", icon: SiBootstrap, level: 90 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
  { name: "SAAS", icon: SiSass, level: 90 },
  { name: "JavaScript", icon: SiJavascript, level: 95 },
  { name: "TypeScript", icon: SiTypescript, level: 95 },
  { name: "Angular", icon: SiAngular, level: 88 },
  { name: "React Js", icon: SiReact, level: 88 },
  { name: "Next.js", icon: SiNextdotjs, level: 85 },
  { name: "Node.js", icon: SiNodedotjs, level: 82 },
  { name: "Express.js", icon: SiExpress, level: 80 },
  { name: "SQL", icon: SiPostgresql, level: 75 },
  { name: "MongoDB", icon: SiMongodb, level: 78 },
  { name: "Canva", icon: SiCanva, level: 100 },
  { name: "Figma", icon: SiFigma, level: 80 },
  { name: "Photoshop", icon: SiAdobephotoshop, level: 80 },
  { name: "Docker", icon: SiDocker, level: 72 },
  { name: "Git-GitHub", icon: SiGithub, level: 80 },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gradient-to-b font-[santoshi]  overflow-x-hidden from-background to-background/95">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold font-[santoshi] mb-16 text-white text-center animate-fade-in-up ">
        Professional <span className="text-primary">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex flex-col items-center space-y-4">
              <skill.icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium  font-[santoshi] text-base text-gray-100">{skill.name}</span>
              <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
