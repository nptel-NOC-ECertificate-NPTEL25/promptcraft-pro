import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const HeroSlider = () => {
const [current, setCurrent] = useState(0);

useEffect(() => {
const timer = setInterval(() => {
setCurrent((p) => (p + 1) % slides.length);
},5000);

return () => clearInterval(timer);

},[]);

return (
<section className="relative h-[70vh] md:h-screen w-full overflow-hidden">

<AnimatePresence mode="wait">
<motion.div
key={current}
initial={{opacity:0,scale:1.1}}
animate={{opacity:1,scale:1}}
exit={{opacity:0}}
transition={{duration:1}}
className="absolute inset-0"
>

<img
src={slides[current]}
alt="Hero"
className="h-full w-full object-cover object-center"
/>

<div className="absolute inset-0 bg-gradient-to-b from-dsc-dark/60 via-dsc-dark/40 to-dsc-dark/70"/>

</motion.div>
</AnimatePresence>


{/* Content */}
<div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 md:px-12">
<div className="text-center w-full max-w-3xl">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.9,duration:0.8}}
className="
mt-8
flex
flex-col
sm:flex-row
justify-center
items-center
gap-4
"
>

<Button
asChild
size="lg"
className="
w-full
sm:w-auto
px-6
md:px-8
gradient-green
border-0
text-primary-foreground
font-semibold
"
>
<Link to="/join-us">
Join Us
</Link>
</Button>

<Button
asChild
size="lg"
variant="outline"
className="
w-full
sm:w-auto
px-6
md:px-8
border-primary-foreground/30
text-primary-foreground
bg-primary-foreground/10
hover:bg-primary-foreground/20
font-semibold
"
>
<Link to="/focus-areas">
Explore Our Work
</Link>
</Button>

</motion.div>

</div>
</div>


{/* Dots */}
<div className="
absolute
bottom-5 md:bottom-8
left-1/2
-translate-x-1/2
z-10
flex
gap-2
">
{slides.map((_,i)=>(
<button
key={i}
onClick={()=>setCurrent(i)}
className={`
rounded-full
transition-all
${i===current
? "bg-primary-foreground w-6 md:w-8 h-2 md:h-3"
: "bg-primary-foreground/40 w-2 h-2 md:w-3 md:h-3"
}
`}
/>
))}
</div>


{/* Hide arrows on mobile */}
<button
onClick={()=>setCurrent((p)=>(p-1+slides.length)%slides.length)}
className="
hidden md:flex
absolute
left-4
top-1/2
-translate-y-1/2
z-10
w-10 h-10
rounded-full
bg-primary-foreground/10
items-center
justify-center
text-primary-foreground
hover:bg-primary-foreground/20
"
>
<ChevronLeft size={20}/>
</button>


<button
onClick={()=>setCurrent((p)=>(p+1)%slides.length)}
className="
hidden md:flex
absolute
right-4
top-1/2
-translate-y-1/2
z-10
w-10 h-10
rounded-full
bg-primary-foreground/10
items-center
justify-center
text-primary-foreground
hover:bg-primary-foreground/20
"
>
<ChevronRight size={20}/>
</button>

</section>
);
};

export default HeroSlider;
