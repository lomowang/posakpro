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
    <div className="w-full relative">
      {/* 導航 */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <Swiper
        slidesPerView={3} // 一次顯示 3 個幻燈片
        spaceBetween={0} // 幻燈片之間的間距設置為 0
        autoplay={{
          delay: 2500, // 每個幻燈片停留 2500 毫秒
          disableOnInteraction: false, // 使用者交互後不禁用自動播放
        }}
        loop={true} // 啟用無限循環
        effect={"fade"} // 使用淡入淡出效果
        fadeEffect={{
          crossFade: true, // 啟用交叉淡入淡出效果
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, EffectFade, Navigation]} // 添加 Navigation
        className="heroSwiper"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.url}>
              <div className="relative w-full h-full cursor-pointer">
                <img
                  src={slide.Image}
                  alt={slide.name}
                  className="w-screen h-screen object-cover bg-center"
                />
                {/* 添加主題名稱 */}
                <div className="absolute bottom-2 left-10 bg-opacity-50 text-white p-6 rounded">
                  <h3 className="text-[18px] tracking-wider font-bold">
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
