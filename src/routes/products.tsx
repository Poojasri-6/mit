import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Home, ChevronRight, Search } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { motion } from "framer-motion";

export const Route = createFileRoute("/products")({
  component: Products,
});

const CATS = ["All", "Spices", "Herbal", "Agro", "Industrial"] as const;

function Products() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [search, setSearch] = useState("");

  const list = PRODUCTS.filter((p) => {
    const matchCat = cat === "All" || p.category === cat;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  /* Group products by their group label */
  const groups = cat === "All"
    ? [...new Set(PRODUCTS.map((p) => p.group))]
    : [...new Set(list.map((p) => p.group))];

  return (
    <div className="overflow-hidden">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="relative h-[400px] md:h-[450px] flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={PRODUCTS[0].image}
            alt="Our Products"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Deep, multi-layered overlay for better text contrast and blending */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.235 0.075 264 / 0.7), oklch(0.235 0.075 264 / 0.4) 40%, oklch(0.235 0.075 264 / 0.8) 100%)",
          }}
        />
        
        {/* Soft bottom blend to page background - using mask-image for the 'proper blend' */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)"
          }}
        />

        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-gold-light/90">
              Discover Our Range
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tight uppercase">
              Products
            </h1>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-white/80 text-xs font-medium uppercase tracking-widest"
          >
            <Link to="/" className="hover:text-gold-light transition-colors flex items-center gap-1.5">
              <Home className="h-3 w-3" />
              Home
            </Link>
            <ChevronRight className="h-3 w-3 opacity-40" />
            <span className="text-gold">Products</span>
          </motion.nav>
        </div>
      </div>

      {/* ── Filters & Search ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 -mt-10 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-500 overflow-hidden ${
                  cat === c
                    ? "text-navy"
                    : "text-foreground/60 hover:text-navy border border-border"
                }`}
              >
                {cat === c && (
                  <motion.div 
                    layoutId="active-cat"
                    className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-72 pl-11 pr-5 py-3 rounded-2xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* ── Product Cards by Group ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        {groups.map((group) => {
          const groupProducts = list.filter((p) => p.group === group);
          if (groupProducts.length === 0) return null;

          return (
            <div key={group} className="mb-16">
              {/* Group heading */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div
                  className="h-8 w-1.5 rounded-full"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <h2 className="font-display text-2xl md:text-3xl text-navy">
                  🌿 {group}
                </h2>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {groupProducts.length} items
                </span>
              </motion.div>

              {/* Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {groupProducts.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      to={"/products/$slug"}
                      params={{ slug: p.slug }}
                      className="product-card group flex flex-col h-full"
                    >
                      {/* Image */}
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        {/* Category badge */}
                        <div
                          className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm"
                          style={{
                            background: "oklch(0.235 0.075 264 / 0.8)",
                            color: "oklch(0.84 0.11 86)",
                          }}
                        >
                          {p.category}
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur text-navy text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                            View Details →
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-lg text-navy group-hover:text-gold-dark transition-colors">
                          {p.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                          {p.short}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold-dark transition-colors">
                          View Details{" "}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Empty state */}
        {list.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found.</p>
            <button
              onClick={() => {
                setCat("All");
                setSearch("");
              }}
              className="mt-4 btn-gold"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 px-6 text-center">
        <img
          src={PRODUCTS[10].image}
          alt="Products background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, oklch(0.235 0.075 264 / 0.92), oklch(0.235 0.075 264 / 0.80))",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto" style={{ color: "oklch(0.985 0.01 90)" }}>
          <h2 className="font-display text-3xl md:text-4xl">
            Interested in our products?
          </h2>
          <p className="mt-3 text-base" style={{ color: "oklch(0.985 0.01 90 / 0.7)" }}>
            Get in touch for samples, pricing, and custom packaging options.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="btn-gold">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
