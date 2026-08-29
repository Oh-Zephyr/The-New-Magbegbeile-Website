// Centralized cultural imagery — sourced from the reference site (Pexels CDN).
const px = (id: string, w = 1600, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}${h ? `&h=${h}` : ""}`;

export const heritageImages = {
  // Hero / foundation collage
  hero: px("25856942", 1600, 900),
  heroSecondary: px("11696030", 800, 600),

  // About page
  about: px("25856915", 1600, 900),

  // Community page
  community: px("30619282", 1600, 900),

  // Journal
  journal: px("29883317", 1600, 900),
  journalFeatured: px("29883317", 1400, 700),
  journalCards: {
    identity: px("31633682", 600, 600),
    storytelling: px("36816703", 600, 600),
    roots: px("25856915", 600, 600),
    diaspora: px("6673837", 600, 600),
    oralTradition: px("18807637", 900, 500),
    timbuktu: px("29342494", 900, 500),
    ubuntu: px("30619282", 900, 500),
  },

  // Story chapters
  storyChapter1: px("25856942", 1600, 900), // Voices of the Elders — West Africa
  storyChapter2: px("17546269", 1600, 900), // The Land Remembers — East Africa
};
