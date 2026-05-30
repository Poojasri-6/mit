import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="About Us" title="Quality You Can Trust. Heritage You Can Taste." />
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <img src={about} alt="Indian farmer holding spices" loading="lazy" className="rounded-3xl shadow-[var(--shadow-navy)]" />
          <div>
            <h3 className="font-display text-4xl text-navy">Who We Are</h3>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Mars International Trading is a dynamic export company based in India, dedicated to
              delivering high-quality agricultural, herbal, and natural products to global markets. 
              We combine traditional knowledge with modern standards to bring authentic Indian products to customers worldwide.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our company is built on the principles of trust, quality, and long-term business relationships. 
              We work closely with farmers, suppliers, and processors to ensure that every product meets strict quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do & Our Strength */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-5 grid gap-12 md:grid-cols-2">
          <div className="glass rounded-3xl p-10 border-navy/5">
            <h3 className="font-display text-3xl text-navy">What We Do</h3>
            <p className="mt-4 text-muted-foreground mb-6">We specialize in the export of a wide range of products, including:</p>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Traditional Indian spices and blended podis",
                "Herbal and plant-based powders",
                "Natural supplements and eco-friendly products",
                "Agricultural commodities",
                "Industrial materials like granite"
              ].map(t => (
                <li key={t} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" /> 
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/80 italic">Each product is carefully sourced, processed, and packed to maintain freshness, purity, and consistency.</p>
          </div>

          <div className="glass rounded-3xl p-10 border-gold/10">
            <h3 className="font-display text-3xl text-navy">Our Strength</h3>
            <p className="mt-4 text-muted-foreground mb-6">At Mars International Trading, our strength lies in:</p>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Strong sourcing network from trusted farms and suppliers",
                "Focus on quality control and hygienic processing",
                "Ability to handle diverse product categories",
                "Flexible supply based on customer requirements",
                "Commitment to timely delivery and reliable service"
              ].map(t => (
                <li key={t} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" /> 
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <SectionHeading eyebrow="Commitment" title="Quality is at our Core" />
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Quality is at the core of everything we do. From raw material selection to final packaging, 
          we follow strict quality checks to ensure our products meet international expectations.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Pure & Authentic", "Safely Processed", "Export Packed", "Consistent Quality"].map(v => (
            <div key={v} className="bg-white p-4 rounded-xl shadow-sm border border-border">
              <div className="font-display text-navy font-semibold text-sm">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <SectionHeading eyebrow="Our Values" title="Integrity. Quality. Commitment." />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Integrity", d: "We believe in honest and transparent business practices." },
              { v: "Quality", d: "We never compromise on product standards." },
              { c: "Commitment", d: "We deliver what we promise, with total reliability." },
              { f: "Customer Focus", d: "We prioritize your satisfaction in every shipment." },
            ].map(v => {
              const title = v.t || v.v || v.c || v.f;
              return (
                <div key={title} className="p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 transition hover:bg-white/10">
                  <div className="mx-auto h-1 w-12 rounded-full mb-6" style={{ background: "var(--gradient-gold)" }} />
                  <h4 className="font-display text-2xl text-gold-light">{title}</h4>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-16">
            <Link to="/contact" className="btn-gold">Start a Partnership</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
