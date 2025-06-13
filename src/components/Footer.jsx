import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side: Branding & copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-lg font-semibold">@arundhati.create</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arundhati Vaishnav. All rights reserved.
          </p>
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/arundhativaishnav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/arundhati-vaishnav17/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin />
          </a>
          
          <a
            href="mailto:arundhatianil17@email.com"
            className="hover:text-primary transition"
          >
            <Mail />
          </a>
        </div>
      </div>

      {/* Optional: newsletter/contact CTA */}
      <div className="mt-6 text-center text-muted-foreground text-sm">
        Want to collaborate or chat about your next idea?{" "}
        <a
          href="#contact"
          className="text-primary underline underline-offset-2 hover:opacity-90"
        >
          Let’s Connect →
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/80 transition z-50"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};
