import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

export default function CommunityForm() {
  const [formData, setFormData] = useState({ name: "", email: "", country: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setMessage("Welcome — your heritage journey begins now.");
    setFormData({ name: "", email: "", country: "" });
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-[#C5A059] mx-auto mb-4" />
        <h3 className="text-[#F5F2ED] font-serif text-2xl mb-2">Welcome to the Movement</h3>
        <p className="text-[#F5F2ED]/60 text-sm">{message}</p>
      </motion.div>
    );
  }

  const inputCls =
    "w-full bg-[#0A0A0A]/40 border border-[#C5A059]/20 text-[#F5F2ED] placeholder-[#F5F2ED]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]/60 transition-colors duration-300 backdrop-blur-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Your Name" required value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputCls} />
      <input type="email" placeholder="Email Address" required value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputCls} />
      <input type="text" placeholder="Country (Optional)" value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })} className={inputCls} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B06A] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (<><Loader2 className="w-4 h-4 animate-spin" />Joining...</>) : "Join Community"}
      </button>
    </form>
  );
}
