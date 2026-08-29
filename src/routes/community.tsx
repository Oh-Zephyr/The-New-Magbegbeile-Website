import { createFileRoute } from "@tanstack/react-router";
import JoinForm from "@/components/JoinForm";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Mágbagbé-ilẹ̀" },
      {
        name: "description",
        content:
          "Àjọ o lè dá bí ilé. Join a growing community of Africans committed to preserving heritage for future generations.",
      },
      { property: "og:title", content: "Community — Mágbagbé-ilẹ̀" },
      {
        property: "og:description",
        content: "Join the Mágbagbé-ilẹ̀ community of storytellers, historians, and cultural custodians.",
      },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <div id="page-community">
      <div style={{ background: "var(--obsidian)", minHeight: "100vh", paddingTop: 0 }}>
        <div className="community-hero">
          <div className="container">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
              Together We Preserve
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--ivory)" }}>
              Community
            </h1>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ivory-dim)", maxWidth: 520, margin: "1.5rem auto 2.5rem", lineHeight: 1.8 }}>
              Àjọ o lè dá bí ilé — Community is valuable, but nothing replaces
              home. Together, we build a community committed to never
              forgetting.
            </p>
            <a href="#community-form" className="btn-primary" style={{ margin: "0 auto" }}>
              Join The Movement
            </a>
          </div>
        </div>

        <div className="container">
          <div className="community-values">
            <div className="community-value-card">
              <div className="cv-icon">🌍</div>
              <h3>Global Roots</h3>
              <p>
                Connecting Africans and people of African heritage across every
                continent — united by shared identity and the determination to
                preserve it.
              </p>
            </div>
            <div className="community-value-card">
              <div className="cv-icon">📜</div>
              <h3>Shared Stories</h3>
              <p>
                Every community member brings a story, a tradition, a memory.
                Together, these fragments form the most complete picture of
                African heritage ever assembled.
              </p>
            </div>
            <div className="community-value-card">
              <div className="cv-icon">🔥</div>
              <h3>Living Legacy</h3>
              <p>
                This is not a passive archive. This is an active movement —
                people who carry the flame of cultural memory and refuse to let
                it go dark.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "2rem" }}>Why Join</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                ["First Access to New Stories", "Be notified the moment a new documentary is released — before it reaches the wider world."],
                ["Exclusive Journal Content", "Deep essays, cultural reflections, and ancestral wisdom delivered directly to your inbox."],
                ["Share Your Heritage", "Contribute your own family stories, traditions, and cultural knowledge to the growing archive."],
                ["Be Part of History", "Join the founding community of one of the most important cultural preservation movements of this generation."],
              ].map(([t, d]) => (
                <div key={t} style={{ padding: "2rem", border: "1px solid var(--border)", background: "#0E0E0E" }}>
                  <div style={{ color: "var(--gold)", fontSize: "1.5rem", marginBottom: "1rem" }}>✦</div>
                  <h4 className="serif" style={{ fontSize: "1.3rem", color: "var(--ivory)", marginBottom: "0.75rem" }}>{t}</h4>
                  <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--ivory-dim)", lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="community-form" className="community-join-full">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
              Join Today
            </div>
            <h2>Become Part Of The Movement</h2>
            <p>
              Join a growing community of Africans committed to preserving
              heritage for future generations.
            </p>
            <JoinForm variant="stacked" />
          </div>
        </div>
      </div>
    </div>
  );
}
