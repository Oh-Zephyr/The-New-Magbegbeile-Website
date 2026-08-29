import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "The Journal — Mágbagbé-ilẹ̀" },
      {
        name: "description",
        content:
          "Essays, reflections, and meditations on African heritage, culture, identity, and the power of storytelling.",
      },
      { property: "og:title", content: "The Journal — Mágbagbé-ilẹ̀" },
      {
        property: "og:description",
        content: "Essays and reflections on African heritage, identity, and cultural preservation.",
      },
    ],
  }),
  component: JournalPage,
});

const MINIS = [
  { slug: "digital-age", cat: "Identity", title: "The Importance of Preserving Culture in the Digital Age", meta: "Reflection · 8 min read", img: "https://images.pexels.com/photos/31633682/pexels-photo-31633682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
  { slug: "storytelling", cat: "Storytelling", title: "The Power of Storytelling as Cultural Preservation", meta: "Essay · 6 min read", img: "https://images.pexels.com/photos/36816703/pexels-photo-36816703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
  { slug: "roots", cat: "Roots", title: "Understanding Our Roots: A Path to Identity", meta: "Essay · 10 min read", img: "https://images.pexels.com/photos/25856915/pexels-photo-25856915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
  { slug: "diaspora", cat: "Heritage", title: "Identity, Heritage and the African Diaspora Experience", meta: "Essay · 12 min read", img: "https://images.pexels.com/photos/6673837/pexels-photo-6673837.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
];

const MORE = [
  { slug: "oral-traditions", cat: "Oral Tradition", title: "Oral Traditions: The Living Libraries of Africa", excerpt: "Before the written word, Africa had the spoken word — and it was enough to carry civilisations across centuries.", img: "https://images.pexels.com/photos/18807637/pexels-photo-18807637.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500" },
  { slug: "timbuktu", cat: "History", title: "The Timbuktu Manuscripts: Africa's Written Legacy", excerpt: "Millions of ancient manuscripts hold proof that Africa was writing, studying, and philosophising long before the modern world acknowledged it.", img: "https://images.pexels.com/photos/29342494/pexels-photo-29342494.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500" },
  { slug: "ubuntu", cat: "Community", title: "The Village as a Cultural Institution: Ubuntu in Practice", excerpt: "Ubuntu — \"I am because we are\" — is not a philosophy. It is a way of organising human life that the world desperately needs today.", img: "https://images.pexels.com/photos/30619282/pexels-photo-30619282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500" },
];

function JournalPage() {
  return (
    <div id="page-journal">
      <div style={{ background: "var(--obsidian)", minHeight: "100vh", paddingTop: 0 }}>
        <div className="journal-hero">
          <div className="container">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
              Writings & Reflections
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--ivory)" }}>
              The Journal
            </h1>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ivory-dim)", maxWidth: 500, margin: "1.5rem auto 0", lineHeight: 1.8 }}>
              Essays, reflections, and meditations on African heritage,
              culture, identity, and the power of storytelling.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="journal-grid">
            <Link
              to="/journal/$slug"
              params={{ slug: "why-african-traditions-matter" }}
              className="journal-featured"
            >
              <div className="journal-featured-img">
                <img
                  src="https://images.pexels.com/photos/29883317/pexels-photo-29883317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900"
                  alt="Why African traditions matter"
                />
              </div>
              <div className="journal-featured-body">
                <div className="journal-cat">Heritage · Featured Essay</div>
                <h2 className="journal-title">
                  Why African Traditions Matter More Than Ever in a Changing World
                </h2>
                <p className="journal-excerpt">
                  In an era of globalisation, digital distraction, and cultural
                  homogenisation, the preservation of African traditions is not
                  merely an act of nostalgia — it is an act of survival. The
                  stories our grandmothers told, the ceremonies that mark our
                  transitions, the proverbs that encode our philosophy of life —
                  these are not relics. They are living technologies of
                  belonging.
                </p>
                <div className="journal-read-more">
                  Read Essay <span className="journal-read-more-line"></span>
                </div>
              </div>
            </Link>

            <div className="journal-sidebar">
              {MINIS.map((m) => (
                <Link
                  key={m.slug}
                  to="/journal/$slug"
                  params={{ slug: m.slug }}
                  className="journal-mini"
                >
                  <div className="journal-mini-img">
                    <img src={m.img} alt={m.title} />
                  </div>
                  <div className="journal-mini-body">
                    <div className="journal-cat" style={{ fontSize: "0.55rem", marginBottom: "0.4rem" }}>
                      {m.cat}
                    </div>
                    <div className="journal-mini-title">{m.title}</div>
                    <div className="journal-mini-date">{m.meta}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="section-label" style={{ marginBottom: "2.5rem" }}>
            More From The Journal
          </div>
          <div className="journal-list">
            {MORE.map((a) => (
              <Link
                key={a.slug}
                to="/journal/$slug"
                params={{ slug: a.slug }}
                className="journal-card"
              >
                <div className="journal-card-img">
                  <img src={a.img} alt={a.title} />
                </div>
                <div className="journal-card-body">
                  <div className="journal-cat">{a.cat}</div>
                  <div className="journal-card-title">{a.title}</div>
                  <p className="journal-card-excerpt">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
