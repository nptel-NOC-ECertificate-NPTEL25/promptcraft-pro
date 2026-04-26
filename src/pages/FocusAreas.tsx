import { Shield, Recycle, Lightbulb, Heart, TreePine, Leaf, Droplets, BookOpen, Wrench, HeartPulse, Sparkles, Users } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";
import plant4 from "@/assets/plant4.jpeg";
import hero2 from "@/assets/hero-2.jpg";
import clean13 from "@/assets/clean13.jpeg";
import clean12 from "@/assets/clean12.jpeg";
import hero1 from "@/assets/hero-1.jpg";
import sd1 from "@/assets/sd1.jpeg";

const areas = [
  {
    icon: Shield,
    title: "Environmental Protection",
    desc: "We lead initiatives to protect and restore natural ecosystems through community-driven action.",
    image: plant4,
    points: ["Tree plantation drives", "Eco awareness programs", "Nature conservation campaigns"],
    subIcons: [TreePine, Leaf, Sparkles],
  },
  {
    icon: Recycle,
    title: "Waste Management",
    desc: "Tackling plastic pollution and promoting circular economy principles at the community level.",
    image: clean13,
    points: ["Plastic reduction initiatives", "Recycling awareness", "Waste-to-resource innovation"],
    subIcons: [Droplets, Recycle, Wrench],
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    desc: "Empowering youth and women with skills for sustainable livelihoods and environmental leadership.",
    image: sd1,
    points: ["Training youth and women", "Environmental leadership programs", "Community workshops"],
    subIcons: [BookOpen, Users, Lightbulb],
  },
  {
    icon: Heart,
    title: "Health & Sanitation",
    desc: "Creating cleaner, healthier communities through hygiene awareness and sanitation initiatives.",
    image: clean12,
    points: ["Clean environment campaigns", "Community hygiene awareness", "Public sanitation initiatives"],
    subIcons: [HeartPulse, Droplets, Heart],
  },
];

const FocusAreas = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={hero1} alt="Focus Areas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dsc-dark/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Focus Areas</h1>
            <p className="mt-4 text-lg text-primary-foreground/80">Four pillars driving our environmental mission</p>
          </div>
        </div>
      </section>

      {areas.map((area, i) => (
        <SectionFadeIn key={area.title}>
          <section className={`section-padding ${i % 2 === 0 ? '' : 'bg-muted/50'}`}>
            <div className={`container-narrow grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center">
                    <area.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">{area.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{area.desc}</p>
                <div className="space-y-4">
                  {area.points.map((point, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        {(() => { const SubIcon = area.subIcons[j]; return <SubIcon size={16} className="text-primary" />; })()}
                      </div>
                      <span className="text-foreground font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden hover-lift">
                <img src={area.image} alt={area.title} className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </section>
        </SectionFadeIn>
      ))}
    </div>
  );
};

export default FocusAreas;
