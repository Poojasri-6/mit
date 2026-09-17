import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/career")({
  component: Career,
});

const ROLES = [
  { t: "Export Operations Executive", l: "Tamil Nadu, India", d: "Coordinate documentation, logistics, and shipment lifecycles for international orders." },
  { t: "Quality Assurance Officer", l: "Tamil Nadu, India", d: "Oversee inspection, sampling and compliance for spices and herbal products." },
  { t: "International Sales Manager", l: "Remote / Field", d: "Develop and grow B2B partnerships across target export markets." },
  { t: "Supply Chain Coordinator", l: "Tamil Nadu, India", d: "Manage sourcing relationships, inventory and on-time delivery commitments." },
];

function Career() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Career" title="Build a Career with Global Impact." subtitle="Join a team that bridges Indian heritage with international markets — built on integrity, craft and ambition." />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {ROLES.map(r => (
          <div key={r.t} className="glass rounded-2xl p-7 transition hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <Briefcase className="h-6 w-6 text-navy" />
              </div>
              <div>
                <h3 className="font-display text-xl text-navy">{r.t}</h3>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-dark">{r.l}</div>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-secondary p-10 text-center">
        <h3 className="font-display text-3xl text-navy">Don't see your role?</h3>
        <p className="mt-2 text-muted-foreground">We're always open to exceptional talent. Send us your CV or contact us.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="mailto:mitgroupsindia@gmail.com" className="btn-gold inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> mitgroupsindia@gmail.com
          </a>
          <Link to="/contact" className="btn-outline-gold inline-flex items-center gap-2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
