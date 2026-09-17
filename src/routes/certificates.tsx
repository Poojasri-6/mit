import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Stamp,
  FileCheck2,
  Download,
  ExternalLink,
  ZoomIn,
  X,
  CheckCircle2,
  ArrowRight,
  Building2,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import ieCodeCert from "@/assets/ie-code-certificate.jpg";

export const Route = createFileRoute("/certificates")({
  component: Certificates,
});

const CERTS = [
  {
    icon: Award,
    t: "IEC Certified",
    org: "DGFT, Govt. of India",
    d: "Official Importer-Exporter Code issued by the Directorate General of Foreign Trade, Department of Commerce.",
    verified: true,
    hasDoc: true,
  },
  {
    icon: ShieldCheck,
    t: "FSSAI Certified",
    org: "Food Safety Authority",
    d: "Strict compliance with Food Safety and Standards Authority of India standards for food and agricultural products.",
    verified: true,
    hasDoc: false,
  },
  {
    icon: BadgeCheck,
    t: "ISO 9001:2015",
    org: "Quality Management",
    d: "Internationally recognized quality management system for hygienic sourcing, grading, and packaging.",
    verified: true,
    hasDoc: false,
  },
  {
    icon: Stamp,
    t: "APEDA Registered",
    org: "Ministry of Commerce",
    d: "Registered with Agricultural & Processed Food Products Export Development Authority for scheduled agro exports.",
    verified: true,
    hasDoc: false,
  },
  {
    icon: ShieldCheck,
    t: "HACCP Compliant",
    org: "Food Safety System",
    d: "Systematic preventive approach to food safety from biological, chemical, and physical hazards in supply chains.",
    verified: true,
    hasDoc: false,
  },
  {
    icon: BadgeCheck,
    t: "Phytosanitary Certification",
    org: "Plant Quarantine & Health",
    d: "Official plant health clearance ensuring export consignments are free from regulated pests and diseases.",
    verified: true,
    hasDoc: false,
  },
];

const COMPLIANCE_PILLARS = [
  {
    title: "100% Export Documentation",
    desc: "Every shipment includes certified Invoices, Packing Lists, Certificate of Origin (COO), and Bill of Lading.",
  },
  {
    title: "Lab Testing & COA",
    desc: "Comprehensive Certificate of Analysis (COA) for moisture, purity, microbial limits, and curcumin/active content.",
  },
  {
    title: "Customs & Port Clearance",
    desc: "Full DGFT & Indian Customs clearance handling for smooth port-to-port and CIF/FOB shipments globally.",
  },
  {
    title: "Tamper-Proof Packaging",
    desc: "Export-grade multi-layer food-safe packaging with nitrogen flushing and moisture barriers where required.",
  },
];

