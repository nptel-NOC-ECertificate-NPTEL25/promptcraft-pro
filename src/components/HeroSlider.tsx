import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dsc-dark/60 via-dsc-dark/40 to-dsc-dark/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container-narrow px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
          >
            Building a Cleaner, Greener Future Through Youth Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Dharitree Samrakshana Chaitanyam Society empowers communities to fight plastic pollution, promote sustainability, and create lasting environmental change.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="gradient-green border-0 text-primary-foreground font-heading font-semibold text-base px-8">
              <Link to="/join-us">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-heading font-semibold text-base px-8">
              <Link to="/focus-areas">Explore Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
};

export default HeroSlider;
