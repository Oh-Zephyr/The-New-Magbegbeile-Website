import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import JoinForm from "@/components/JoinForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mágbagbé-ilẹ̀ — Do Not Forget Your Land" },
      {
        name: "description",
        content:
          "Mágbagbé-ilẹ̀ preserves African identity through storytelling, ancestral wisdom, and cultural memory — so that what was given to us may be passed forward.",
      },
      { property: "og:title", content: "Mágbagbé-ilẹ̀ — Do Not Forget Your Land" },
      {
        property: "og:description",
        content: "A cultural preservation movement documenting African heritage, oral traditions, and ancestral wisdom.",
      },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "https://images.pexels.com/photos/23831844/pexels-photo-23831844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
        fetchpriority: "high",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  // Floating hero particles (ported from reference)
  useEffect(() => {
    const container = document.getElementById("particles");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 8 + 6}s;
        animation-delay: ${Math.random() * 6}s;
      `;
      container.appendChild(p);
    }
  }, []);

  // Parallax hero
  useEffect(() => {
    const heroBg = document.querySelector<HTMLElement>(".hero-bg");
    const hero = document.getElementById("hero");
    if (!heroBg || !hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < hero.offsetHeight) {
        heroBg.style.transform = `scale(1) translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* SECTION 1: CINEMATIC HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-overlay-bottom"></div>
        <div className="hero-particles" id="particles"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">Cultural Preservation Movement</div>
          <div className="hero-logo-mark">
            Mágbagbé-<span className="hero-logo-accent">ilẹ̀</span>
          </div>
          <div className="hero-tagline">
            Do Not Forget Your Land · Do Not Forget Your Roots
          </div>
          <div className="hero-divider"></div>
          <h1 className="hero-headline">
            Preserving African Heritage,<br />
            Stories &amp; Traditions<br />
            For Future Generations
          </h1>
          <p className="hero-subtext">
            Mágbagbé-ilẹ̀ preserves African identity through storytelling,
            ancestral wisdom, and cultural memory — so that what was given to
            us may be passed forward.
          </p>
          <div className="hero-buttons">
            <Link to="/stories" className="btn-primary">
              <span className="play-icon"></span>
              Watch Stories
            </Link>
            <Link to="/community" className="btn-secondary">
              Join The Movement
            </Link>
          </div>
        </div>

      </section>

      {/* SECTION 2: REMEMBER YOUR ROOTS */}
      <section id="roots">
        <div className="roots-bg-text">Mágbagbé</div>
        <div className="container">
          <div className="roots-grid">
            <div className="roots-image-stack reveal">
              <img
                className="roots-img-main"
                src="https://images.pexels.com/photos/25856942/pexels-photo-25856942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900"
                alt="African cultural ceremony"
              />
              <img
                className="roots-img-secondary"
                src="https://images.pexels.com/photos/11696030/pexels-photo-11696030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=500"
                alt="African elder wisdom"
              />
              <div className="roots-img-accent"></div>
              <div className="roots-badge">
                <div className="roots-badge-number">2,000+</div>
                <div className="roots-badge-text">
                  Years of Oral Tradition Being Preserved
                </div>
              </div>
            </div>

            <div className="roots-text">
              <div className="section-label reveal">Our Foundation</div>
              <h2 className="reveal reveal-delay-1">Remember<br />Your Roots</h2>

              <div className="roots-proverb reveal reveal-delay-2">
                Àjọ o lè dá bí ilé
                <div className="roots-proverb-meaning">
                  Community is valuable, but nothing replaces home.
                </div>
              </div>

              <p className="roots-body reveal reveal-delay-3">
                Every civilization is built upon the stories of those who came
                before. African heritage — rich, ancient, and profound — holds
                wisdom that has guided communities for millennia. Yet in a
                rapidly changing world, these stories risk disappearing.
              </p>

              <p className="roots-body reveal reveal-delay-3">
                Mágbagbé-ilẹ̀ is a sacred act of remembrance. We exist to ensure
                that identity, ancestry, culture, and belonging are never lost
                — that future generations inherit the full richness of who
                they are.
              </p>

              <div className="roots-pillars reveal reveal-delay-4">
                {[
                  ["Foundation", "Ancestry"],
                  ["Core", "Identity"],
                  ["Heart", "Culture"],
                  ["Soul", "Belonging"],
                ].map(([label, title]) => (
                  <div className="pillar" key={title}>
                    <div className="pillar-label">{label}</div>
                    <div className="pillar-title">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WE EXIST */}
      <section id="why">
        <div className="container">
          <div className="why-header">
            <div className="section-label reveal" style={{ justifyContent: "center" }}>
              Our Mission
            </div>
            <h2 className="reveal reveal-delay-1">Why We Exist</h2>
            <p className="reveal reveal-delay-2">
              Many traditions disappear without documentation. Many stories
              remain unheard. Many young Africans search for the connection
              their ancestors knew. We exist to change that.
            </p>
          </div>

          <div className="why-cards reveal">
            {[
              ["01", "Preserve", "Protect ancestral knowledge before it is lost forever. Every tradition documented is a victory against forgetting."],
              ["02", "Document", "Create lasting records of oral traditions, cultural ceremonies, and the wisdom of elders for generations yet unborn."],
              ["03", "Remember", "Reconnect those who have drifted from their roots with the profound heritage that defines who they are."],
              ["04", "Share", "Pass ancestral wisdom forward — so that every child born may inherit the full glory of their cultural legacy."],
            ].map(([n, t, d]) => (
              <div className="why-card" key={n}>
                <div className="why-card-number">{n}</div>
                <div className="why-card-title">{t}</div>
                <p className="why-card-text">{d}</p>
              </div>
            ))}
          </div>

          <div className="why-statement reveal">
            <p>
              "The stories of <span>our elders</span> are the libraries of our
              people. When they close their eyes for the last time,{" "}
              <span>a world closes with them</span> — unless we listen, unless
              we remember."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR FIRST STORIES */}
      <section id="stories-section">
        <div className="container">
          <div className="stories-header">
            <div className="stories-header-left">
              <div className="section-label reveal">First Chapters Of A Legacy</div>
              <h2 className="reveal reveal-delay-1">Our First Stories</h2>
            </div>
            <div className="stories-header-right reveal reveal-delay-2">
              <p>
                Two documentary stories. The beginning of something that will
                outlast us all. Each frame, a preservation. Each word, a memory
                saved.
              </p>
              <Link
                to="/stories"
                className="btn-secondary"
                style={{ display: "inline-flex", marginTop: "1.25rem", fontSize: "0.68rem" }}
              >
                View All Stories
              </Link>
            </div>
          </div>

          <div className="story-cards">
            <StoryCard
              img="https://images.pexels.com/photos/25856942/pexels-photo-25856942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
              alt="Voices of the Elders"
              category="Documentary"
              region="West Africa"
              significance="Oral Tradition · Ancestral Wisdom"
              title="Voices of the Elders: When Wisdom Speaks"
              desc="An intimate documentary journey into the homes and hearts of West African elders — capturing the oral traditions, proverbs, and sacred knowledge that has guided communities across centuries."
              duration="38 min"
            />
            <StoryCard
              className="reveal-delay-2"
              img="https://images.pexels.com/photos/17546269/pexels-photo-17546269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
              alt="The Land Remembers"
              category="Documentary"
              region="East Africa"
              significance="Cultural Identity · Heritage"
              title="The Land Remembers: Roots of a People"
              desc="Through the eyes of a community straddling ancient heritage and modern life, this documentary explores how identity is preserved — in ceremonies, in language, in the very soil of the land."
              duration="44 min"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: CULTURAL VALUES */}
      <section id="values">
        <div className="container">
          <div className="values-header">
            <div className="section-label reveal" style={{ justifyContent: "center" }}>
              Our Commitment
            </div>
            <h2 className="reveal reveal-delay-1">Three Pillars of Preservation</h2>
          </div>

          <div className="values-cards">
            <ValueCard
              letter="P" number="01" title="Preserve"
              desc="We are guardians of knowledge. Every story documented, every tradition recorded, every elder's voice captured — is a victory over the silence of forgetting. Protection of ancestral wisdom is sacred work."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              }
            />
            <ValueCard
              letter="R" number="02" title="Remember" delay="reveal-delay-2"
              desc="Identity is not lost — it is waiting to be rediscovered. We create pathways for Africans everywhere to reconnect with their heritage, their language, their ceremonies, and the profound wisdom of their lineage."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              }
            />
            <ValueCard
              letter="S" number="03" title="Share" delay="reveal-delay-3"
              desc="What is not shared is lost twice. We pass ancestral wisdom forward — through storytelling, through documentary, through community — so that every generation may stand on the shoulders of those who came before."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              }
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: JOIN THE MOVEMENT */}
      <section id="join">
        <div className="join-bg-pattern"></div>
        <div className="join-map"></div>
        <div className="container">
          <div className="join-grid">
            <div className="join-text reveal">
              <div className="section-label" style={{ color: "rgba(197,160,89,0.8)" }}>
                A Growing Movement
              </div>
              <h2>Become Part Of The Preservation Of African Heritage</h2>
              <p>
                Join thousands of Africans, historians, storytellers, and
                cultural custodians united by one mission — to ensure that our
                stories, our traditions, and our identity are never forgotten.
              </p>
              <div className="join-stats">
                <div>
                  <div className="join-stat-number">2</div>
                  <div className="join-stat-label">Documentaries Released</div>
                </div>
                <div>
                  <div className="join-stat-number">Growing</div>
                  <div className="join-stat-label">Community Members</div>
                </div>
                <div>
                  <div className="join-stat-number">∞</div>
                  <div className="join-stat-label">Stories Yet To Tell</div>
                </div>
              </div>
            </div>

            <JoinForm />
          </div>
        </div>
      </section>
    </>
  );
}