function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <div className="relative bg-navy py-20 px-5 text-center text-cream overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--gold) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light backdrop-blur-sm mb-4">
              <FileCheck2 className="h-3.5 w-3.5" /> Verified Compliance
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
              Quality You Can Trust. <br />
              <span className="text-gradient-gold">Verified & Certified.</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
              Every shipment from Mars International Trading is backed by accredited government licenses,
              international standards, and stringent quality assurance.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* ── Featured IEC Certificate Showcase ──────────────── */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
              Primary Export License
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-2">
              DGFT Importer-Exporter Code (IEC)
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2 text-sm">
              Issued by the Directorate General of Foreign Trade, Ministry of Commerce and Industry,
              Government of India.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-white via-cream/20 to-gold-light/10 p-6 md:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Watermark accent */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
              <Award className="h-96 w-96 text-navy" />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 items-center">
              {/* Document Preview Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => setModalOpen(true)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,27,58,0.25)] w-full max-w-sm bg-white"
                >
                  <img
                    src={ieCodeCert}
                    alt="DGFT Importer Exporter Code Certificate - Mars International Trading"
                    className="w-full h-auto object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                    <div className="rounded-full bg-white/20 p-3 backdrop-blur-md">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Click to Enlarge</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-navy/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                    <span className="font-medium">IEC Certificate Page 1</span>
                    <span className="text-gold-light flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy bg-white border border-border px-4 py-2 rounded-xl shadow-sm hover:border-gold hover:text-gold-dark transition"
                  >
                    <ZoomIn className="h-4 w-4" /> Full Preview
                  </button>
                  <a
                    href="/01.IE-CODE-CERTIFICATE.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy bg-white border border-border px-4 py-2 rounded-xl shadow-sm hover:border-gold hover:text-gold-dark transition"
                  >
                    <ExternalLink className="h-4 w-4" /> Open Original
                  </a>
                  <a
                    href="/01.IE-CODE-CERTIFICATE.jpg"
                    download="DGFT_IEC_Certificate_MIT.jpg"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy bg-gold-light/40 border border-gold/40 px-4 py-2 rounded-xl shadow-sm hover:bg-gold-light hover:text-navy transition"
                  >
                    <Download className="h-4 w-4" /> Download
                  </a>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-4 w-4" /> Active & Verified Government Registration
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-navy">
                  Government of India — Ministry of Commerce & Industry
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The Importer-Exporter Code (IEC) is a key business identification number mandatory for
                  exports from India. Mars International Trading is officially registered with DGFT to
                  export agricultural, herbal, food commodities, and industrial products worldwide.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-white/80 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-gold-dark text-xs font-bold uppercase tracking-wider">
                      <Building2 className="h-4 w-4" /> Issuing Authority
                    </div>
                    <div className="mt-1 font-semibold text-navy text-sm">
                      Directorate General of Foreign Trade (DGFT)
                    </div>
                    <div className="text-xs text-muted-foreground">Government of India</div>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-white/80 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-gold-dark text-xs font-bold uppercase tracking-wider">
                      <Globe2 className="h-4 w-4" /> Authorized Scope
                    </div>
                    <div className="mt-1 font-semibold text-navy text-sm">
                      Global B2B Merchandise Exports
                    </div>
                    <div className="text-xs text-muted-foreground">Agricultural & Herbal Commodities</div>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-muted-foreground">
                    Want to verify our compliance dossier or need certificate copies for custom clearance?
                  </div>
                  <Link to="/contact" className="btn-gold !py-2.5 !px-6 text-xs shrink-0">
                    Request Compliance Dossier <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── All Accreditations Grid ─────────────────────────── */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Accreditations"
            title="Comprehensive Export Standards"
            subtitle="We adhere to rigorous quality benchmarks across every stage of sourcing, processing, and logistics."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map(({ icon: Icon, t, org, d, verified, hasDoc }) => (
              <div
                key={t}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-gold/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <Icon className="h-7 w-7 text-navy" />
                    </div>
                    {verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="h-3 w-3" /> Active
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl text-navy">{t}</h3>
                  <div className="text-xs font-semibold text-gold-dark uppercase tracking-wider mt-0.5">
                    {org}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>

                {hasDoc && (
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold-dark transition-colors"
                    >
                      <ZoomIn className="h-3.5 w-3.5" /> View Attached Certificate →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Global Export Compliance Guarantee ─────────────── */}
        <section className="rounded-3xl bg-navy text-cream p-8 md:p-14 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }}
          />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
              Quality Commitment
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2">
              Seamless Customs & Import Clearance Guaranteed
            </h2>
            <p className="mt-4 text-cream/80 text-sm md:text-base leading-relaxed">
              International trade requires stringent documentation. With Mars International Trading,
              every shipment is prepared to meet your destination country's exact phytosanitary,
              customs, and health inspection mandates.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPLIANCE_PILLARS.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-cream/15 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="h-8 w-8 rounded-full bg-gold-light/20 flex items-center justify-center text-gold-light font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-display text-lg text-white font-semibold">{p.title}</h4>
                <p className="mt-2 text-xs text-cream/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="font-display text-xl text-white">Need custom documentation or batch samples?</div>
              <div className="text-xs text-cream/70 mt-1">
                Our export team will provide complete specifications, lab reports, and quote packages.
              </div>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">
              Get in Touch with Export Desk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      {/* ── Fullscreen Lightbox Modal for Certificate ────────── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/60">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <h4 className="font-display text-base font-semibold text-navy">
                      DGFT Importer-Exporter Code Certificate
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Directorate General of Foreign Trade • Government of India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/01.IE-CODE-CERTIFICATE.jpg"
                    download="DGFT_IEC_Certificate_MIT.jpg"
                    className="p-2 rounded-full hover:bg-muted text-navy transition"
                    title="Download certificate"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                  <a
                    href="/01.IE-CODE-CERTIFICATE.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted text-navy transition"
                    title="Open in new tab"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="p-2 rounded-full hover:bg-muted text-navy transition"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="overflow-auto p-4 flex items-center justify-center bg-muted/20">
                <img
                  src={ieCodeCert}
                  alt="Government of India DGFT IEC Certificate"
                  className="max-h-[75vh] w-auto rounded-lg shadow-sm object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-border bg-white text-xs text-muted-foreground flex items-center justify-between">
                <span>Official government verified document</span>
                <span className="text-gold-dark font-medium">Mars International Trading</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
