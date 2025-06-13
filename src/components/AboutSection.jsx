import { Brain, Briefcase, Code, Star } from "lucide-react";
import { SiLeetcode, SiHackerrank } from "react-icons/si"; // For profile icons

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate full-stack developer with a flair for design
            </h3>

            <p className="text-muted-foreground">
              I am a full-stack developer with a passion for creating
              innovative web applications. With expertise in the MERN stack and
              a keen eye for design, I strive to build user-friendly and
              visually appealing digital experiences.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1BU10gMh5W-4w7DFSSdzmOb5x72V8Olhi"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Full-Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable MERN applications with clean architecture,
                    responsive UI, and robust backend logic.
                  </p>
                </div>
              </div>
            </div>

            {/* Java & AI */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Java & AI Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Exploring the intersection of Java, data structures, and AI
                    to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Coding Profiles */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg">Coding Profiles</h4>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <SiLeetcode className="text-yellow-500 h-5 w-5" />
                    <span>
                      <a
                        href="https://leetcode.com/u/arundhativaishnav/"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        LeetCode:
                      </a>{" "}
                      Solved{" "}
                      <span className="font-semibold text-foreground">
                        167+
                      </span>{" "}
                      problems
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <SiHackerrank className="text-green-500 h-5 w-5" />
                    <span>
                      <a
                        href="https://www.hackerrank.com/profile/arundhatianil"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        HackerRank:
                      </a>{" "}
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                        5★ in Java, Problem Solving
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
    </section>
  );
};
