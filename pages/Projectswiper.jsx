import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Link from "next/link";

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
    name: "Misafafahiyan,2020",
    url: "/workpage/Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan/Misafafahiyan_1.jpeg",
    name: "Misafafahiyan,2020",
    url: "/workpage/Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan/Misafafahiyan_9.jpeg",
    name: "Misafafahiyan,2020",
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
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // 偵測螢幕大小
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 小於 768px (手機模式)
      setIsDesktop(window.innerWidth >= 1024); // 1024px 以上 (桌機模式)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // **手機模式時，只取前三張圖片**
  const mobileWork = isMobile ? [work[1], work[3], work[7]] : work;

  return (
    <div className="w-full flex justify-center">
      {isMobile ? (
        // ✅ **手機模式：只顯示 3 張圖片並以直列方式排列**
        <div className="flex flex-col gap-4 items-center">
          {mobileWork.map((slide, index) => (
            <Link href={slide.url} key={index} className="w-full max-w-md">
              <div className="relative w-full h-[50vh] overflow-hidden">
                <img
                  src={slide.Image}
                  alt={slide.name}
                  className="w-full h-full object-contain"
                />
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
        // ✅ **桌機模式：使用 Swiper 播放全部 9 張圖片**
        <Swiper
          spaceBetween={isDesktop ? 50 : 30} // 桌機模式增加間距
          centeredSlides={true} // ✅ **確保 Swiper 圖片置中**
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          navigation={true}
          modules={[Autoplay, EffectFade, Navigation]}
          className="heroSwiper"
          breakpoints={{
            768: {
              slidesPerView: 2, // 平板顯示 2 張
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // 桌機顯示 3 張
              spaceBetween: 50,
            },
          }}
        >
          {work.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.url}>
                <div
                  className={`relative max-w-[190vh] overflow-hidden ${
                    isDesktop ? "w-[90vw] h-auto" : "h-[75vh] md:h-[85vh]"
                  }`}
                >
                  <img
                    src={slide.Image}
                    alt={slide.name}
                    className={`w-full max-h-[80vh] object-contain ${
                      isDesktop ? "h-auto max-h-[50vh]" : "h-full"
                    } object-cover`}
                  />
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
