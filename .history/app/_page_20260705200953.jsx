"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// 引入 Swiper 樣式
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 準備輪播圖的作品資料 (擷取自您的作品頁面設定)
const featuredWorks = [
  {
    id: "lakec",
    title: "Lakec",
    year: "2018",
    image: "/pro/Lakec_1.png", //[cite: 25]
    url: "/workpage/Lakec",
    desc: "Tracing the experience of aboriginal young people who leave home and try to survive in the city.",
  },
  {
    id: "misafafahiyan",
    title: "Misafafahiyan Metamorphosis",
    year: "2022",
    image: "/pro/Misafafahiyan_1.jpeg", //[cite: 27]
    url: "/workpage/Misafafahiyan",
    desc: "Focuses on Hao Hao, a 70-years-old Amis trans performer living in Fata’an.",
  },
  {
    id: "simpleriver",
    title: "Lakec: A Very Simple River",
    year: "2020",
    image: "/pro/Simswiper_1.png", //[cite: 29]
    url: "/workpage/Simpleriver",
    desc: "A journey into the heart of Malaysia’s indigenous communities, focusing on the Jakun people.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  // 使用 Framer Motion 獲取滾動進度 (0 到 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 設定視差效果的變數：背景圖往下移、文字往上移
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);

  return (
    <main className="bg-black min-h-screen text-white overflow-hidden font-light">
      {/* ==========================================
          第一段：滾動視差介紹區 (Parallax Intro)
          ========================================== */}
      <section ref={containerRef} className="relative h-[200vh]">
        {/* 黏性定位的視窗，讓內容固定在螢幕上產生視差 */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* 視差背景圖：藝術家肖像 (暗化處理) */}
          <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
            <div className="absolute inset-0 bg-black/60 z-10"></div>{" "}
            {/* 黑色半透明遮罩 */}
            <Image
              src="/pro/Posak.png"
              alt="Posak Jodian"
              fill
              className="object-cover opacity-50 grayscale" //[cite: 15]
              priority
            />
          </motion.div>

          {/* 視差文字層：藝術家名稱與簡介 */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center px-6 md:px-24 w-full"
            style={{ y: yText, opacity: opacityText }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-6 text-center">
              Posak Jodian
            </h1>
            <p className="text-neutral-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-12 text-center">
              Video Artist / Ethnolinguistics / Amis Identity
            </p>

            {/* 擷取自您原本 About 頁面的介紹文案 */}
            <div className="max-w-2xl text-center">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-300 text-justify md:text-center">
                Posak Jodian, an Amis who lives in Taipei. She mainly uses video
                as a method and her own ethnic identity as a starting point, to
                observe the traditional field formulation of tribes and the
                urban life of the aborigines who left their hometown through
                long-term field research. {/*[cite: 15] */}
              </p>
            </div>

            {/* 提示往下滾動的動態線條 */}
            <motion.div className="mt-24 w-[1px] h-24 bg-neutral-700 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                animate={{ top: ["-50%", "150%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          第二段：滿版輪播與作品排列 (Fullscreen Works Showcase)
          ========================================== */}
      <section className="relative w-full h-screen bg-black z-30">
        <Swiper
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true, type: "progressbar" }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="w-full h-full"
        >
          {featuredWorks.map((work) => (
            <SwiperSlide key={work.id}>
              <div className="relative w-full h-full flex items-end pb-24 md:pb-32 px-6 lg:px-24">
                {/* 滿版背景圖 */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                  {/* 漸層遮罩，確保文字可讀性 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* 浮現的作品資訊 */}
                <div className="relative z-10 max-w-3xl">
                  <p className="text-neutral-400 tracking-widest text-xs md:text-sm mb-4">
                    {work.year} — SELECTED WORK
                  </p>
                  <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight"
                    style={{ fontFamily: "'Adobe Garamond Pro', serif" }} //[cite: 12]
                  >
                    {work.title}
                  </h2>
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mb-10">
                    {work.desc}
                  </p>

                  {/* 進入作品的按鈕 (幽靈按鈕風格) */}
                  <Link
                    href={work.url}
                    className="group inline-flex items-center gap-4 text-white uppercase tracking-widest text-xs"
                  >
                    <span className="h-[1px] w-8 bg-white group-hover:w-16 transition-all duration-500"></span>
                    View Project
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
