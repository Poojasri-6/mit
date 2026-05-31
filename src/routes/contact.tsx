import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Contact" title="Let's Build a Lasting Partnership." subtitle="Importers, distributors and B2B partners — reach out for product samples, quotes or collaboration." />

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { i: MapPin, t: "Office", d: "Tamil Nadu, India" },
            { i: Phone, t: "Phone / WhatsApp", d: "+91 9080531831" },
            { i: Mail, t: "Email", d: "mitgroupsindia@gmail.com" },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-4 glass rounded-2xl p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <Icon className="h-6 w-6 text-navy" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold-dark">{t}</div>
                <div className="mt-1 font-display text-xl text-navy">{d}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <h3 className="font-display text-2xl text-navy">Request a Quote</h3>
          <div className="mt-6 grid gap-4">
            <Input name="name" placeholder="Full Name" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="email" type="email" placeholder="Email" />
              <Input name="phone" placeholder="Phone" />
            </div>
            <Input name="company" placeholder="Company / Country" />
            <Input name="product" placeholder="Product of Interest" />
            <textarea required name="message" placeholder="Your requirements..." rows={4}
              className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white" />
            <button type="submit" className="btn-gold justify-center">
              {sent ? "Sent — we'll be in touch!" : <>Send Inquiry <Send className="h-4 w-4" /></>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      required
      {...props}
      className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white"
    />
  );
}
