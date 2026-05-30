import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/mit-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="MIT" className="h-12 w-12 rounded-full bg-white p-1" />
            <div>
              <div className="font-display text-xl">Mars International Trading</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            Premium exporter of Indian spices, herbal products, and natural commodities to the world.
          </p>
        </div>
        <div>
          <h4 className="text-gold-light text-sm uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/about" className="hover:text-gold-light">About Us</Link></li>
            <li><Link to="/products" className="hover:text-gold-light">Products</Link></li>
            <li><Link to="/services" className="hover:text-gold-light">Services</Link></li>
            <li><Link to="/exports" className="hover:text-gold-light">Global Exports</Link></li>
            <li><Link to="/certificates" className="hover:text-gold-light">Certificates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold-light text-sm uppercase tracking-widest">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/career" className="hover:text-gold-light">Career</Link></li>
            <li><Link to="/brand" className="hover:text-gold-light">Our Brand</Link></li>
            <li><Link to="/clients" className="hover:text-gold-light">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold-light text-sm uppercase tracking-widest">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold-light" /> Tamil Nadu, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold-light" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold-light" /> info@marsinternational.com</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-cream/20 p-2 transition hover:border-gold-light hover:text-gold-light">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Mars International Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
