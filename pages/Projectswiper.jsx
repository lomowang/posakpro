import React, { useRef } from "react";
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
  const swiperRef = useRef(null); // Swiper 參考

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Swiper */}
      <Swiper
        ref={swiperRef}
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
        navigation={true} // 啟用內建導航按鈕
        modules={[Autoplay, EffectFade, Navigation]}
        className="heroSwiper"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.url}>
              <div className="relative w-full h-[30vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
                <img
                  src={slide.Image}
                  alt={slide.name}
                  className="w-full h-full object-contain"
                />
                {/* 主題名稱 */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg shadow-lg">
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
