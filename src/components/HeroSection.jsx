import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-7">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Arundhati Vaishnav
            </span>
            
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
            Full stack developer, world record holder, and creative artist with a passion for blending code and imagination. Skilled in Java and exploring AI, I craft full-stack apps that merge efficiency with visual creativity. Whether it’s development or painting—I bring ideas to life.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-block">
              View My Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500 shadow-xl overflow-hidden animate-fade-in-delay-2">
            <img
              src="profile/profile.jpg" // Replace with your actual path
              alt="Arundhati Vaishnav"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-purple-400 blur-xl opacity-40 z-[-1]" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
