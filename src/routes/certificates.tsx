import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck, ShieldCheck, Stamp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/certificates")({
  component: Certificates,
});

const CERTS = [
  { icon: ShieldCheck, t: "FSSAI Certified", d: "Food Safety and Standards Authority of India compliance." },
  { icon: BadgeCheck, t: "ISO 9001:2015", d: "Quality management system certification." },
  { icon: Stamp, t: "APEDA Registered", d: "Agricultural & Processed Food Products Export Development Authority." },
  { icon: Award, t: "IEC Certified", d: "Importer Exporter Code issued by DGFT, Government of India." },
  { icon: ShieldCheck, t: "HACCP Compliant", d: "Hazard analysis & critical control points food safety system." },
  { icon: BadgeCheck, t: "Phytosanitary", d: "Plant health certification for international shipments." },
];

function Certificates() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Certifications" title="Quality You Can Trust, Verified." subtitle="Every shipment from Mars International Trading is backed by internationally recognised certifications." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-7 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-navy)]">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
              <Icon className="h-8 w-8 text-navy" />
            </div>
            <h3 className="mt-5 font-display text-xl text-navy">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
