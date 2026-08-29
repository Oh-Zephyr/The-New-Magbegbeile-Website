import { createFileRoute, Link } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mágbagbé-ilẹ̀ — Our Story" },
      {
        name: "description",
        content:
          "Mágbagbé-ilẹ̀ was born from an urgent realisation: the stories defining who we are as African people are disappearing — and must be preserved.",
      },
      { property: "og:title", content: "About Mágbagbé-ilẹ̀" },
      {
        property: "og:description",
        content: "The origin, meaning, vision, and legacy of the Mágbagbé-ilẹ̀ cultural preservation movement.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div id="page-about">
      <div style={{ background: "var(--obsidian)", minHeight: "100vh", paddingTop: 0 }}>
        <div className="about-hero">
          <div
            className="about-hero-bg"
            style={{ backgroundImage: `url(${aboutHero.url})`, backgroundPosition: "center 25%" }}
          ></div>

          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>
              Our Story
            </div>
            <h1>About<br />Mágbagbé-ilẹ̀</h1>
            <p>"Do not forget your land. Do not forget your roots."</p>
          </div>
        </div>

        <div className="about-sections">
          <div className="about-section">
            <div className="about-section-num">Chapter One</div>
            <h2>The Beginning</h2>
            <p>
              Mágbagbé-ilẹ̀ was born from a simple but urgent realisation: that
              the stories defining who we are as African people are disappearing
              — not through hostility, but through silence, through distance,
              through the relentless speed of modern life.
            </p>
            <p>
              This platform was created by those who have sat at the feet of
              elders, who have heard stories that no book contains, who have
              felt the profound weight of cultural inheritance — and who
              understand that this weight is not a burden, but a gift that must
              be carried forward.
            </p>
            <div className="about-pull-quote">
              <p>
                "The day we stop telling our stories is the day we begin to
                forget <span>who we truly are.</span>"
              </p>
            </div>
            <p>
              Mágbagbé-ilẹ̀ began not with funding or fanfare, but with a
              camera, a microphone, and the quiet determination to listen — to
              document — to preserve — before it is too late.
            </p>
          </div>

          <div className="about-section">
            <div className="about-section-num">Chapter Two</div>
            <h2>The Meaning Behind The Name</h2>
            <p>
              In Yoruba — one of the great languages of West Africa, spoken by
              over 50 million people — the name carries a profound instruction:
            </p>
            <div className="about-pull-quote">
              <p>
                <span>Mágbagbé-ilẹ̀</span> — "Do not forget your land. Do not
                forget your roots."
              </p>
            </div>
            <p>
              Ilẹ̀ means land, earth, home, foundation. It is the ground beneath
              the feet. It is the place of origin. It is the identity that no
              distance can erase.
            </p>
            <p>
              Mágbagbé means do not forget. It is not a gentle reminder. It is
              a command — an ancestral instruction passed down through
              generations who understood that memory is the foundation of
              identity.
            </p>
            <p>
              Together, these words form a mandate: wherever you go, wherever
              life takes you, do not lose the thread that connects you to where
              you come from. This is not about the past. It is about who you
              are, right now.
            </p>
          </div>

          <div className="about-section">
            <div className="about-section-num">Chapter Three</div>
            <h2>Our Vision</h2>
            <p>
              We envision a world in which no African child grows up
              disconnected from their heritage. A world where the wisdom of
              elders is accessible to the diaspora across every continent. A
              world where African storytelling is recognised as one of
              humanity's greatest cultural achievements.
            </p>
            <p>
              Our vision is not small. We intend to document stories from every
              corner of the African continent — from the Sahel to the Cape,
              from the forests of Central Africa to the coasts of East Africa —
              capturing the full complexity and beauty of African civilisation.
            </p>
            <div className="about-pull-quote">
              <p>
                "We are not preserving <span>the past.</span> We are ensuring
                that the past has a <span>future.</span>"
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="about-section-num">Chapter Four</div>
            <h2>The Legacy: Past, Present, Future</h2>

            <div className="about-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">Past</div>
                <div className="timeline-content">
                  <h4>The Foundation Was Laid</h4>
                  <p>
                    Thousands of years of oral tradition, ceremony, philosophy,
                    and cultural practice — a living heritage that has survived
                    empires, migrations, and transformations.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">Now</div>
                <div className="timeline-content">
                  <h4>We Are Documenting</h4>
                  <p>
                    Two documentaries released. A movement beginning. Elders
                    speaking, cameras rolling, stories being preserved for the
                    first time in recorded form.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">Future</div>
                <div className="timeline-content">
                  <h4>An Enduring Archive</h4>
                  <p>
                    A complete cultural archive spanning the African continent.
                    A generation of young Africans reconnected with their
                    heritage. Stories that will outlast us all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div style={{ background: "var(--earth-green)", padding: "3rem 2rem", textAlign: "center", borderTop: "1px solid rgba(197,160,89,0.2)" }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            Join The Movement
          </div>
          <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ivory)", marginBottom: "1.5rem" }}>
            Be Part Of This Legacy
          </h2>
          <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(245,242,237,0.7)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            The work of preservation requires community. Every person who joins
            carries this mission forward.
          </p>
          <Link to="/community" className="btn-primary">Join The Movement</Link>
        </div>
      </div>
    </div>
  );
}
