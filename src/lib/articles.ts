export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string };

export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: number;
  image: string;
  featured?: boolean;
  content?: ArticleBlock[];
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "why-african-traditions-matter",
    category: "Cultural Preservation",
    title: "Why African Traditions Matter More Than Ever",
    excerpt: "In an increasingly globalized world, the preservation of African traditions is not nostalgia — it is survival. We explore why the stories, rituals, and knowledge systems of African communities represent irreplaceable human heritage.",
    readTime: 8,
    image: "https://images.pexels.com/photos/6443758/pexels-photo-6443758.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    content: [
      { type: "paragraph", text: "There is a quiet crisis unfolding across the African continent and its diaspora. Not one that makes international headlines, but one whose consequences will echo for centuries. It is the crisis of cultural loss — the slow dissolution of traditions, languages, stories, and ways of knowing that have sustained African communities for millennia." },
      { type: "quote", text: "Until the lion learns to write, every story will glorify the hunter.", author: "African Proverb" },
      { type: "paragraph", text: "African traditions are not relics of a past that should be left behind. They are living, dynamic systems of knowledge that contain sophisticated understandings of ecology, psychology, governance, medicine, art, and human relationship. When we lose them, we lose not just culture — we lose solutions to problems we have not yet encountered." },
      { type: "heading", text: "The Stakes Are Higher Than We Think" },
      { type: "paragraph", text: "Consider language alone. Of the world's approximately 7,000 languages, nearly half are endangered. Africa, with its extraordinary linguistic diversity of over 2,000 languages, is at the epicenter of this crisis. Each language that falls silent takes with it a unique worldview, a particular way of categorizing reality, a set of concepts that have no equivalent anywhere else." },
      { type: "paragraph", text: "But traditions are more than language. They encompass agricultural knowledge honed over generations to specific soils and climates. They include medicinal knowledge that modern science is only beginning to validate. They encode social technologies for conflict resolution, governance, and community care that many modern societies sorely need." },
      { type: "heading", text: "Preservation is an Act of Love" },
      { type: "paragraph", text: "This is why Mágbagbé-ilẹ̀ exists. Not to freeze African cultures in amber or prevent them from evolving — all living cultures change and grow. Rather, to ensure that the choices about what to keep, what to adapt, and what to release are made consciously, with full knowledge of what these traditions contain." },
      { type: "paragraph", text: "To preserve African traditions is to love African people — present and future. It is to say: your ancestors were not primitive. Their knowledge was not inferior. Their stories matter. You come from somewhere extraordinary, and that origin deserves to be known." },
    ],
  },
  {
    id: "2",
    slug: "disappearing-art-oral-storytelling",
    category: "Oral Heritage",
    title: "The Disappearing Art of Oral Storytelling",
    excerpt: "Long before writing, before cameras and recordings, human beings preserved their most important truths through spoken word. African oral traditions represent some of the world's most sophisticated knowledge systems.",
    readTime: 6,
    image: "https://images.pexels.com/photos/18609365/pexels-photo-18609365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    content: [
      { type: "paragraph", text: "The griot sits under the baobab tree as the village gathers at dusk. Without a book, without a screen, without notes, they begin to speak. Hours pass. History unfolds — wars and treaties, ancestors and heroes, wisdom and cautionary tales. When they finish, those who listened are different people." },
      { type: "quote", text: "When an old man dies, a library burns to the ground.", author: "Amadou Hampâté Bâ" },
      { type: "paragraph", text: "This was the original technology of memory. Long before writing systems, before recorded media, before the internet — the human voice was how civilizations stored and transmitted everything that mattered. African oral traditions represent one of the highest developments of this ancient art." },
      { type: "heading", text: "The Science of Memory Traditions" },
      { type: "paragraph", text: "Modern research into memory and cognition has revealed something that oral cultures already knew: stories are the most efficient vehicle for preserving and transmitting complex information. The narrative structure, emotional content, rhythm, and repetition of oral traditions are not mere entertainment — they are memory technologies." },
      { type: "paragraph", text: "West African griots could recite genealogies stretching back dozens of generations. Aboriginal Australian songlines encoded navigation across continents. These were not primitive approximations of writing — they were sophisticated information systems adapted to human cognition." },
    ],
  },
  {
    id: "3",
    slug: "understanding-yoruba-heritage",
    category: "Identity",
    title: "Understanding Our Roots: A Journey Through Yoruba Heritage",
    excerpt: "The Yoruba people of West Africa created one of humanity's great civilizations. Their cosmology, philosophy, art, and social organization continue to influence billions of people — many of whom don't even know it.",
    readTime: 10,
    image: "https://images.pexels.com/photos/29883317/pexels-photo-29883317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    content: [
      { type: "paragraph", text: "To understand Yoruba heritage is to encounter one of humanity's great civilizations. The Yoruba people of West Africa — numbering over 40 million — have developed over thousands of years a culture of extraordinary richness and sophistication, one whose influence extends far beyond the shores of West Africa." },
      { type: "quote", text: "Iwa l'ewa — Character is beauty.", author: "Yoruba Proverb" },
      { type: "paragraph", text: "From the great city-states of Ile-Ife and Old Oyo to the Candomblé temples of Brazil and the Santería communities of Cuba, Yoruba philosophy, religion, art and social organization have shaped cultures across multiple continents. This diaspora did not happen by choice — it was the product of one of history's great tragedies, the transatlantic slave trade. But what the Yoruba people carried across that terrible ocean was their culture, and that culture survived." },
      { type: "heading", text: "The Philosophical Foundation" },
      { type: "paragraph", text: "At the heart of Yoruba culture is a sophisticated philosophical tradition centered on the concept of Ìwà — character or being. The Yoruba understanding of what makes a good life is not primarily about material success but about the quality of one's character, one's relationships, and one's contribution to community." },
    ],
  },
  {
    id: "4",
    slug: "power-of-story",
    category: "Storytelling",
    title: "The Power of Story: How Narratives Shape Who We Are",
    excerpt: "Every culture is ultimately a collection of stories. These stories determine what we value, how we behave, what we pass on to our children. Understanding this helps us understand why preservation matters so deeply.",
    readTime: 7,
    image: "https://images.pexels.com/photos/28310125/pexels-photo-28310125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    content: [
      { type: "paragraph", text: "We are the stories we tell ourselves. This is not metaphor — it is neuroscience. The human brain is a narrative organ, constantly weaving events, experiences, and beliefs into coherent stories that explain who we are, where we come from, and what the world means. Identity, at its most fundamental level, is a story." },
      { type: "quote", text: "Stories are the creative conversion of life itself into a more powerful, clearer, more meaningful experience.", author: "Robert McKee" },
      { type: "paragraph", text: "This is why the stories a culture tells about itself matter so profoundly. They shape what its members believe is possible, what they consider virtuous, what they fear and what they seek. The crisis of cultural preservation is, at its core, a crisis of story — a risk that the narratives that have sustained African communities will be lost, replaced by stories that do not serve African people." },
      { type: "heading", text: "The Counter-Narrative" },
      { type: "paragraph", text: "For too long, the stories told about African history and culture have been stories written by others — stories of lack, of primitive conditions, of people who needed to be civilized. These stories were weapons, designed to justify exploitation and dispossession. The work of cultural preservation is the work of counter-narrative — of restoring the actual stories African peoples tell about themselves." },
    ],
  },
];
