import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sprout,
  ClipboardCheck,
  PackageCheck,
  Boxes,
  Ship,
  Headphones,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  component: Services,
});

const SERVICES = [
  {
    icon: Sprout,
    title: "Sourcing & Procurement",
    desc: "Direct partnerships with trusted farmers and processors across South India for consistent quality and fair pricing.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    desc: "Multi-stage testing for purity, moisture, contaminants and uniformity to meet stringent global standards.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
  },
  {
    icon: PackageCheck,
    title: "Custom Packaging",
    desc: "Private-label, retail, bulk, and OEM packaging designed precisely for your brand and target market.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: Boxes,
    title: "Warehousing",
    desc: "Hygienic, climate-controlled storage with FIFO inventory management to ensure peak freshness.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    icon: Ship,
    title: "Export Logistics",
    desc: "End-to-end shipping, documentation, and customs handling — delivering seamlessly from door to door.",
    image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=600&q=80",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "A single, dedicated point of contact for orders, samples, compliance, and ongoing aftercare.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, title, desc, image } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl overflow-visible shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-2"
    >
      {/* Card image */}
      <div className="relative overflow-hidden rounded-t-2xl h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
      </div>

      {/* Circular icon — overlaps image bottom edge */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-52 z-10">
        <div
          className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          style={{ background: "var(--gradient-gold)" }}
        >
          <Icon className="h-6 w-6 text-navy" />
        </div>
      </div>

      {/* Card body */}
      <div className="pt-10 pb-6 px-6 text-center flex flex-col items-center">
        <h3 className="font-display text-xl text-navy font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {desc}
        </p>

        {/* Read More button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
          style={{
            background: expanded ? "var(--gradient-navy)" : "var(--gradient-gold)",
            color: expanded ? "var(--cream)" : "var(--navy)",
            boxShadow: "var(--shadow-gold)",
          }}
        >
          {expanded ? "Show Less" : "Read More"}
          <ArrowRight
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
          />
        </button>

        {/* Expanded detail */}
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-sm text-muted-foreground leading-relaxed text-left bg-muted rounded-xl p-4 w-full"
          >
            {desc} Our team ensures seamless coordination at every stage, backed by
            years of export experience and a commitment to excellence.
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <div className="relative h-[350px] md:h-[400px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80"
            alt="Services Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.235 0.075 264 / 0.8), oklch(0.235 0.075 264 / 0.5) 50%, oklch(0.235 0.075 264 / 0.8) 100%)",
          }}
        />
        
        {/* Smooth bottom blend */}
        <div 
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)"
          }}
        />

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-6xl md:text-8xl font-bold text-white tracking-tight uppercase"
          >
            Services
          </motion.h1>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-2 text-white/80 text-xs font-medium uppercase tracking-widest"
          >
            <Link to="/" className="hover:text-gold-light transition-colors flex items-center gap-1.5">
              <Home className="h-3 w-3" />
              Home
            </Link>
            <ChevronRight className="h-3 w-3 opacity-40" />
            <span className="text-gold">Services</span>
          </motion.nav>
        </div>
      </div>

      {/* ── Section Intro ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-gold-dark"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-navy mt-2"
        >
          End-to-End Export Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground"
        >
          We handle every step of the export journey — so you can focus on growing your business with confidence.
        </motion.p>
        <div className="gold-divider mx-auto mt-6" />
      </div>

      {/* ── Services Cards Grid ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} index={i} />
          ))}
        </div>
      </div>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-6 text-center">
        {/* BG image */}
        <img
          src="https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1400&q=80"
          alt="Export logistics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark navy overlay matching index.tsx pattern */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, oklch(0.235 0.075 264 / 0.94), oklch(0.235 0.075 264 / 0.80))" }}
        />
        {/* Glow blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "oklch(0.6 0.13 70 / 0.25)" }}
        />

        <div className="relative z-10 max-w-2xl mx-auto" style={{ color: "oklch(0.985 0.01 90)" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: "oklch(0.84 0.11 86)" }}
            className="text-xs font-bold uppercase tracking-widest"
          >
            The MIT Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-3"
          >
            Ready to export with confidence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg"
            style={{ color: "oklch(0.985 0.01 90 / 0.75)" }}
          >
            Partner with Mars International Trading for reliable, scalable, and risk-free sourcing solutions tailored for your market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link to="/contact" className="btn-gold">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
