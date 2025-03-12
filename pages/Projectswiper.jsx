import React from "react";
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
    Image: "/pro/Misafafahiyan_14.jpeg",
    name: "Misafafahiyan,2020",
    url: "/workpage/Misafafahiyan",
  },
  {
    Image: "/pro/lacke.png",
    name: "lacke,2018",
    url: "/workpage/Lakec",
  },
];

const Projectswiper = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* 導航按鈕 */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="heroSwiper"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.url}>
              <div className="relative w-full h-full cursor-pointer overflow-hidden">
                <img
                  src={slide.Image}
                  alt={slide.name}
                  className="w-full h-full object-cover"
                />
                {/* 主題名稱 */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[18px] tracking-wide font-semibold">
                    {slide.name}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projectswiper;
