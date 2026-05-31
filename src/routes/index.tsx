import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, Globe2, Leaf, ShieldCheck, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/hero-spices.jpg";
import logo from "@/assets/mit-logo.png";
import exportsImg from "@/assets/exports.jpg";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  component: Home,
});


function Home() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-4 pb-24 md:grid-cols-2 md:items-center md:pt-8">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-dark backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Authentic Indian Exports
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-navy">
              Welcome to <span className="text-gradient-gold">Mars International</span> Trading
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground font-medium">
              A trusted exporter of high-quality agricultural, herbal, and natural products from India. 
              Rooted in tradition and driven by global standards, we bring the richness of Indian farms and heritage to customers across the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Get in Touch <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/products" className="btn-outline-gold">Our Product Range</Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-navy)]">
              <img src={hero} alt="Premium Indian spices on world map" className="h-full w-full object-cover" width={1920} height={1080} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 hidden md:flex items-center gap-3 float-slow">
              <img src={logo} alt="MIT" className="h-14 w-14" />
              <div>
                <div className="font-display text-lg text-navy">Trusted Beyond Borders.</div>
                <div className="text-xs text-muted-foreground">Authentic Indian Heritage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Introduction"
          title="Rooted in Tradition, Driven by Excellence"
          subtitle="With a strong commitment to quality, sustainability, and authenticity, we specialize in sourcing and exporting premium spices, herbal products, natural supplements, and selected industrial materials."
        />
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: ShieldCheck, title: "High Quality", text: "Carefully sourced products meeting international standards." },
            { icon: Award, title: "Hygienic Process", text: "Handled with utmost care from sourcing to shipment." },
            { icon: Globe2, title: "Competitive", text: "Premium quality with competitive pricing for global markets." },
            { icon: Truck, title: "Reliable Supply", text: "Consistent supply chain and timely delivery worldwide." },
            { icon: Sparkles, title: "Satisfaction", text: "An unwavering commitment to our customers' satisfaction." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <Icon className="h-5 w-5 text-navy" />
              </div>
              <h3 className="mt-4 font-display text-lg text-navy font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products preview */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="Catalog" title="Our Product Range" subtitle="We offer a diverse portfolio of export-quality spices, traditional blends, and herbal supplements." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.slug} to={"/products/$slug"} params={{ slug: p.slug }} className="product-card group">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dark">{p.category}</div>
                <div className="mt-1 font-display text-xl text-navy">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="btn-navy">Explore Full Catalog <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div className="glass rounded-3xl p-10 border-gold/20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">Our Vision</span>
            <h3 className="mt-4 font-display text-3xl text-navy leading-tight">A globally recognized export house.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become a globally recognized export company delivering authentic Indian products while maintaining the highest standards of quality and integrity.
            </p>
          </div>
          <div className="glass rounded-3xl p-10 border-navy/10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">Our Mission</span>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-4"><CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0" /> Promote Indian agricultural and herbal products worldwide.</li>
              <li className="flex gap-4"><CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0" /> Ensure consistent quality and competitive pricing.</li>
              <li className="flex gap-4"><CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0" /> Build long-term partnerships with international clients.</li>
              <li className="flex gap-4"><CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0" /> Expand into new global markets with integrity and reliability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="relative mt-20 overflow-hidden">
        <img src={exportsImg} alt="Cargo ship at sunset" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.235 0.075 264 / 0.94), oklch(0.235 0.075 264 / 0.75))" }} />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center text-cream">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-light">Global Reach</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">Reliability and Excellence Worldwide.</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-cream/80 leading-relaxed">
            We aim to serve clients across Asia, the Middle East, Europe, and other international markets, building long-term partnerships based on reliability and excellence.
          </p>
          <div className="mt-12">
            <Link to="/contact" className="btn-gold">Partner With Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
