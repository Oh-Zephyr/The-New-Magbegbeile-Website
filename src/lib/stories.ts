import { heritageImages } from "./images";

export interface Story {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  culturalMeaning: string;
  background: string;
  lessons: string[];
  image: string;
  duration: string;
  tag: string;
  related: string;
}

export const stories: Story[] = [
  {
    id: "1",
    number: "01",
    category: "Yoruba Wisdom",
    title: "Voices of the Elders",
    description: "Deep within Yoruba oral tradition lies a wealth of wisdom passed from elders to the young. This documentary chapter explores the sacred conversations that shaped a civilization — the proverbs, the warnings, the celebrations and the lessons woven into everyday speech.",
    culturalMeaning: "The Yoruba people of West Africa have one of the world's richest oral traditions. Elders are considered living libraries, and their words carry the weight of generations. To speak with an elder is to commune with history itself.",
    background: "The Yoruba civilization, spanning across what is now Nigeria, Benin, and Togo, has produced some of Africa's most enduring cultural contributions — from philosophy and religion to art, music, and governance. At the heart of this civilization is the spoken word.",
    lessons: [
      "Oral tradition is as valid and rich as written record",
      "Proverbs are compressed wisdom designed for complex times",
      "Language preservation is identity preservation",
      "The relationship between elder and younger generation carries civilization forward",
      "Stories are the original technology for transmitting values",
    ],
    image: heritageImages.storyChapter1,
    duration: "24 min",
    tag: "Chapter",
    related: "2",
  },
  {
    id: "2",
    number: "02",
    category: "Ancestral Craft",
    title: "The Language of Hands",
    description: "Every artifact tells a story. This documentary journey explores the artisans whose hands carry centuries of knowledge — traditions threatened by a changing world. From weavers to carvers, these craftspeople are the living bridges to our ancestral past.",
    culturalMeaning: "Traditional African craftsmanship is not merely decorative — it is a language. Patterns encode family histories, social status, spiritual meanings and community narratives. When a craft tradition dies, an entire vocabulary of human expression is lost.",
    background: "Across Africa, craft traditions developed over thousands of years as the primary medium for cultural expression, spiritual communication, and historical record-keeping. The Kente cloth of Ghana, the Adire fabric of the Yoruba, the bronze works of Benin — each represents a sophisticated cultural technology.",
    lessons: [
      "Craft knowledge is sacred intellectual heritage",
      "Traditional skills deserve documentation before they are lost",
      "Art carries cultural memory across generations",
      "The hands that create are as important as the minds that innovate",
      "Material culture reflects spiritual and social values",
    ],
    image: heritageImages.storyChapter2,
    duration: "31 min",
    tag: "Chapter",
    related: "1",
  },
];
