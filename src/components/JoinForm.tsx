import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const COUNTRIES = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Ethiopia", "Tanzania",
  "Uganda", "Senegal", "Ivory Coast", "Cameroon", "Zimbabwe", "Rwanda",
  "United States", "United Kingdom", "Canada", "Other",
];

type Variant = "full" | "inline" | "stacked";

export default function JoinForm({ variant = "full" }: { variant?: Variant }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Welcome to the movement.", {
      description: "You are now part of the preservation.",
    });
    setName("");
    setEmail("");
    setCountry("");
  };

  if (variant === "inline") {
    return (
      <form className="community-form-inline" onSubmit={submit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    );
  }

  if (variant === "stacked") {
    return (
      <div style={{ maxWidth: 480, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <form onSubmit={submit}>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              className="form-input"
              placeholder="Your Full Name"
              required
              style={{ textAlign: "center" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              className="form-input"
              placeholder="Your Email Address"
              required
              style={{ textAlign: "center" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <select
              className="form-input form-select"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" disabled>Select Your Country</option>
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <button type="submit" className="form-submit">Join The Movement</button>
        </form>
        <p className="form-privacy" style={{ marginTop: "1rem", color: "rgba(245,242,237,0.35)" }}>
          Your story matters. Your roots matter. We will never share your information.
        </p>
      </div>
    );
  }

  return (
    <div className="join-form reveal reveal-delay-2">
      <div className="join-form-title">Join The Movement</div>
      <div className="join-form-subtitle">Be notified when new stories are released</div>

      <form onSubmit={submit}>
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Country</label>
          <select
            className="form-input form-select"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="" disabled>Select your country</option>
            {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <button type="submit" className="form-submit">Join The Movement</button>
      </form>

      <p className="form-privacy">
        Your information is respected. No spam. Only stories worth remembering.
      </p>
    </div>
  );
}
