import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/clients")({
  component: Clients,
});

// Highlighted client countries with approximate world-map coordinates (lon, lat → SVG x,y)
const COUNTRIES = [
  { name: "USA", x: 200, y: 200, shipped: ["Spices", "Herbal Extracts", "Banana Leaf"] },
  { name: "UK", x: 470, y: 170, shipped: ["Herbal Powders", "Moringa", "Spices"] },
  { name: "UAE", x: 590, y: 250, shipped: ["Granite", "Banana Leaf", "Spices", "Bamboo Salt"] },
  { name: "India", x: 660, y: 260, shipped: ["Origin of Exports"] },
  { name: "Australia", x: 800, y: 400, shipped: ["Spices", "Herbal Powders", "Banana Leaf"] },
];

const TESTIMONIALS = [
  { q: "Consistent quality and dependable shipping. A true long-term partner for our spice imports.", a: "Distributor, UAE" },
  { q: "Exceptional purity in their herbal powders. Our customers rate them five stars.", a: "Wellness Brand, UK" },
  { q: "Granite slabs arrived on schedule, perfectly finished. Highly professional.", a: "Construction, Singapore" },
];

const STATS = [
  { label: "Global Partners", value: 45, suffix: "+" },
  { label: "Countries Served", value: 5, suffix: "" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Products Exported", value: 20, suffix: "+" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Clients() {
  const [selectedCountry, setSelectedCountry] = useState<typeof COUNTRIES[0] | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Clients Worldwide" title="Trusted Across the Globe." subtitle="Our products reach importers, distributors, retailers and brands across continents." />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {STATS.map((stat, i) => (
          <div key={i} className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-display font-semibold text-gold-dark">
              <Counter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-navy">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 overflow-hidden rounded-3xl border border-border bg-card p-4 md:p-8 shadow-[var(--shadow-soft)] relative"
      >
        <div className="mb-4 text-center text-sm font-semibold text-navy bg-gold-light/20 inline-block px-4 py-1.5 rounded-full mx-auto w-fit block md:hidden">
          Tap a country to view exports
        </div>
        
        <svg viewBox="0 0 1000 500" className="w-full h-auto cursor-pointer" role="img" aria-label="Global client map" onClick={() => setSelectedCountry(null)}>
          <defs>
            <radialGradient id="bg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="oklch(0.985 0.01 90)" />
              <stop offset="100%" stopColor="oklch(0.94 0.02 90)" />
            </radialGradient>
          </defs>
          <rect width="1000" height="500" fill="url(#bg)" rx="24" />
          {/* Stylised continent silhouettes */}
          <g fill="oklch(0.88 0.02 264 / 0.9)" stroke="oklch(0.72 0.04 264 / 0.6)" strokeWidth="1">
            {/* North America */}
            <path d="M120,140 Q170,90 240,110 Q300,130 290,200 Q260,260 200,260 Q150,250 130,210 Z" />
            {/* South America */}
            <path d="M280,290 Q330,290 340,360 Q330,420 300,440 Q270,420 270,360 Z" />
            {/* Europe */}
            <path d="M460,150 Q500,130 540,150 Q545,200 510,210 Q470,205 460,180 Z" />
            {/* Africa */}
            <path d="M500,230 Q570,225 580,310 Q560,400 520,420 Q480,390 480,310 Z" />
            {/* Middle East */}
            <path d="M555,220 Q600,210 615,260 Q600,290 565,285 Q545,260 555,230 Z" />
            {/* Asia */}
            <path d="M615,150 Q740,130 830,180 Q860,240 800,290 Q700,310 640,290 Q600,240 615,180 Z" />
            {/* India */}
            <path d="M650,250 Q680,260 685,300 Q665,320 645,300 Z" />
            {/* SE Asia */}
            <path d="M720,300 Q760,310 760,340 Q730,355 705,340 Z" />
            {/* Australia */}
            <path d="M770,380 Q830,375 850,420 Q820,445 780,440 Q760,415 770,395 Z" />
          </g>

          {/* Country dots */}
          {COUNTRIES.map(c => {
            const isSelected = selectedCountry?.name === c.name;
            return (
              <g 
                key={c.name} 
                onClick={(e) => { e.stopPropagation(); setSelectedCountry(c); }}
                className="cursor-pointer group"
              >
                <circle cx={c.x} cy={c.y} r="16" fill="transparent" /> {/* Hit area */}
                
                {/* Pulsing red effect */}
                <circle cx={c.x} cy={c.y} r="6" fill="#ef4444" opacity="0.3">
                  <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Solid red dot */}
                <circle cx={c.x} cy={c.y} r={isSelected ? "7" : "5"} fill="#ef4444" className="transition-all duration-300" />
                
                <text x={c.x + 12} y={c.y - 8} fontSize={isSelected ? "14" : "12"} fontWeight={isSelected ? "700" : "600"} fill={isSelected ? "#ef4444" : "oklch(0.235 0.075 264)"} fontFamily="Manrope, sans-serif" className="transition-all duration-300">
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Info Popup for selected country */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:top-8 md:right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gold-light/30 z-10 min-w-[240px]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-xl font-bold text-navy">{selectedCountry.name}</h3>
                <button onClick={() => setSelectedCountry(null)} className="text-muted-foreground hover:text-navy">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="text-sm font-semibold text-gold-dark mb-2 uppercase tracking-wider">Major Exports</div>
              <ul className="space-y-1.5">
                {selectedCountry.shipped.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-navy/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20">
        <SectionHeading eyebrow="What Clients Say" title="Words from Our Partners." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <div className="text-5xl font-display text-gold-dark leading-none">"</div>
              <blockquote className="mt-2 text-muted-foreground italic">{t.q}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy">— {t.a}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}
