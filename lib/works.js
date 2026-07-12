// Single source of truth for works, exhibitions and shared site data.

const projectList = [
  {
    slug: "Lakec",
    number: "01",
    year: "2018",
    title: "Lakec",
    medium: "Moving image",
    duration: "20′04″",
    hero: "/pro/lakec/lakec_01.webp",
    href: "/workpage/Lakec",
    gallery: [
      "/pro/lakec/lakec_01.webp",
      "/pro/lakec/lakec_02.webp",
      "/pro/lakec/lakec_03.webp",
      "/pro/lakec/lakec_04.webp",
      "/pro/lakec/lakec_05.webp",
      "/pro/lakec/lakec_06.webp",
      "/pro/lakec/lakec_07.webp",
      "/pro/lakec/lakec_08.webp",
    ],
    statement: [
      "Lakec draws inspiration from POSAK JODIAN’s childhood memories of Amis people living by the water, and from her younger brother’s move from their hometown to work in Taipei. It traces the experience of Indigenous young people—and of earlier generations—who leave home and try to survive in the city.",
      "Posak connects Satefo, the Fata’an River near her hometown, with Xiubitang beside the Xindian River through images of flowing water. Interviews, oral histories, myths and songs shared by people in both places form a portrait of life between migration and the river journey home.",
    ],
  },
  {
    slug: "Simpleriver",
    number: "02",
    year: "2020",
    title: "Lakec: A Very Simple River",
    medium: "Moving image",
    duration: "14′02″",
    hero: "/pro/simpleriver/simpleriver_01.webp",
    href: "/workpage/Simpleriver",
    gallery: [
      "/pro/simpleriver/simpleriver_01.webp",
      "/pro/simpleriver/simpleriver_02.webp",
      "/pro/simpleriver/simpleriver_03.webp",
      "/pro/simpleriver/simpleriver_04.webp",
      "/pro/simpleriver/simpleriver_05.webp",
      "/pro/simpleriver/simpleriver_06.webp",
    ],
    statement: [
      "Lakec: A Very Simple River is POSAK JODIAN’s first work about the Malay Peninsula. The camera becomes a form of writing, following the river into the heart of Indigenous communities in Malaysia.",
      "Focusing on the Jakun people of the Peninsula, the work draws from oral stories and lived experience. It weaves a narrative between what is documented and undocumented in collective memory—a landscape suspended between tangible and intangible geographies.",
    ],
  },
  {
    slug: "Misafafahiyan",
    number: "03",
    year: "2022",
    title: "Misafafahiyan Metamorphosis",
    medium: "Moving image and sound",
    duration: "16′07″",
    hero: "/pro/misa/misa_02.webp",
    href: "/workpage/Misafafahiyan",
    gallery: [
      "/pro/misa/misa_01.webp",
      "/pro/misa/misa_02.webp",
      "/pro/misa/misa_03.webp",
      "/pro/misa/misa_04.webp",
      "/pro/misa/misa_05.webp",
      "/pro/misa/misa_06.webp",
      "/pro/misa/misa_07.webp",
    ],
    statement: [
      "Misafafahiyan Metamorphosis focuses on Hao Hao, a seventy-year-old Amis trans performer living in Fata’an. The work brings together a sixteen-minute video and photographic puzzles.",
      "Karaoke backing tracks, dialogue, dress-up, everyday sound and self-mockery interweave stories of family, returning home and nightlife. Hao Hao’s body carries histories of Indigenous labour, urban displacement and gender difference into a contemporary field of self-assembly and resistance.",
    ],
  },
];

export const projects = projectList
  .slice()
  .sort((a, b) => Number(b.year) - Number(a.year))
  .map((project, index) => ({
    ...project,
    number: String(index + 1).padStart(2, "0"),
  }));

export const portrait = "/pro/posak.webp";

export const exhibitions = [
  ["2008", "Self-portrait showed at Hualien Creative and Cultural Industries Park."],
  ["2011", "Story of Bai published on Taiwan Indigenous TV (TITV)."],
  ["2012", "Naruwan—Life Finds a Way—Taiwan Indigenous Artists Exhibition."],
  ["2018", "Lakec showed at Open Contemporary Art Center’s (OCAC) “PETAMU Project”."],
  ["2018", "Lakec showed at A+ WORKS of ART “A+ Online Festival of Video Art”."],
  ["2019", "Bitter Sweet participated in Open Contemporary Art Center’s project, showed at Taiwan Museum of Fine Arts."],
  ["2019", "Asian Art Biennial: The Strangers from beyond the Mountain and the Sea."],
  ["2019", "Palm Trees, Helicopters, the Boulder, and the Storyteller included in Nusantara Archive, published on the No Man’s Land online platform."],
  ["2020", "Lakec: A Very Simple River participated in Nusantara Archive and showed at Taipei Fine Arts Museum “The Secret South”."],
  ["2021", "Lakec project published in ACT 85: Indigenous Fields, Contemporary Transformations—Indigeneity in Arts and Confusions in Plurality, in the “Remapping—Paper Exhibition”."],
  ["2021", "Lakec project published on Pulima Link “Remapping”."],
  ["2021", "Lakec project received an Excellent Work Award in the Pulima Art Award."],
  ["2021", "Lakec: A Very Simple River showed at Hong-gah Museum “The Oceans and the Interpreters—Interpreters’ Screening II: The Mysterious Island”."],
  ["2022", "Lakec: A Very Simple River showed at Taitung Art Museum “Another Continent”."],
  ["2022", "Misafafahiyan Metamorphosis showed at Solid Art “Ocean and Interpreters”."],
  ["2023", "Misafafahiyan Metamorphosis showed at Britto Arts Trust “Ocean and Interpreters” in Dhaka, Bangladesh."],
  ["2023", "Misafafahiyan Metamorphosis received a Jury Award in the Pulima Art Award."],
  ["2023", "Misafafahiyan Metamorphosis showed at Jogja Fotografis Festival “Frame” in Yogyakarta, Indonesia."],
  ["2023", "Misafafahiyan Metamorphosis showed at Hualien Creative and Cultural Industries Park."],
  ["2023", "Pulima Art Festival “Amorous Mountains, Erotic Seas: Queer, Indigene, and the Hidden History”."],
  ["2025", "Participated in Biennale Jogja 18 “KAWRUH: Land of Rooted Practices,” Yogyakarta, Indonesia, 5 October–20 November 2025."],
  ["2026", "WE Are Becoming, presenting In the House Where Light Is Almost Invisible, at Taiwan Contemporary Culture Lab (C-LAB), Taipei, Taiwan, 8 May–16 August 2026."],
  ["2026", "Horizon Ablaze: Culture and Contemporary Art of Heat, at Taichung Museum of Art, Taichung, Taiwan, 15 May–30 August 2026."],
].sort((a, b) => Number(b[0]) - Number(a[0]));

