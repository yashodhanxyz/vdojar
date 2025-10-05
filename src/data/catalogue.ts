import type { Metadata } from "next";

export interface TitleDetail {
  id: string;
  title: string;
  synopsis: string;
  description: string;
  runtime: string;
  releaseYear: number;
  maturityRating: string;
  genres: string[];
  languages: string[];
  tags: string[];
  poster: string;
  backdrop: string;
  badge?: string;
  watchUrl: string;
  trailerUrl?: string;
  cast?: string[];
  crew?: string[];
}

const baseWatchUrl = "https://vdojar.com/Web/movie_detail";

function watchUrl(id: string, title: string) {
  const params = new URLSearchParams({ title });
  return `${baseWatchUrl}/${id}?${params.toString()}`;
}

export const catalogue: TitleDetail[] = [
  {
    id: "420",
    title: "8 Don 75",
    synopsis:
      "Eight inmates are forced into a high-stakes moral standoff when an unexpected visitor shakes a coastal prison.",
    description:
      "A cult-favourite Marathi crime drama that unfolds over one electrifying night inside a prison. When a mysterious outsider arrives with a proposition, eight inmates must confront guilt, friendship, and the cost of freedom.",
    runtime: "2h 14m",
    releaseYear: 2024,
    maturityRating: "U/A 16+",
    genres: ["Crime", "Drama"],
    languages: ["Marathi"],
    tags: ["Prison thriller", "Festival pick", "Character drama"],
    poster: "/media/posters/8-don-75-vertical.jpg",
    backdrop: "/media/hero/8-don-75.jpg",
    badge: "Festival Favourite",
    watchUrl: watchUrl("420", "8 Don 75"),
    cast: ["Jayesh Kalsekar", "Rohit Kokate", "Bhushan Patil"],
    crew: ["Director: Jayesh Mulay"],
  },
  {
    id: "421",
    title: "Raktbeej",
    synopsis:
      "A Gujarati journalist’s exposé pulls him into a deadly whirlpool of political conspiracy and revenge.",
    description:
      "Raktbeej is a taut Gujarati thriller about truth versus power. When an investigative reporter uncovers a sinister nexus, he and his allies are hunted by forces who will do anything to bury the truth.",
    runtime: "1h 59m",
    releaseYear: 2024,
    maturityRating: "U/A 13+",
    genres: ["Thriller", "Political"],
    languages: ["Gujarati"],
    tags: ["Investigative", "Conspiracy", "Edge-of-seat"],
    poster: "/media/posters/raktbeej-vertical.jpg",
    backdrop: "/media/hero/raktbeej.jpg",
    badge: "New Arrival",
    watchUrl: watchUrl("421", "Raktbeej"),
  },
  {
    id: "417",
    title: "Haridra",
    synopsis:
      "A grieving mother confronts systemic apathy after a hate crime shatters her family in Mumbai.",
    description:
      "Haridra is a hard-hitting Hindi short that follows a mother fighting for justice when the system refuses to see the truth. Inspired by real events, it is both a protest and a love letter to resilience.",
    runtime: "31m",
    releaseYear: 2023,
    maturityRating: "U/A 16+",
    genres: ["Drama"],
    languages: ["Hindi"],
    tags: ["Social justice", "Women-led", "Short Film"],
    poster: "/media/posters/haridra.jpg",
    backdrop: "/media/hero/haridra.jpg",
    badge: "Editor’s Pick",
    watchUrl: watchUrl("417", "Haridra"),
    cast: ["Prabha Yadav", "Jasleen Singh"],
  },
  {
    id: "412",
    title: "The Taiwanese Man - Part A",
    synopsis:
      "Stranded in Mumbai during lockdown, a Taiwanese traveller discovers unexpected friendships on the city streets.",
    description:
      "The first chapter of a heartfelt documentary chronicling a traveller betrayed, broke, and stuck in a city he barely knows. Part A captures his first steps toward survival, dignity, and community.",
    runtime: "10m",
    releaseYear: 2025,
    maturityRating: "U",
    genres: ["Documentary"],
    languages: ["Hindi", "English"],
    tags: ["Human stories", "Lockdown", "Documentary"],
    poster: "/media/posters/taiwanese-man.jpg",
    backdrop: "/media/hero/taiwanese-man.jpg",
    badge: "Limited Series",
    watchUrl: watchUrl("412", "The Taiwanese Man - Part A"),
  },
  {
    id: "413",
    title: "The Taiwanese Man - Part B",
    synopsis:
      "The journey continues as hope and betrayal collide in the concluding chapter of the survivor’s chronicle.",
    description:
      "Part B of the documentary delves deeper into displacement, resilience, and the global community that rallied for a stranger. A poetic finale to a true story of survival.",
    runtime: "18m",
    releaseYear: 2025,
    maturityRating: "U",
    genres: ["Documentary"],
    languages: ["Hindi", "English"],
    tags: ["Docu-series", "Global", "Inspiring"],
    poster: "/media/posters/taiwanese-man.jpg",
    backdrop: "/media/hero/taiwanese-man.jpg",
    watchUrl: watchUrl("413", "The Taiwanese Man - Part B"),
  },
  {
    id: "416",
    title: "Gaurishankar",
    synopsis:
      "When a revered lawyer vanishes, dark secrets ripple through a coastal town.",
    description:
      "A textured Marathi thriller laced with folklore and courtroom intrigue. Gaurishankar unpacks corruption, faith, and the lengths one community will go to hide the truth.",
    runtime: "2h 4m",
    releaseYear: 2022,
    maturityRating: "U/A 13+",
    genres: ["Thriller", "Mystery"],
    languages: ["Marathi"],
    tags: ["Small-town", "Suspense", "Legal"],
    poster: "/media/posters/gaurishankar.jpg",
    backdrop: "/media/hero/gaurishankar.jpg",
    badge: "Trending",
    watchUrl: watchUrl("416", "Gaurishankar"),
  },
  {
    id: "406",
    title: "On The Way Of Love",
    synopsis:
      "Two strangers collide in Mumbai and rediscover what intimacy means in the digital era.",
    description:
      "A tender Hindi short shot on-location in Mumbai. It explores fleeting encounters, the vulnerability of modern relationships, and the music that binds them together.",
    runtime: "23m",
    releaseYear: 2023,
    maturityRating: "U/A 13+",
    genres: ["Romance", "Drama"],
    languages: ["Hindi"],
    tags: ["City stories", "Modern love", "Short"],
    poster: "/media/posters/on-the-way-of-love.jpg",
    backdrop: "/media/hero/on-the-way-of-love.jpg",
    watchUrl: watchUrl("406", "On The Way of Love"),
  },
  {
    id: "393",
    title: "Madhurapudi Gramam Ane Nenu",
    synopsis:
      "A prodigal son returns to his village and is pulled into a bittersweet web of love, politics, and redemption.",
    description:
      "A feel-good Telugu feature that balances romance, comedy, and community politics. It’s a reminder that home is a choice you make every day.",
    runtime: "1h 38m",
    releaseYear: 2016,
    maturityRating: "U/A 13+",
    genres: ["Romance", "Drama"],
    languages: ["Telugu"],
    tags: ["Village life", "Family", "Return home"],
    poster: "/media/posters/madhurapudi.jpg",
    backdrop: "/media/hero/8-don-75.jpg",
    watchUrl: watchUrl("393", "Madhurapudi Gramam Ane Nenu"),
  },
  {
    id: "380",
    title: "Cockfight",
    synopsis:
      "A rural village erupts when pride, tradition, and an illegal cockfight collide.",
    description:
      "Cockfight is a raw Hindi short set against the backdrop of village rivalries. With kinetic energy and earthy humour, it reveals how ego and masculinity can upend ordinary lives.",
    runtime: "20m",
    releaseYear: 2021,
    maturityRating: "U/A 16+",
    genres: ["Drama", "Action"],
    languages: ["Hindi"],
    tags: ["Rural", "Feud", "Short Film"],
    poster: "/media/posters/cocokfight.jpg",
    backdrop: "/media/hero/gaurishankar.jpg",
    watchUrl: watchUrl("380", "Cockfight"),
  },
  {
    id: "342",
    title: "Poratam",
    synopsis:
      "A young activist documents a people’s uprising that threatens to swallow him whole.",
    description:
      "Poratam is a Telugu political drama blending documentary-style realism with gripping storytelling. It’s a portrait of courage under surveillance.",
    runtime: "44m",
    releaseYear: 2020,
    maturityRating: "U/A 13+",
    genres: ["Drama", "Political"],
    languages: ["Telugu"],
    tags: ["Activism", "Found footage", "Short"],
    poster: "/media/posters/poratam.jpg",
    backdrop: "/media/hero/raktbeej.jpg",
    watchUrl: watchUrl("342", "Poratam"),
  },
  {
    id: "355",
    title: "Samara",
    synopsis:
      "A grief-stricken father races across Kerala to protect his daughter from a dangerous cult.",
    description:
      "Samara is a Malayalam thriller that slides between action, noir, and supernatural intrigue. It’s atmospheric, propulsive, and full of twists.",
    runtime: "1h 57m",
    releaseYear: 2022,
    maturityRating: "U/A 16+",
    genres: ["Thriller", "Mystery"],
    languages: ["Malayalam"],
    tags: ["Family", "Mystic", "Chase"],
    poster: "/media/posters/samara.jpg",
    backdrop: "/media/hero/raktbeej.jpg",
    watchUrl: watchUrl("355", "Samara"),
  },
  {
    id: "371",
    title: "Siragan",
    synopsis:
      "A reclusive Tamil novelist is thrust into a conspiracy when his manuscript mirrors a real murder.",
    description:
      "Siragan is a moody Tamil mystery set in the Nilgiris. Rich cinematography and a fractured timeline keep you guessing until the final frame.",
    runtime: "2h 8m",
    releaseYear: 2021,
    maturityRating: "U/A 16+",
    genres: ["Mystery", "Thriller"],
    languages: ["Tamil"],
    tags: ["Writer", "Cold case", "Atmospheric"],
    poster: "/media/posters/siragan.jpg",
    backdrop: "/media/hero/gaurishankar.jpg",
    watchUrl: watchUrl("371", "Siragan"),
  },
  {
    id: "359",
    title: "Mahalakshmi Path - The Evolution",
    synopsis:
      "An immersive devotional travelogue chronicling an artist’s quest for the goddess.",
    description:
      "Shot across India’s most sacred temples, Mahalakshmi Path blends music, faith, and documentary storytelling to celebrate feminine divinity.",
    runtime: "2h 5m",
    releaseYear: 2021,
    maturityRating: "U",
    genres: ["Documentary", "Spiritual"],
    languages: ["Hindi"],
    tags: ["Devotional", "Travel", "Music"],
    poster: "/media/posters/mahalakshmi-path.jpg",
    backdrop: "/media/hero/on-the-way-of-love.jpg",
    watchUrl: watchUrl("359", "Mahalakshmi Path - The Evolution"),
  },
  {
    id: "303",
    title: "Bhuk",
    synopsis:
      "A young boy’s hunger becomes a haunting metaphor for forgotten communities.",
    description:
      "Bhuk is a Marathi short that merges magical realism with social commentary. It is tender, lyrical, and devastating.",
    runtime: "12m",
    releaseYear: 2020,
    maturityRating: "U/A 13+",
    genres: ["Drama"],
    languages: ["Marathi"],
    tags: ["Coming-of-age", "Magical realism", "Short"],
    poster: "/media/posters/bhuk.jpg",
    backdrop: "/media/hero/haridra.jpg",
    watchUrl: watchUrl("303", "Bhuk"),
  },
  {
    id: "407",
    title: "Dakini",
    synopsis:
      "A family’s dream home turns into a paranormal battleground once the sun goes down.",
    description:
      "Dakini is a Hindi horror short steeped in folklore. When a new house begins to breathe, a team of ghost hunters is summoned to put restless spirits to rest.",
    runtime: "14m",
    releaseYear: 2024,
    maturityRating: "U/A 16+",
    genres: ["Horror", "Supernatural"],
    languages: ["Hindi"],
    tags: ["Paranormal", "Folklore", "Short"],
    poster: "/media/posters/dakini.jpg",
    backdrop: "/media/hero/haridra.jpg",
    watchUrl: watchUrl("407", "Dakini"),
  },
  {
    id: "395",
    title: "Aadmi",
    synopsis:
      "A Bengali working-class father fights bureaucratic apathy to secure his daughter’s future.",
    description:
      "Aadmi is a gripping Bengali drama that navigates the emotional terrain of parenthood, masculinity, and class.",
    runtime: "1h 10m",
    releaseYear: 2022,
    maturityRating: "U/A 13+",
    genres: ["Drama"],
    languages: ["Bengali"],
    tags: ["Working class", "Family", "Social"],
    poster: "/media/posters/aadmi.jpg",
    backdrop: "/media/hero/raktbeej.jpg",
    watchUrl: watchUrl("395", "Aadmi"),
  },
  {
    id: "389",
    title: "Hattu",
    synopsis:
      "An ageing theatre actor faces his biggest challenge—an empty stage and forgotten audience.",
    description:
      "Hattu is a Hindi short that pays homage to street theatre. It blends humour and melancholy to ask: who performs when no one is watching?",
    runtime: "16m",
    releaseYear: 2021,
    maturityRating: "U/A 13+",
    genres: ["Drama"],
    languages: ["Hindi"],
    tags: ["Theatre", "Aging", "Performing Arts"],
    poster: "/media/posters/hattu.jpg",
    backdrop: "/media/hero/on-the-way-of-love.jpg",
    watchUrl: watchUrl("389", "Hattu"),
  },
  {
    id: "384",
    title: "Khoob Ladi Mardaani",
    synopsis:
      "A rebellious schoolgirl sparks a movement after standing up to systemic bullying.",
    description:
      "Khoob Ladi Mardaani is an empowering Hindi short inspired by Jhansi Ki Rani. It reimagines courage for Gen-Z while celebrating grassroots activism.",
    runtime: "16m",
    releaseYear: 2020,
    maturityRating: "U/A 13+",
    genres: ["Drama", "Inspirational"],
    languages: ["Hindi"],
    tags: ["Youth", "Activism", "Short"],
    poster: "/media/posters/khoob-ladi-mardaani.jpg",
    backdrop: "/media/hero/haridra.jpg",
    watchUrl: watchUrl("384", "Khoob Ladi Mardaani"),
  },
  {
    id: "230",
    title: "Lambi Udeek",
    synopsis:
      "A Punjabi singer pens letters to a lover he hasn’t met yet.",
    description:
      "Shot on lush 16mm, Lambi Udeek is a poetic Punjabi short about longing, art, and the courage to dream beyond borders.",
    runtime: "6m",
    releaseYear: 2019,
    maturityRating: "U",
    genres: ["Romance", "Drama"],
    languages: ["Punjabi"],
    tags: ["Music", "Longing", "Poetic"],
    poster: "/media/posters/lambi-udeek.jpg",
    backdrop: "/media/hero/on-the-way-of-love.jpg",
    watchUrl: watchUrl("230", "Lambi Udeek"),
  },
  {
    id: "220",
    title: "Crazy Jatt",
    synopsis:
      "A chaotic Punjabi wedding becomes the stage for a whirlwind romance.",
    description:
      "Crazy Jatt is a loud, colourful Punjabi short that blends slapstick comedy with high-energy music and choreography.",
    runtime: "18m",
    releaseYear: 2019,
    maturityRating: "U/A 13+",
    genres: ["Comedy", "Romance"],
    languages: ["Punjabi"],
    tags: ["Wedding", "Dance", "Comedy"],
    poster: "/media/posters/crazy-jatt.jpg",
    backdrop: "/media/hero/on-the-way-of-love.jpg",
    watchUrl: watchUrl("220", "Crazy Jatt"),
  },
  {
    id: "351",
    title: "Beyond The 7 Seas",
    synopsis:
      "A retired sailor’s memoirs unlock a forgotten maritime revolution.",
    description:
      "This Malayalam documentary journeys through the Indian Ocean with archival footage, folk songs, and first-person testimonies about sailors who shaped global trade.",
    runtime: "2h 29m",
    releaseYear: 2021,
    maturityRating: "U",
    genres: ["Documentary"],
    languages: ["Malayalam"],
    tags: ["History", "Sea", "Archive"],
    poster: "/media/posters/beyond-the-7-seas.jpg",
    backdrop: "/media/hero/raktbeej.jpg",
    watchUrl: watchUrl("351", "Beyond The 7 Seas"),
  },
  {
    id: "357",
    title: "Pravasa Bharatheeyudu",
    synopsis:
      "An NRI filmmaker tracks the forgotten stories of Telugu migrant workers across the globe.",
    description:
      "Pravasa Bharatheeyudu is part travelogue, part oral history, documenting the Telugu diaspora’s contributions to cinema, tech, and community building.",
    runtime: "1h 46m",
    releaseYear: 2021,
    maturityRating: "U/A 13+",
    genres: ["Documentary"],
    languages: ["Telugu"],
    tags: ["Diaspora", "Travel", "Culture"],
    poster: "/media/posters/pravasa-bharatheeyudu.jpg",
    backdrop: "/media/hero/raktbeej.jpg",
    watchUrl: watchUrl("357", "Pravasa Bharatheeyudu"),
  },
  {
    id: "228",
    title: "Suman",
    synopsis:
      "An elderly woman rediscovers joy when a neighbourhood music circle welcomes her home.",
    description:
      "Suman is a Marathi short documentary that captures the power of community art. It’s intimate, uplifting, and utterly human.",
    runtime: "5m",
    releaseYear: 2018,
    maturityRating: "U",
    genres: ["Documentary", "Short"],
    languages: ["Marathi"],
    tags: ["Music", "Community", "Elderly"],
    poster: "/media/posters/suman.jpg",
    backdrop: "/media/hero/on-the-way-of-love.jpg",
    watchUrl: watchUrl("228", "Suman"),
  },
];

export function getTitleById(id: string) {
  return catalogue.find((item) => item.id === id);
}

export function getRelatedTitles(id: string, limit = 6) {
  const current = getTitleById(id);
  if (!current) return [];
  const pool = catalogue.filter((item) => item.id !== id);
  const related = pool
    .filter((item) =>
      item.languages.some((lang) => current.languages.includes(lang)) ||
      item.genres.some((genre) => current.genres.includes(genre))
    )
    .slice(0, limit);

  if (related.length < limit) {
    const remaining = pool
      .filter((item) => !related.includes(item))
      .slice(0, limit - related.length);
    return [...related, ...remaining];
  }

  return related;
}

export function generateTitleMetadata(id: string): Metadata {
  const title = getTitleById(id);
  if (!title) {
    return {
      title: "Title not found | VDOJAR",
    };
  }

  return {
    title: `${title.title} | VDOJAR`,
    description: title.synopsis,
    openGraph: {
      title: `${title.title} | VDOJAR`,
      description: title.synopsis,
      images: [
        {
          url: title.backdrop,
          width: 1280,
          height: 720,
          alt: `${title.title} artwork`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title.title} | VDOJAR`,
      description: title.synopsis,
      images: [title.backdrop],
    },
  };
}