function StoryCard({
  img, alt, category, region, significance, title, desc, duration, className,
}: {
  img: string; alt: string; category: string; region: string;
  significance: string; title: string; desc: string; duration: string;
  className?: string;
}) {
  return (
    <div className={`story-card reveal${className ? " " + className : ""}`}>
      <div className="story-card-image">
        <img src={img} alt={alt} />
        <div className="story-card-image-overlay"></div>
        <div className="story-card-glow"></div>
        <div className="story-card-meta">
          <span className="story-tag story-tag-category">{category}</span>
          <span className="story-tag story-tag-region">{region}</span>
        </div>
        <div className="story-card-play"></div>
      </div>
      <div className="story-card-body">
        <div className="story-card-significance">{significance}</div>
        <h3 className="story-card-title">{title}</h3>
        <p className="story-card-desc">{desc}</p>
        <div className="story-card-footer">
          <Link to="/stories" className="story-card-watch">
            Watch Story
            <span className="story-card-watch-arrow"></span>
          </Link>
          <span className="story-card-duration">{duration}</span>
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  letter, number, title, desc, icon, delay,
}: {
  letter: string; number: string; title: string; desc: string;
  icon: React.ReactNode; delay?: string;
}) {
  return (
    <div className={`value-card reveal${delay ? " " + delay : ""}`}>
      <div className="value-card-bg-letter">{letter}</div>
      <div className="value-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          {icon}
        </svg>
      </div>
      <div className="value-number">{number}</div>
      <h3 className="value-title">{title}</h3>
      <p className="value-desc">{desc}</p>
    </div>
  );
}
