import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/mit-logo.png";
import { PRODUCTS } from "@/data/products";

/* ── Derive unique categories from products data ──────────── */
const CATEGORIES = [...new Set(PRODUCTS.map((p) => p.category))];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/services", label: "Services" },
  { to: "/exports", label: "Exports" },
  { to: "/certificates", label: "Certificates" },
  { to: "/career", label: "Career" },
  { to: "/brand", label: "Brand" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

/* ── Products mega-dropdown ──────────────────────────────── */
function ProductsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl border border-border/60 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-6 z-50"
      style={{ animation: "dropIn 0.25s ease-out" }}
    >
      {/* Arrow pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-border/60" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg text-navy font-semibold">Our Product Range</h3>
          <Link
            to="/products"
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-gold-dark hover:text-navy transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => {
            const catProducts = PRODUCTS.filter((p) => p.category === cat);
            return (
              <Link
                key={cat}
                to="/products"
                onClick={onClose}
                className="group flex gap-3 items-start p-3 rounded-xl hover:bg-muted/60 transition-colors"
              >
                {/* Category thumbnail — use first product image */}
                <img
                  src={catProducts[0].image}
                  alt={cat}
                  className="w-12 h-12 rounded-lg object-cover shrink-0 border border-border/40 group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="font-display text-sm font-semibold text-navy group-hover:text-gold-dark transition-colors">
                    {cat}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                    {catProducts.map((p) => p.name).slice(0, 3).join(", ")}
                    {catProducts.length > 3 && ` +${catProducts.length - 3} more`}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Header Component ────────────────────────────────────── */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const linkBase =
    "px-2.5 py-1.5 text-[13px] font-medium text-foreground/70 transition-colors duration-200 hover:text-navy whitespace-nowrap";
  const linkActive =
    "px-2.5 py-1.5 text-[13px] font-semibold text-navy whitespace-nowrap";

  return (
    <>
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <header className="sticky top-0 z-40 glass border-b border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5">
          {/* ── Logo ──────────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-4 shrink-0">
            <img src={logo} alt="Mars International Trading" className="h-20 w-20 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-xl font-bold text-navy">Mars International Trading</div>
            </div>
          </Link>

          {/* ── Desktop Nav — single row ──────────────────── */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((n) =>
              "hasDropdown" in n ? (
                <div
                  key={n.to}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={n.to as any}
                    className={`${linkBase} inline-flex items-center gap-1`}
                    activeProps={{ className: `${linkActive} inline-flex items-center gap-1` }}
                  >
                    {n.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  {dropdownOpen && (
                    <ProductsDropdown onClose={() => setDropdownOpen(false)} />
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to as any}
                  className={linkBase}
                  activeProps={{ className: linkActive }}
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>

          {/* ── CTA Button ────────────────────────────────── */}
          <Link to="/contact" className="hidden btn-gold lg:inline-flex !py-2 !px-5 text-sm shrink-0">
            Get Quote
          </Link>

          {/* ── Mobile Hamburger ──────────────────────────── */}
          <button
            className="lg:hidden text-navy p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Drawer ──────────────────────────────── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white/97 backdrop-blur-lg">
            <div className="flex flex-col p-4">
              {NAV.map((n) =>
                "hasDropdown" in n ? (
                  <div key={n.to}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-navy"
                    >
                      {n.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className="ml-4 mb-2 space-y-1 border-l-2 border-gold/40 pl-3">
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat}
                            to="/products"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm text-muted-foreground hover:text-navy transition-colors"
                          >
                            {cat}
                          </Link>
                        ))}
                        <Link
                          to="/products"
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs font-semibold text-gold-dark"
                        >
                          View All Products →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={n.to}
                    to={n.to as any}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 text-sm font-medium text-navy"
                  >
                    {n.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-gold mt-3 justify-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
