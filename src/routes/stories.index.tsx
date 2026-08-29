import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Our Stories — Mágbagbé-ilẹ̀" },
      {
        name: "description",
        content:
          "Documentary films preserving African oral traditions, elder wisdom, and cultural identity.",
      },
      { property: "og:title", content: "Our Stories — Mágbagbé-ilẹ̀" },
      {
        property: "og:description",
        content:
          "Documentary films preserving African oral traditions, elder wisdom, and cultural identity.",
      },
    ],
  }),
  component: StoriesPage,
});

type Post = {
  id: string;
  idx: string;
  region: string;
  img: string;
  title: string;
  tagline: string;
  excerpt: string;
  theme: string;
  duration: string;
  date: string;
};

const POSTS: Post[] = [
  {
    id: "voices-of-the-elders",
    idx: "01",
    region: "West Africa · Nigeria",
    img: "https://images.pexels.com/photos/25856942/pexels-photo-25856942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
    title: "Voices of the Elders: When Wisdom Speaks",
    tagline: "An intimate journey into the oral traditions of West African elders",
    excerpt:
      "In the heart of West Africa, elders carry libraries of living wisdom — proverbs, ceremonies, healing practices, and histories passed down through generations of oral tradition.",
    theme: "Oral Tradition",
    duration: "38 min",
    date: "2025",
  },
  {
    id: "the-land-remembers",
    idx: "02",
    region: "East Africa · Kenya",
    img: "https://images.pexels.com/photos/17546269/pexels-photo-17546269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
    title: "The Land Remembers: Roots of a People",
    tagline: "How identity is preserved in ceremonies, in language, in the soil itself",
    excerpt:
      "The land holds memory. In its rhythms, its seasons, its sacred spaces — a people's entire cosmology is written into everyday life.",
    theme: "Cultural Identity",
    duration: "44 min",
    date: "2025",
  },
];

const THEMES = ["All", "Oral Tradition", "Cultural Identity"];

function StoriesPage() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      const matchTheme = theme === "All" || p.theme === theme;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.theme.toLowerCase().includes(q);
      return matchTheme && matchQuery;
    });
  }, [query, theme]);

  return (
    <div id="page-stories">
      <div style={{ background: "var(--obsidian)", minHeight: "100vh" }}>
        <div className="stories-page-hero">
          <div className="container">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>
              The Journal of Stories
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--ivory)" }}>
              Our Stories
            </h1>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--ivory-dim)", maxWidth: 520, margin: "1rem auto 0", lineHeight: 1.7 }}>
              Documentary chapters — each a window into a world that must never be forgotten.
            </p>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: "7rem" }}>
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              marginBottom: "2rem",
            }}
          >
            <div style={{ position: "relative", flex: "1 1 260px", maxWidth: 420 }}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search stories, regions, themes…"
                aria-label="Search stories"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid var(--border)",
                  color: "var(--ivory)",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.02em",
                  borderRadius: 2,
                  outline: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {THEMES.map((t) => {
                const active = theme === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTheme(t)}
                    style={{
                      background: active ? "var(--gold)" : "transparent",
                      color: active ? "var(--obsidian)" : "var(--ivory-dim)",
                      border: `1px solid ${active ? "var(--gold)" : "var(--border)"}`,
                      padding: "0.45rem 0.85rem",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "'Inter', sans-serif",
                      cursor: "pointer",
                      borderRadius: 2,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Post list */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 0", color: "var(--ivory-dim)", fontSize: "0.9rem" }}>
              No stories match your search.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
              {filtered.map((p) => (
                <article
                  key={p.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 260px) minmax(0, 1fr)",
                    gap: "1.5rem",
                    paddingBottom: "3.5rem",
                    borderBottom: "1px solid var(--border)",
                    alignItems: "start",
                  }}
                  className="story-post-card"
                >
                  <Link
                    to="/stories/$id"
                    params={{ id: p.id }}
                    style={{ display: "block", overflow: "hidden", borderRadius: 2 }}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        aspectRatio: "16 / 10",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </Link>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: "0.6rem",
                      }}
                    >
                      <span>Chapter {p.idx}</span>
                      <span style={{ color: "var(--ivory-dim)" }}>· {p.region}</span>
                      <span style={{ color: "var(--ivory-dim)" }}>· {p.theme}</span>
                    </div>
                    <h2
                      className="serif"
                      style={{
                        fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
                        color: "var(--ivory)",
                        lineHeight: 1.2,
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Link to="/stories/$id" params={{ id: p.id }} style={{ color: "inherit", textDecoration: "none" }}>
                        {p.title}
                      </Link>
                    </h2>
                    <p style={{ color: "var(--ivory-dim)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "0.75rem", fontWeight: 300 }}>
                      {p.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      <Link
                        to="/stories/$id"
                        params={{ id: p.id }}
                        style={{
                          fontSize: "0.72rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          fontFamily: "'Inter', sans-serif",
                          textDecoration: "none",
                          borderBottom: "1px solid var(--gold)",
                          paddingBottom: 2,
                        }}
                      >
                        Read Story →
                      </Link>
                      <span style={{ fontSize: "0.7rem", color: "var(--ivory-dim)", letterSpacing: "0.1em" }}>
                        {p.duration} · {p.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", padding: "7rem 0 0" }}>
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>
              What Comes Next
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "var(--ivory)", marginBottom: "1rem" }}>
              More Stories Are Coming
            </h2>
            <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ivory-dim)", maxWidth: 460, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              We are documenting stories across the African continent. Join the movement to be notified when new chapters are released.
            </p>
            <Link to="/community" className="btn-primary">Join The Movement</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
