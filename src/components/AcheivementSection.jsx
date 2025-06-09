import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Google UX Design Certificate",
    description: "7-course UX specialization from Google via Coursera.",
    image: "/achievements/cert1.png",
    link: "https://coursera.org/verify/xyz",
  },
  // Add more...
];

const competitions = [
  {
    id: 1,
    title: "Smart India Hackathon 2023",
    description: "Finalist in national-level hackathon under software category.",
    image: "/achievements/comp1.png",
    link: "#",
  },
  // Add more...
];

const publications = [
  {
    id: 1,
    title: "AI in Education: A Future Perspective",
    description: "Published in International Journal of Emerging Tech (IJET).",
    image: "/achievements/pub1.png",
    link: "https://example.com/publication-paper",
  },
];

const copyrights = [
  {
    id: 1,
    title: "CodeVerse - Interactive Coding Platform",
    description: "Copyright registered for original source code & UI design.",
    image: "/achievements/copyright1.png",
    link: "#",
  },
];

const worldRecord = {
  title: "World Record - Fastest Prototype Deployment by a Student",
  description:
    "Awarded by XYZ Organization for deploying a complete SaaS MVP in under 12 hours.",
  image: "/achievements/worldrecord.png",
  link: "#",
};

const Card = ({ title, description, image, link }) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
      />
    </div>
    <div className="p-5">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="inline-flex items-center text-primary text-sm hover:underline"
        >
          View Details <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  </div>
);

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse of my accomplishments across certifications, competitions,
          copyrights, and more.
        </p>

        {/* Reusable Section Generator */}
        {[
          { title: "📜 Certifications", data: certifications },
          { title: "🏁 Competitions", data: competitions },
          { title: "🧠 Publications", data: publications },
          { title: "©️ Copyrights", data: copyrights },
        ].map((section) =>
          section.data.length > 0 ? (
            <div className="mb-16" key={section.title}>
              <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.data.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>
            </div>
          ) : null
        )}

        {/* World Record Certificate */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">🌍 World Record</h3>
          <Card {...worldRecord} />
        </div>
      </div>
    </section>
  );
};
