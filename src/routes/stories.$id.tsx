import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { toast } from "sonner";

type Story = {
  id: string;
  idx: string;
  region: string;
  img: string;
  videoBg: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  meta: [string, string][];
};

const STORIES: Story[] = [
  {
    id: "voices-of-the-elders",
    idx: "01",
    region: "West Africa · Nigeria",
    img: "https://images.pexels.com/photos/25856942/pexels-photo-25856942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    videoBg: "https://images.pexels.com/photos/25856942/pexels-photo-25856942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
    title: "Voices of the Elders: When Wisdom Speaks",
    tagline: "An intimate journey into the oral traditions of West African elders",
    paragraphs: [
      "In the heart of West Africa, elders carry within them libraries of living wisdom — proverbs, ceremonies, healing practices, and histories passed down through generations of oral tradition.",
      "Through intimate conversations and cultural immersion, Voices of the Elders captures what textbooks cannot — the living, breathing soul of a people who have maintained their identity across centuries of change.",
      "The lessons embedded in this documentary are not historical artifacts. They are living instructions for how to be human with dignity, wisdom, and deep cultural roots.",
    ],
    meta: [
      ["Duration", "38 minutes"],
      ["Region", "West Africa · Nigeria"],
      ["Theme", "Oral Tradition"],
      ["Cultural Focus", "Elder Wisdom"],
      ["Language", "Yoruba · English"],
    ],
  },
  {
    id: "the-land-remembers",
    idx: "02",
    region: "East Africa · Kenya",
    img: "https://images.pexels.com/photos/17546269/pexels-photo-17546269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    videoBg: "https://images.pexels.com/photos/23831844/pexels-photo-23831844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
    title: "The Land Remembers: Roots of a People",
    tagline: "How identity is preserved in ceremonies, in language, in the soil itself",
    paragraphs: [
      "The land holds memory. In its rhythms, its seasons, its sacred spaces — a people's entire cosmology is written.",
      "Through ceremony, harvest, naming rituals, and conversations between grandparents and grandchildren, this documentary reveals how cultural identity is not merely remembered — it is actively lived.",
      "This is a story about what it means to belong — not just to a family or a nation, but to a living lineage of people who understood their relationship to the earth, to each other, and to those who came before.",
    ],
    meta: [
      ["Duration", "44 minutes"],
      ["Region", "East Africa · Kenya"],
      ["Theme", "Cultural Identity"],
      ["Cultural Focus", "Land & Heritage"],
      ["Language", "Swahili · English"],
    ],
  },
];

export const Route = createFileRoute("/stories/$id")({
  head: ({ loaderData }: { loaderData?: Story }) => {
    if (!loaderData) return { meta: [{ title: "Story — Mágbagbé-ilẹ̀" }, { name: "robots", content: "noindex" }] };
    const s = loaderData;
    return {
      meta: [
        { title: `${s.title} — Mágbagbé-ilẹ̀` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.img },
      ],
    };
  },
  loader: ({ params }): Story => {
    const s = STORIES.find((x) => x.id === params.id);
    if (!s) throw notFound();
    return s;
  },
  component: StoryDetail,
  notFoundComponent: StoryNotFound,
});

function StoryDetail() {
  const s = Route.useLoaderData() as Story;
  return (
    <div id="page-stories">
      <div style={{ background: "var(--obsidian)", minHeight: "100vh", paddingTop: 0 }}>
        <div className="container" style={{ paddingTop: "3rem" }}>
          <div className="story-feature">
            <div className="story-card-meta" style={{ position: "relative", marginBottom: "1.5rem", top: "auto", left: "auto" }}>
              <span className="story-tag story-tag-category">Documentary · {s.idx}</span>
              <span className="story-tag story-tag-region">{s.region}</span>
            </div>

            <div className="story-feature-hero">
              <img src={s.img} alt={s.title} />
              <div className="story-feature-overlay"></div>
              <div className="story-feature-info">
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
              </div>
            </div>

            <div
              className="video-placeholder"
              onClick={() => toast.info("Video player coming soon.")}
            >
              <div className="video-placeholder-bg" style={{ backgroundImage: `url('${s.videoBg}')` }}></div>
              <div className="video-play-btn"></div>
              <div className="video-placeholder-text">Watch Documentary</div>
            </div>

            <div className="story-feature-body">
              <div>
                <div className="section-label" style={{ marginBottom: "1rem" }}>About This Story</div>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="story-feature-desc" style={i > 0 ? { marginTop: "1rem" } : undefined}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="story-meta-block">
                {s.meta.map(([l, v]) => (
                  <div className="story-meta-item" key={l}>
                    <label>{l}</label>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: "3rem 0" }}>
            <Link to="/stories" className="btn-secondary" style={{ display: "inline-flex" }}>
              ← All Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryNotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1rem" }}>
      <div style={{ textAlign: "center" }}>
        <h1 className="serif" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--ivory)", marginBottom: "1rem" }}>
          Story Not Found
        </h1>
        <Link to="/stories" className="btn-primary">All Stories</Link>
      </div>
    </div>
  );
}