export const newsItems = [
  {
    year: "2026",
    dates: "08 May — 16 August 2026",
    title: "WE Are Becoming",
    location: "Taiwan Contemporary Culture Lab (C-LAB), Taipei, Taiwan",
    visual: "we-are-becoming",
    href: "https://clab.org.tw/events/we-are-becoming/",
  },
  {
    year: "2026",
    dates: "15 May — 30 August 2026",
    title: "Horizon Ablaze: Culture and Contemporary Art of Heat",
    location: "Taichung Museum of Art, Taichung, Taiwan",
    image: "/pro/news/horizon-ablaze-2026.jpg",
    href: "https://www.tcam.museum/zh/exhibition/horizon-ablaze",
  },
  {
    year: "2025",
    dates: "17 May — 21 September 2025",
    title: "Duration of 149 Sea Miles: The Struggle of Memory Against Forgetting",
    location: "National Human Rights Museum, Taiwan",
    image: "/pro/news/duration149.webp",
    href: "https://www.nhrm.gov.tw/w/nhrm/News_24111815365642501",
  },
  {
    year: "2024",
    dates: "11 May — 09 June 2024",
    title: "Bad Romance: Affective Body with its Misconceptions and Rumours",
    location: "Waley Art, Taipei, Taiwan",
    image: "/pro/news/badromance.webp",
    href: "https://www.facebook.com/events/419124790911287/",
  },
  {
    year: "2024",
    dates: "09 May — 07 July 2024",
    title: "Fever Dream",
    location: "UP Vargas Museum, Manila, Philippines",
    image: "/pro/news/feverdream.webp",
    href: "https://vargasmuseum.org/fever-dream/",
  },
];

export const texts = [
  {
    year: "2019",
    title: "From Archive to Tribes in Taiwan and Malaysia — Jeffrey Lim’s KANTA Portraits",
    source: "No Man’s Land · Nusantara Archive",
    excerpt:
      "A cross-regional context around PETAMU, Nusantara Archive and Jeffrey Lim’s KANTA Portraits, opening another route through Taiwan–Malaysia Indigenous image-making and field encounters.",
    href: "https://www.heath.tw/nml-article/from-archive-to-tribes-in-asia-jeffrey-lims-kanta-portraits/?lang=en",
  },
  {
    year: "2022",
    title: "We — In Between Kita and Kami #Kami #Kita",
    source: "Nusantara Archive Project · Keyword Dictionary of Asian Contemporary Art",
    excerpt:
      "A collaboration unfolding cultural exchange through language, Indigenous experience and the shared Austronesian world.",
    href: "https://www.keywordsart.com/Astronesian-Atlas.php",
  },
  {
    year: "2021",
    title: "Lakec and Lakec: A Very Simple River",
    source: "No Man’s Land · Issue 50: The Portal & The Rearview Mirror",
    excerpt:
      "An account of field research moving between Taiwan and the Malay Peninsula, oral histories and lived experience.",
    image: "/pro/text/cilifenam.webp",
    href: "https://www.heath.tw/nml-article/lakec-and-lakec-a-very-simple-river/",
  },
  {
    year: "2021",
    title: "Remapping — Paper Exhibition",
    source: "ACT 85 · Indigenous Fields, Contemporary Transformations",
    excerpt:
      "A publication considering Indigenous fields, contemporary transformation and the tensions of plurality.",
  },
  {
    year: "2021",
    title: "Remapping",
    source: "Pulima Link · Curated by Huang Ching-Ing",
    excerpt:
      "Artists remap nodes and paths, suturing fragmented stories into a new field of resonance.",
    image: "/pro/text/remapping.webp",
    href: "https://www.pulima.com.tw/PulimaENG/exhibition_202101.aspx",
  },
  {
    year: "2019",
    title: "Palm Trees, Helicopters, the Boulder, and the Storyteller",
    source: "Nusantara Archive Project · No Man’s Land",
    excerpt:
      "A journey through community, memory and storytelling across the Malay Peninsula.",
    image: "/pro/text/palmtrees.webp",
    href: "https://www.heath.tw/nml-article/palm-trees-helicopters-the-boulder-and-the-storyteller/",
  },
];
