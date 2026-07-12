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
    href: "https://clab.org.tw/en/events/we-are-becoming/",
  },
  {
    year: "2026",
    dates: "15 May — 30 August 2026",
    title: "Horizon Ablaze: Culture and Contemporary Art of Heat",
    location: "Taichung Museum of Art, Taichung, Taiwan",
    image: "/pro/news/horizon-ablaze-2026.jpg",
    href: "https://www.tcam.museum/en/exhibition/horizon-ablaze",
  },
  {
    year: "2025",
    dates: "05 October — 20 November 2025",
    title: "Biennale Jogja 18: KAWRUH — Land of Rooted Practices",
    location: "Yogyakarta, Indonesia",
    image: "/pro/misa/misa_02.webp",
    href: "https://biennalejogja.org/2025/",
  },
  {
    year: "2025",
    dates: "17 May — 21 September 2025",
    title: "Duration of 149 Sea Miles: The Struggle of Memory Against Forgetting",
    location: "National Human Rights Museum, Taiwan",
    image: "/pro/news/duration149.webp",
    href: "https://www.nhrm.gov.tw/w/nhrmEN/Events_25090519463165280",
  },
  {
    year: "2025",
    dates: "2024.11.23 (Sat.) — 12.29 (Sun.)",
    title: "《Kalentura/Fever/Tio̍h-sua》探索熱與文化交織的全球現象系列計畫",
    location: "絕對空間, Tainan, Taiwan",
    dates: "23 November — 29 December 2024",
    image: "/pro/news/kalentura-fever-tioh-sua-2024.jpg",
    href: "https://artemperor.tw/focus/6284",
  },
  {
    year: "2024",
    dates: "11 May — 09 June 2024",
    title: "Bad Romance: Affective Body with its Misconceptions and Rumours",
    location: "Waley Art, Taipei, Taiwan",
    image: "/pro/news/badromance.webp",
    href: "https://www.facebook.com/events/419124790911287?locale=zh_TW",
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

const legacyPressItems = [
  {
    year: "2025",
    type: "Review",
    title: "當代藝術的「集體」，是在地共生或品牌行銷？",
    source: "The Reporter",
    href: "https://www.twreporter.org/a/photo-2025-jogja-biennale-kawruh-smooth-or-rough-collective",
  },
  {
    year: "2025",
    type: "Feature",
    title: "離開展牆，走向土地：在交流中生長的日惹雙年展",
    source: "Museum Island",
    href: "https://museums.moc.gov.tw/InternationalNew/Detail/e8ad2450-dae7-4b99-bea9-7d9b64c81163",
  },
  {
    year: "2025",
    type: "Focus",
    title: "【藝術二分之一：Art kak’i’iyaeh】檔案迴聲與未來拼圖：青年原住民藝術家Posak Jodian與豆宜臻的尋路創作",
    source: "ARTEMPORER",
    href: "https://artemperor.tw/focus/6914",
  },
  {
    year: "2024",
    type: "Video",
    title: "Video documentation",
    source: "YouTube",
    href: "https://youtu.be/vYsl60HToiw?si=OCtog4Y-pLYLFbwO",
  },
  {
    year: "2023",
    type: "Interview",
    title: "2023 Pulima藝術獎得主專訪：她們如何尋找原民性的新敘事認同？",
    source: "ARTouch",
    href: "https://artouch.com/art-views/content-114819.html",
  },
  {
    year: "2023",
    type: "Interview",
    title: "Radiw Misafafahiyan and Radiw No Orip",
    source: "CLABO Experimental Waves",
    image: "/pro/news/clabo.webp",
    href: "https://mag.clab.org.tw/clabo-article/radiw-misafafahiyan-and-radiw-no-orip/",
  },
  {
    year: "2021",
    type: "Award",
    title: "Pulima Art Award",
    source: "Pulima",
    href: "https://www.pulima.com.tw/websites/Pulima/xxxx_21111514310733457.aspx?fbclid=IwAR3p7OjUtI-0CeYdGoLA8VFfHQFUoueGvpBvE48y1jwelB2CkOiLz48b75g",
  },
];

export const pressItems = [
  {
    year: "2026",
    type: "Review",
    title: "WE Are Becoming",
    source: "CLABO Experimental Waves",
    href: "https://mag.clab.org.tw/clabo-article/we-are-becoming/",
  },
  {
    year: "2025",
    type: "Review",
    title: "當代藝術的「集體」，是在地共生或品牌行銷？──2025日惹雙年展《Kawruh》現場觀察",
    source: "The Reporter",
    href: "https://www.twreporter.org/a/photo-2025-jogja-biennale-kawruh-smooth-or-rough-collective",
  },
  {
    year: "2025",
    type: "Feature",
    title: "離開展牆，走向土地：在交流中生長的日惹雙年展",
    source: "Museum Island",
    href: "https://museums.moc.gov.tw/InternationalNew/Detail/e8ad2450-dae7-4b99-bea9-7d9b64c81163",
  },
  {
    year: "2025",
    type: "Focus",
    title: "【藝術二分之一：Art kak’i’iyaeh】檔案迴聲與未來拼圖：青年原住民藝術家Posak Jodian與豆宜臻的尋路創作",
    source: "ARTEMPORER",
    href: "https://artemperor.tw/focus/6914",
  },
  {
    year: "2024",
    type: "Video",
    title: "kak’i’iyaeh：行動，煉化成藝術的光",
    source: "YouTube",
    href: "https://youtu.be/vYsl60HToiw?si=OCtog4Y-pLYLFbwO",
  },
  {
    year: "2023",
    type: "Interview",
    title: "2023Pulima藝術獎得主專訪：她們如何尋找原民性的新敘事認同？",
    source: "ARTouch",
    href: "https://artouch.com/art-views/content-114819.html",
  },
  {
    year: "2023",
    type: "Interview",
    title: "Radiw（歌謠）、Misafafahiyan（蛻變），和那些用歌說故事的人",
    source: "CLABO Experimental Waves",
    image: "/pro/news/clabo.webp",
    href: "https://mag.clab.org.tw/clabo-article/radiw-misafafahiyan-and-radiw-no-orip/",
  },
  {
    year: "2021",
    type: "Award",
    title: "用身體經驗一條河—Posak Jodian「Lakec渡河」計畫",
    source: "Pulima",
    href: "https://www.pulima.com.tw/websites/Pulima/xxxx_21111514310733457.aspx?fbclid=IwAR3p7OjUtI-0CeYdGoLA8VFfHQFUoueGvpBvE48y1jwelB2CkOiLz48b75g",
  },
];

export const texts = [
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

export const awards = [
  [
    "2023",
    "《Misafafahiyan 蛻變》獲 Pulima 藝術獎評審獎",
    "Misafafahiyan Metamorphosis received a Jury Award in the Pulima Art Award.",
  ],
  [
    "2021",
    "《Lakec 系列》獲 Pulima 藝術獎優選",
    "Lakec series received an Excellent Work Award in the Pulima Art Award.",
  ],
];

export const cvExhibitions = [
  ["2026", "《Misafafahiyan - Teman dari Jauh》，〈熱暑人－熱／暑的文化與當代藝術〉，臺中市立美術館，台中，台灣", "Misafafahiyan - Friend from Afar, “Horizon Ablaze”, Taichung Museum of Art, Taichung, Taiwan."],
  ["2026", "《在那幾乎看不見光的屋裡》，C-LAB 年度大展〈我們正成為〉，臺灣當代文化實驗場 (C-LAB)，台北，台灣", "Within the Unlit House, 2026 Annual Exhibition “WE Are Becoming”, Taiwan Contemporary Culture Lab (C-LAB), Taipei, Taiwan."],
  ["2025", "《Misafafahiyan - Teman dari Jauh》，BIENNALE JOGJA 18〈KAWRUH：紮根實踐之地〉，Toko Purnama，日惹，印尼", "Misafafahiyan - Friend from Afar, Biennale Jogja 18 “KAWRUH: Land of Rooted Practices”, Toko Purnama, Yogyakarta, Indonesia."],
  ["2025", "《山裡有隻白色的鹿》，2025綠島人權藝術季〈一四九海浬的時間：對抗遺忘〉，綠島國家人權博物館，綠島，台灣", "There is a white deer in the mountain, Green Island Biennial 2025 “Duration of 149 Sea Miles: The Struggle of Memory against Forgetting”, National Human Rights Museum, Green Island, Taiwan."],
  ["2025", "《Misafafahiyan 蛻變》〈往來/照見〉，新北市美術館，新北市，台灣", "Misafafahiyan Metamorphosis, “NTCAM Collection: Encounters in Reflection”, New Taipei City Art Museum, New Taipei City, Taiwan."],
  ["2025", "《Lakec》，〈往來/照見〉，新北市美術館，新北市，台灣", "Lakec, “NTCAM Collection: Encounters in Reflection”, New Taipei City Art Museum, New Taipei City, Taiwan."],
  ["2024", "《Lakec 系列》〈Kalentura/Fever/Tioh-sua〉，絕對空間，台南，台灣", "Lakec series, “Kalentura/Fever/Tioh-sua”, Absolute Space, Tainan, Taiwan."],
  ["2024", "《Misafafahiyan 蛻變》，〈壞戀：情動身體的誤讀與蜚語〉，水谷藝術，台北，台灣", "Misafafahiyan Metamorphosis, “Bad Romance: Affective Body with its Misconceptions and Rumours”, Waley Art, Taipei, Taiwan."],
  ["2024", "《Lakec》，〈Fever Dream〉，El Museo de Arte Contemporáneo de Panamá (MAC Panamá)，巴拿馬，巴拿馬", "Lakec, “Fever Dream”, El Museo de Arte Contemporáneo de Panamá (MAC Panamá), Provincia de Panamá, Panamá."],
  ["2024", "《Lakec》，〈Fever Dream〉，UP Vargas Museum，馬尼拉，菲律賓", "Lakec, “Fever Dream”, UP Vargas Museum, Manila, Philippines."],
  ["2023", "《Misafafahiyan 蛻變》，2023 Pulima 藝術節—酷兒主題展〈情山色海：酷兒・原民・秘密史〉，花蓮文化創意展業園區，花蓮，台灣", "Misafafahiyan Metamorphosis, 2023 Pulima Art Festival “Amorous Mountains, Erotic Seas: Queer, Indigene, and the Hidden History”, Hualien Creative and Cultural Industries Park, Hualien, Taiwan."],
  ["2023", "《Misafafahiyan 蛻變》，Jogja Fotografis Festival〈Frame〉，Gallery R.J. Katamsi ISI，日惹，印尼", "Misafafahiyan Metamorphosis, Jogja Fotografis Festival “Frame”, Galeri R. J. Katamsi, Yogyakarta, Indonesia."],
  ["2023", "《Misafafahiyan 蛻變》，〈海洋與詮釋者〉，Britto Arts Trust，孟加拉，達卡", "Misafafahiyan Metamorphosis, “The Oceans and the Interpreters”, Britto Arts Trust, Dhaka, Bangladesh."],
  ["2022", "《Misafafahiyan 蛻變》，〈海洋與詮釋者〉，本事藝術，台北，台灣", "Misafafahiyan Metamorphosis, “The Oceans and the Interpreters”, Solid Art, Taipei, Taiwan."],
  ["2022", "《Lakec: A Very Simple River》，〈另一座板塊〉，台東美術館，台灣", "Lakec: A Very Simple River, “Another Continent”, Taitung Art Museum, Taitung, Taiwan."],
  ["2021", "《Lakec: A Very Simple River》，〈海洋與詮釋者–詮釋者放映計畫：神秘之島〉，鳳甲美術館，台北，台灣", "Lakec: A Very Simple River, “The Oceans and the Interpreters’ Screening II: The Mysterious Island”, Hong-gah Museum, Taipei, Taiwan."],
  ["2020", "《Lakec: A Very Simple River》，群島資料庫計畫，〈秘密南方〉，台北市立美術館，台北，台灣", "Lakec: A Very Simple River, participated in Nusantara Archive project, “The Secret South”, Taipei Fine Arts Museum, Taipei, Taiwan."],
  ["2019", "《Palm Trees, Helicopters, the Boulder, and the Storyteller》收錄於群島資料庫計畫，刊登於 No Man’s Land 線上平台", "Palm Trees, Helicopters, the Boulder, and the Storyteller included in Nusantara Archive, published on the No Man’s Land online platform."],
  ["2019", "《Bitter Sweet》，打開-當代藝術工作站計畫，2019亞洲藝術雙年展〈來自山與海的異人〉，台中，台灣", "Bitter Sweet, participated in Open Contemporary Art Center (OCAC)’s project “Deposits of the Island”, 2019 Asian Art Biennial: The Strangers from beyond the Mountain and the Sea, Taiwan Museum of Fine Arts, Taichung, Taiwan."],
  ["2018", "《Lakec》，A+ WORKS of ART〈A+ Online Festival of Video Art〉，吉隆坡，馬來西亞", "Lakec, “A+ Online Festival of Video Art”, Kuala Lumpur, Malaysia."],
  ["2018", "《Lakec》，〈邊境旅行 PETAMU Project〉，打開-當代藝術工作站，台北，台灣", "Lakec, “PETAMU Project”, Open Contemporary Art Center (OCAC), Taipei, Taiwan."],
];
