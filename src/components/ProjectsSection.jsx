import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodeSage",
    description: "AI-driven code review tool that analyzes code quality and provides suggestions for improvement.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Node.js", "OpenAI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "NewsNova",
    description:
      "AI-driven news reporting platform that generates articles based on trending topics and user interests.",
    image: "/assets/project2.png",
    tags: ["React.js", "Node.js", "Express.js", "Grok API"],
    demoUrl: "https://arundhativaishnav.github.io/news-ai/",
    githubUrl: "https://github.com/arundhativaishnav/code-reviewer",
  },
  {
    id: 3,
    title: "GeoCalc – Area Calculation Web App",
    description:
      "Developed a web application to calculate the area of user-defined polygons on an interactive real-time map.",
    image: "/projects/project3.png",
    tags: ["Leaflet.js"," HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "FinTrack – Desktop Expense Tracker",
    description:
      "A desktop application for tracking expenses, built with Java Swing and MySQL for data management.",
    image: "/projects/project3.png",
    tags: ["Java"," Swing", "MySQL", "JDBC"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
        id: 5,
        title: "Workforce360",
        description:
        "A comprehensive HR management system for managing employee records, attendance, and payroll.",
        image: "/projects/project4.png",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js","cloudinary","nodemailer"],
        demoUrl: "https://workforce360-frontend.vercel.app/",
        githubUrl: "https://github.com/arundhativaishnav/workforce360-frontend"
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/arundhativaishnav"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};