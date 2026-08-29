import { createFileRoute, Link, notFound } from "@tanstack/react-router";

type Article = {
  slug: string;
  cat: string;
  title: string;
  img: string;
  body: string[];
};

const ARTICLES: Article[] = [
  {
    slug: "why-african-traditions-matter",
    cat: "Heritage · Featured Essay",
    title: "Why African Traditions Matter More Than Ever in a Changing World",
    img: "https://images.pexels.com/photos/29883317/pexels-photo-29883317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "In an era of globalisation, digital distraction, and cultural homogenisation, the preservation of African traditions is not merely an act of nostalgia — it is an act of survival.",
      "The stories our grandmothers told, the ceremonies that mark our transitions, the proverbs that encode our philosophy of life — these are not relics. They are living technologies of belonging.",
      "To forget them is to become unmoored — a people without an anchor in a world of endless drift. To remember them is to reclaim the ground beneath our feet.",
    ],
  },
  {
    slug: "digital-age",
    cat: "Identity",
    title: "The Importance of Preserving Culture in the Digital Age",
    img: "https://images.pexels.com/photos/31633682/pexels-photo-31633682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "Digital tools make it possible to preserve culture at a scale never before possible — and also to lose it faster than ever, when the algorithms of attention favour the loudest, not the deepest.",
      "The task before us is to bend these new tools toward remembering. Video, audio, and text become vessels — but the wisdom they carry must be the wisdom of the elders, not the noise of the moment.",
    ],
  },
  {
    slug: "storytelling",
    cat: "Storytelling",
    title: "The Power of Storytelling as Cultural Preservation",
    img: "https://images.pexels.com/photos/36816703/pexels-photo-36816703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "Stories are how a people remembers itself. Long before institutions, before schools, before writing — there was the storyteller by the fire, weaving history, ethics, and cosmology into a single, unforgettable thread.",
      "Every culture that has endured has done so because it kept telling its own story. To stop telling is to begin dissolving.",
    ],
  },
  {
    slug: "roots",
    cat: "Roots",
    title: "Understanding Our Roots: A Path to Identity",
    img: "https://images.pexels.com/photos/25856915/pexels-photo-25856915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "Roots are not what hold us back — they are what hold us up. A tree without roots does not stand, no matter how magnificent its branches.",
      "To understand where we come from is to know how far we can grow. This is the quiet mathematics of identity.",
    ],
  },
  {
    slug: "diaspora",
    cat: "Heritage",
    title: "Identity, Heritage and the African Diaspora Experience",
    img: "https://images.pexels.com/photos/6673837/pexels-photo-6673837.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "The diaspora carries a particular grief and a particular gift — the grief of distance, the gift of perspective.",
      "For those born far from the land of their ancestors, the work of heritage is not one of return but of reweaving — pulling scattered threads back into a single living cloth.",
    ],
  },
  {
    slug: "oral-traditions",
    cat: "Oral Tradition",
    title: "Oral Traditions: The Living Libraries of Africa",
    img: "https://images.pexels.com/photos/18807637/pexels-photo-18807637.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "Before the written word, Africa had the spoken word — and it was enough to carry civilisations across centuries.",
      "In the mouth of the elder, in the song of the griot, in the proverb of the mother, entire libraries lived and moved.",
    ],
  },
  {
    slug: "timbuktu",
    cat: "History",
    title: "The Timbuktu Manuscripts: Africa's Written Legacy",
    img: "https://images.pexels.com/photos/29342494/pexels-photo-29342494.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "Millions of ancient manuscripts hold proof that Africa was writing, studying, and philosophising long before the modern world acknowledged it.",
      "Timbuktu was not the exception — it was one of many centres of a continent-wide intellectual life that the historical record has too often ignored.",
    ],
  },
  {
    slug: "ubuntu",
    cat: "Community",
    title: "The Village as a Cultural Institution: Ubuntu in Practice",
    img: "https://images.pexels.com/photos/30619282/pexels-photo-30619282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    body: [
      "Ubuntu — \"I am because we are\" — is not a philosophy. It is a way of organising human life that the world desperately needs today.",
      "The village is not merely a place — it is a technology of belonging, an architecture for raising human beings in relationship.",
    ],
  },
];

export const Route = createFileRoute("/journal/$slug")({
  head: ({ loaderData }: { loaderData?: Article }) => {
    if (!loaderData) {
      return { meta: [{ title: "Essay — Mágbagbé-ilẹ̀" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData;
    return {
      meta: [
        { title: `${a.title} — Mágbagbé-ilẹ̀` },
        { name: "description", content: a.body[0] },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.body[0] },
        { property: "og:image", content: a.img },
      ],
    };
  },
  loader: ({ params }): Article => {
    const a = ARTICLES.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticlePage() {
  const article = Route.useLoaderData() as Article;
  return (
    <div style={{ background: "var(--obsidian)", minHeight: "100vh", paddingTop: 0 }}>
      <div className="stories-page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            {article.cat}
          </div>
          <h1 className="serif" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", color: "var(--ivory)" }}>
            {article.title}
          </h1>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 860, paddingBottom: "6rem" }}>
        <div className="story-feature-hero">
          <img src={article.img} alt={article.title} />
          <div className="story-feature-overlay"></div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          {article.body.map((p, i) => (
            <p key={i} className="story-feature-desc" style={{ marginBottom: "1.5rem" }}>
              {p}
            </p>
          ))}
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <Link to="/journal" className="btn-secondary" style={{ display: "inline-flex" }}>
            ← Back to The Journal
          </Link>
        </div>
      </div>
    </div>
  );
}

function ArticleNotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1rem" }}>
      <div style={{ textAlign: "center" }}>
        <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
          Not Found
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--ivory)", marginBottom: "1rem" }}>
          Essay Not Found
        </h1>
        <p style={{ color: "var(--ivory-dim)", marginBottom: "2rem" }}>
          The piece you're looking for isn't here yet.
        </p>
        <Link to="/journal" className="btn-primary">Return to The Journal</Link>
      </div>
    </div>
  );
}
