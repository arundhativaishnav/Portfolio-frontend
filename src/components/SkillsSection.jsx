import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaFileExcel,
  FaCode,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaDocker,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import {
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiIntellijidea,
  SiPostman,
  SiJupyter,
  SiPython,
  
} from "react-icons/si"; // ✅ only these exist!

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: <FaHtml5 /> },
  { name: "CSS", category: "frontend", icon: <FaCss3Alt /> },
  { name: "Bootstrap", category: "frontend", icon: <FaBootstrap /> },
  { name: "JavaScript", category: "frontend", icon: <FaJs /> },
  { name: "React.js", category: "frontend", icon: <FaReact /> },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss /> },

  // Backend
  { name: "Java", category: "backend", icon: <FaJava /> },
  { name: "Node.js", category: "backend", icon: <FaNodeJs /> },
  { name: "Express.js", category: "backend", icon: <FaNodeJs /> },
  { name: "Java-Swing", category: "backend", icon: <FaJava /> },
  { name: "MongoDB", category: "backend", icon: <SiMongodb /> },
  { name: "MySQL", category: "backend", icon: <DiMysql /> },
  { name: "GraphQL", category: "backend", icon: <SiGraphql /> },
  { name: "Python", category: "backend", icon: <SiPython /> },

  // Tools
  { name: "IntelliJ IDEA", category: "tools", icon: <SiIntellijidea /> },
  { name: "Eclipse", category: "tools", icon: <FaCode /> },
  { name: "Visual Studio Code", category: "tools", icon: <FaCode /> },
  { name: "Git", category: "tools", icon: <FaGitAlt /> },
  { name: "GitHub", category: "tools", icon: <FaGithub /> },
  { name: "Microsoft Excel", category: "tools", icon: <FaFileExcel /> },
  { name: "Docker", category: "tools", icon: <FaDocker /> },
  { name: "Postman", category: "tools", icon: <SiPostman /> },
  { name: "Jupyter", category: "tools", icon: <SiJupyter /> },
];



const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
