import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setResponseMessage("Your message has reached us — we will respond soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#C5A059] mx-auto mb-4" />
        <h3 className="text-[#F5F2ED] font-serif text-2xl mb-2">Message Received</h3>
        <p className="text-[#F5F2ED]/60 text-sm">{responseMessage}</p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full bg-[#0A0A0A]/60 border border-[#C5A059]/15 text-[#F5F2ED] placeholder-[#F5F2ED]/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]/50 transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[#F5F2ED]/40 text-xs tracking-wide uppercase block mb-2">Your Name *</label>
          <input type="text" placeholder="Full name" required value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
        </div>
        <div>
          <label className="text-[#F5F2ED]/40 text-xs tracking-wide uppercase block mb-2">Email *</label>
          <input type="email" placeholder="your@email.com" required value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
        </div>
      </div>
      <div>
        <label className="text-[#F5F2ED]/40 text-xs tracking-wide uppercase block mb-2">Subject</label>
        <input type="text" placeholder="What is this about?" value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass} />
      </div>
      <div>
        <label className="text-[#F5F2ED]/40 text-xs tracking-wide uppercase block mb-2">Message *</label>
        <textarea placeholder="Your message..." required rows={6} value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" disabled={status === "loading"}
        className="w-full py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B06A] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2">
        {status === "loading" ? (<><Loader2 className="w-4 h-4 animate-spin" />Sending...</>) : "Send Message"}
      </button>
    </form>
  );
}
