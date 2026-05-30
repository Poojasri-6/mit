import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
  ChevronRight,
  Package,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { motion } from "framer-motion";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-32 text-center">
        <Package className="mx-auto h-16 w-16 text-muted-foreground/40" />
        <h1 className="mt-6 font-display text-4xl text-navy">Product Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/products" className="btn-gold mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>
    );
  }

  /* Related products from same category, excluding current */
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  /* Previous and next product for navigation */
  const currentIndex = PRODUCTS.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;

  return (
    <div className="overflow-hidden">
      {/* ── Breadcrumbs & Title ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 pt-12">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
        >
          <Link to="/" className="hover:text-navy transition-colors flex items-center gap-1">
            <Home className="h-3 w-3" />
            Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-40" />
          <Link to="/products" className="hover:text-navy transition-colors">
            Products
          </Link>
          <ChevronRight className="h-3 w-3 opacity-40" />
          <span className="text-gold-dark">{product.name}</span>
        </motion.nav>
      </div>

      {/* ── Product Detail ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-navy)] border border-border/40">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Category badge */}
            <div
              className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full"
              style={{
                background: "var(--gradient-gold)",
                color: "var(--navy)",
              }}
            >
              {product.category}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--gold-dark)" }}
            >
              {product.group}
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
              {product.name}
            </h2>
            <div className="gold-divider mt-4" />

            {/* Description */}
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mt-8">
              <h3 className="font-display text-xl text-navy mb-4">Key Features</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border/40"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 mt-0.5"
                      style={{ color: "var(--leaf)" }}
                    />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn-outline-gold">
                <ArrowLeft className="h-4 w-4" /> All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Prev / Next Navigation ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 pb-12">
        <div className="flex items-center justify-between border-t border-b border-border/40 py-4">
          {prevProduct ? (
            <Link
              to="/products/$slug"
              params={{ slug: prevProduct.slug }}
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-navy transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  Previous
                </div>
                <div className="text-navy font-semibold">{prevProduct.name}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProduct ? (
            <Link
              to="/products/$slug"
              params={{ slug: nextProduct.slug }}
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-navy transition-colors group text-right"
            >
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  Next
                </div>
                <div className="text-navy font-semibold">{nextProduct.name}</div>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* ── Related Products ────────────────────────────────── */}
      {related.length > 0 && (
        <div className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-5">
            <h3 className="font-display text-2xl text-navy mb-8 text-center">
              More in {product.category}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to="/products/$slug"
                    params={{ slug: r.slug }}
                    className="product-card group flex flex-col h-full"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-display text-base text-navy group-hover:text-gold-dark transition-colors">
                        {r.name}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {r.short}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
