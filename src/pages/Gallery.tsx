import { useState } from "react";
import { X } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const categories = ["All", "Aasara Vedika", "Tree Plantation", "Zero Plastic Campaign", "Posters", "Papers Clips"];

const images = [
  { src: hero2, category: "Community Activities" },
  { src: hero3, category: "Clean-up Drives" },
  { src: hero4, category: "Tree Plantation" },
  { src: hero1, category: "Tree Plantation" },
  { src: hero5, category: "Community Activities" },
  { src: hero3, category: "Clean-up Drives" },
  { src: hero2, category: "Workshops" },
  { src: hero4, category: "Workshops" },
  { src: hero1, category: "Community Activities" },
  { src: hero5, category: "Tree Plantation" },
  { src: hero2, category: "Clean-up Drives" },
  { src: hero3, category: "Workshops" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={hero5} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dsc-dark/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Gallery</h1>
            <p className="mt-4 text-lg text-primary-foreground/80">Moments from our environmental journey</p>
          </div>
        </div>
      </section>

      <SectionFadeIn>
        <section className="section-padding">
          <div className="container-narrow">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? "gradient-green text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry-ish grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img, i) => (
                <div
                  key={i}
                  className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer hover-lift"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.category}
                    className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                      i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-dsc-dark/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={lightbox} alt="Preview" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
