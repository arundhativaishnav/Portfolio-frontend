import { ExternalLink } from "lucide-react";
import WorldRecordCarousel from '../components/worldrecordcarousel';


const certifications = [
  {
    id: 1,
    title: "AWS cloude practitioner certification",
    description: "Fundamentals of AWS cloud services and architecture.",
    image: "https://res.cloudinary.com/dbwcqwyjm/image/upload/c_crop,w_1100,h_800/v1749837960/Screenshot_2025-06-13_233551_vpfadp.png",
    link: "https://res.cloudinary.com/dbwcqwyjm/image/upload/c_crop,w_1100,h_800/v1749837960/Screenshot_2025-06-13_233551_vpfadp.png",
  },
  {
    id: 2,
    title: "Guvi /HCL webinar tools every devops engineer should know",
    description: "Webinar on essential DevOps tools.",
    image: "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749839301/Screenshot_2025-06-13_235810_i6kh6g.png",
    link: "https://www.guvi.in/share-certificate/1430Cl144On97D53M6",
  },
  {
    id: 3,
    title: "Proffessional Certificate in Agile and Scrum",
    description: "Comprehensive course on Agile methodologies and Scrum framework.",
    image: "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749839699/Screenshot_2025-06-14_000456_mnvu32.png",
    link: "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749839699/Screenshot_2025-06-14_000456_mnvu32.png",
  },
  // Add more...
];


const publications = [
  {
    id: 1,
    title: "Peruse of Traffic in Educational Premises Using Max-Flow Min-Cut Theorem ",
    description: "Published in Educational Administration: Theory and Practice (Scopus-indexed)",
    image: "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749586522/Screenshot_2025-06-11_014448_rp9fmt.png",
    link: "https://www.kuey.net/index.php/kuey/article/view/1663",
  },
  {
    id: 2,
    title: "Real-Time Geospatial Analysis: A Web Application for Dynamic Polygon Area Calculation",
    description: "Published in International Journal ofCreative Research Thoughts (IJCRT)",
    image: "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749586706/Screenshot_2025-06-11_014822_facaek.png",
    link: "https://ijcrt.org/viewfulltext.php?&p_id=IJCRT2405905",
  },
];




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
          
          { title: "🧠 Publications", data: publications },
          
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
        <WorldRecordCarousel />
      </div>
      </div>
    </section>
  );
};
