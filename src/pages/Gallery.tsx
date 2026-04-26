import { useState } from "react";
import { X } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import cloth1 from "@/assets/cloth1.jpeg";
import cloth2 from "@/assets/cloth2.jpeg";
import cloth3 from "@/assets/cloth3.jpeg";
import cloth4 from "@/assets/cloth4.jpeg";
import plant1 from "@/assets/plant1.jpeg";
import plant2 from "@/assets/plant2.jpeg";
import plant3 from "@/assets/plant3.jpeg";
import plant4 from "@/assets/plant4.jpeg";
import plant5 from "@/assets/plant5.jpeg";
import plant6 from "@/assets/plant6.jpeg";
import plant7 from "@/assets/plant7.jpeg";
import plant8 from "@/assets/plant8.jpeg";
import clean1 from "@/assets/clean1.jpeg";
import clean2 from "@/assets/clean2.jpeg";
import clean3 from "@/assets/clean3.jpeg";
import clean4 from "@/assets/clean4.jpeg";
import clean5 from "@/assets/clean5.jpeg";
import clean6 from "@/assets/clean6.jpeg";
import clean7 from "@/assets/clean7.jpeg";
import clean8 from "@/assets/clean8.jpeg";
import clean9 from "@/assets/clean9.jpeg";
import clean10 from "@/assets/clean10.jpeg";
import clean11 from "@/assets/clean11.jpeg";
import clean12 from "@/assets/clean12.jpeg";
import clean13 from "@/assets/clean13.jpeg";
import clean14 from "@/assets/clean14.jpeg";
import paper1 from "@/assets/paper1.jpeg";
import paper2 from "@/assets/paper2.jpeg";
import paper3 from "@/assets/paper3.jpeg";
import paper4 from "@/assets/paper4.jpeg";
import paper5 from "@/assets/paper5.jpeg";
import paper6 from "@/assets/paper6.jpeg";
import paper7 from "@/assets/paper7.jpeg";
import paper8 from "@/assets/paper8.jpeg";
import paper9 from "@/assets/paper9.jpeg";
import paper10 from "@/assets/paper10.jpeg";
import paper11 from "@/assets/paper11.jpeg";
import paper12 from "@/assets/paper12.jpeg";

const categories = ["All", "Aasara Vedika", "Tree Plantation", "Zero Plastic Campaign", "Posters", "Papers Clips"];

const images = [
  { src: cloth1, category: "Aasara Vedika" },
  { src: cloth2, category: "Aasara Vedika" },
  { src: cloth3, category: "Aasara Vedika" },
  { src: cloth4, category: "Aasara Vedika" },
  { src: plant1, category: "Tree Plantation" },
  { src: plant2, category: "Tree Plantation" },
  { src: plant3, category: "Tree Plantation" },
  { src: plant4, category: "Tree Plantation" },
  { src: plant5, category: "Tree Plantation" },
  { src: plant6, category: "Tree Plantation" },
  { src: plant7, category: "Tree Plantation" },
  { src: plant8, category: "Tree Plantation" },
  { src: clean1, category: "Zero Plastic Campaign" },
  { src: clean2, category: "Zero Plastic Campaign" }, 
  { src: clean3, category: "Zero Plastic Campaign" },
  { src: clean4, category: "Zero Plastic Campaign" },
  { src: clean5, category: "Zero Plastic Campaign" },
  { src: clean6, category: "Zero Plastic Campaign" },
  { src: clean7, category: "Zero Plastic Campaign" },
  { src: clean8, category: "Zero Plastic Campaign" },
  { src: clean9, category: "Zero Plastic Campaign" },
  { src: clean10, category: "Zero Plastic Campaign" },
  { src: clean11, category: "Zero Plastic Campaign" },
  { src: clean12, category: "Zero Plastic Campaign" },
  { src: clean13, category: "Zero Plastic Campaign" },
  { src: clean14, category: "Zero Plastic Campaign" },
  { src: paper1, category: "Papers Clips" },
  { src: paper2, category: "Papers Clips" },
  { src: paper3, category: "Papers Clips" },
  { src: paper4, category: "Papers Clips" },
  { src: paper5, category: "Papers Clips" },
  { src: paper6, category: "Papers Clips" },
  { src: paper7, category: "Papers Clips" },
  { src: paper8, category: "Papers Clips" },
  { src: paper9, category: "Papers Clips" },
  { src: paper10, category: "Papers Clips" },
  { src: paper11, category: "Papers Clips" },
  { src: paper12, category: "Papers Clips" },

  




];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

const excludedFromAll = ["Papers Clips", "Posters"];

const filtered =
  filter === "All"
    ? images.filter((img) => !excludedFromAll.includes(img.category))
    : images.filter((img) => img.category === filter);
  
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={hero1} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
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
