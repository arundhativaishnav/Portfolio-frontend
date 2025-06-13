// WorldRecordCarousel.jsx
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ExternalLink } from "lucide-react";

const WorldRecordCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
    },
  });

  const images = [
    "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749587921/IMG-20241010-WA0006_t52lj8.jpg",
    "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749588222/IMG-20241010-WA0009_usvxee.jpg",
    "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749588292/IMG-20241010-WA0008_gxpqb5.jpg",
    "https://res.cloudinary.com/dbwcqwyjm/image/upload/v1749588409/IMG-20241010-WA0007_fkctyg.jpg"
  ];

  const worldRecord = {
    title: "World Record - EXPLORING WONDERS OF PHYSICS WITH AR (Augmented Reality)",
    description:
      "Awarded by World Records India for creating an AR experience that teaches physics concepts.",
    link: "https://www.worldrecordsindia.com/2024/03/15/exploring-wonders-of-physics-with-avinya/",
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-6">
      <div className="keen-slider mb-6" ref={sliderRef}>
        {images.map((src, i) => (
          <div className="keen-slider__slide" key={i}>
            <img
              src={src}
              alt={`World Record ${i + 1}`}
              className="w-full h-64 object-contain rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="text-left">
        <h4 className="text-xl font-semibold mb-2">{worldRecord.title}</h4>
        <p className="text-sm text-muted-foreground mb-3">{worldRecord.description}</p>
        <a
          href={worldRecord.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary text-sm hover:underline"
        >
          View Details <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default WorldRecordCarousel;
