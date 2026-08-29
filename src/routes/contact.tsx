import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Mágbagbé-ilẹ̀" }] }),
});

function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] pt-24">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-[#C5A059] text-xs tracking-[0.35em] uppercase font-medium">Reach Us</span>
            <div className="w-12 h-px bg-gradient-to-r from-[#C5A059] to-transparent my-4" />
            <h1 className="font-serif text-6xl md:text-7xl font-semibold text-[#F5F2ED] max-w-2xl leading-tight">
              Let's <span className="text-gradient-gold">Connect</span>
            </h1>
            <p className="text-[#F5F2ED]/50 text-base mt-6 max-w-lg leading-relaxed">
              Whether you have a story to share, a collaboration to propose, or simply want to connect with the movement — we want to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <AnimatedSection direction="left" className="lg:col-span-1">
            <div className="space-y-6">
              <div className="glass-card p-6 story-card-hover hover:border-[#C5A059]/40">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center mb-4">
                  <Mail className="text-[#C5A059] w-4 h-4" />
                </div>
                <h3 className="text-[#F5F2ED] text-sm font-medium mb-1">Email</h3>
                <p className="text-[#F5F2ED]/40 text-sm">hello@magbagbeile.com</p>
              </div>
              <div className="glass-card p-6 story-card-hover hover:border-[#C5A059]/40">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center mb-4">
                  <MapPin className="text-[#C5A059] w-4 h-4" />
                </div>
                <h3 className="text-[#F5F2ED] text-sm font-medium mb-1">Origin</h3>
                <p className="text-[#F5F2ED]/40 text-sm">West Africa & Global Diaspora</p>
              </div>
              <div className="glass-card p-6 story-card-hover hover:border-[#C5A059]/40">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center mb-4">
                  <MessageSquare className="text-[#C5A059] w-4 h-4" />
                </div>
                <h3 className="text-[#F5F2ED] text-sm font-medium mb-2">For</h3>
                <ul className="space-y-1">
                  {["Story Submissions", "Partnership Enquiries", "Media & Press", "Community Questions"].map((item) => (
                    <li key={item} className="text-[#F5F2ED]/40 text-xs flex items-center gap-2">
                      <span className="text-[#C5A059]">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l-2 border-[#C5A059] pl-5 py-3">
                <p className="font-serif text-[#C5A059] text-lg italic">&ldquo;Àjọ o lè dá bí ilé.&rdquo;</p>
                <p className="text-[#F5F2ED]/30 text-xs mt-1">Community is the foundation.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
            <div className="glass-card p-8 md:p-10 border-[#C5A059]/15">
              <h2 className="font-serif text-2xl text-[#F5F2ED] mb-2">Send A Message</h2>
              <p className="text-[#F5F2ED]/40 text-sm mb-8">We read every message. We respond to every enquiry.</p>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
