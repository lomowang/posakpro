import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

// ✅ 圖片資料陣列
const work = [
  {
    Image: "/pro/river4.png",
    name: "river,2020",
    url: "/workpage/Simpleriver",
  },
  {
    Image: "/pro/Simpleriver/river_3.png",
    name: "river,2020",
    url: "/workpage/Simpleriver",
  },
  {
    Image: "/pro/Simpleriver/river_6.png",
    name: "river,2020",
    url: "/workpage/Simpleriver",
  },
  {
    Image: "/pro/Misafafahiyan_14.jpeg",
    name: "Misafafahiyan Metamorphosi,2020",
    url: "/workpage/Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan/Misafafahiyan_1.jpeg",
    name: "Misafafahiyan Metamorphosi,2020",
    url: "/workpage/Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan/Misafafahiyan_9.jpeg",
    name: "Misafafahiyan Metamorphosi,2020",
    url: "/workpage/Misafafahiyan",
  },
  {
    Image: "/pro/Lakec/lakec_5.png",
    name: "lake,2018",
    url: "/workpage/Lakec",
  },
  {
    Image: "/pro/Lakec/lakec_2.jpg",
    name: "lake,2018",
    url: "/workpage/Lakec",
  },
  {
    Image: "/pro/Lakec/lakec_3.png",
    name: "lake,2018",
    url: "/workpage/Lakec",
  },
];

const Projectswiper = () => {
  // ✅ RWD 判斷：手機 / 平板 / 桌機
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ 手機只顯示第 2、4、8 張
  const mobileWork = isMobile ? [work[1], work[3], work[7]] : work;

  return (
    <div className="w-full flex justify-center ">
      {isMobile ? (
        // ✅ 手機模式：直列 3 張圖片
        <div className="flex flex-col gap-4 items-center">
          {mobileWork.map((slide, index) => (
            <Link href={slide.url} key={index} className="w-full max-w-md">
              <div className="relative w-full h-[45vh] overflow-hidden">
                {/* 圖片完整呈現、不裁切 */}
                <Image
                  src={slide.Image}
                  alt={slide.name}
                  width={1000}
                  height={600}
                  quality={75}
                  className="w-full h-full object-contain"
                  style={{ objectPosition: "center" }}
                />
                {/* 文字標題浮層 */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg shadow-lg">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] tracking-wide font-semibold">
                    {slide.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // ✅ 平板與桌機模式：使用 Swiper 輪播
        <Swiper
          spaceBetween={isDesktop ? 50 : 30} // 間距：桌機較寬
          centeredSlides={!isDesktop} // 桌機不置中，平板置中
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={true}
          modules={[Autoplay, EffectFade, Navigation]}
          className="heroSwiper w-full px-4"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: false,
            },
          }}
        >
          {work.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.url}>
                <div
                  className={`relative overflow-hidden mx-auto
                    ${
                      isDesktop
                        ? "w-screen h-[80vh]" // ✅ 桌機尺寸
                        : isTablet
                        ? "w-[900px] h-[60vh]" // ✅ 平板尺寸
                        : "w-[90%] h-[55vh]" // ✅ 其他裝置 fallback
                    }`}
                >
                  {/* 圖片裁切鋪滿，維持視覺張力 */}
                  <Image
                    src={slide.Image}
                    alt={slide.name}
                    width={1600}
                    height={900}
                    quality={75}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center" }}
                  />
                  {/* 標題 */}
                  <div className="absolute bottom-2 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg shadow-lg">
                    <h3 className="text-[18px] md:text-[22px] lg:text-[18px] tracking-wide font-semibold">
                      {slide.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Projectswiper;
