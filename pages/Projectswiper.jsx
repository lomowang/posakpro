import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules"; // 引入 Navigation 模块
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation"; // 引入导航样式
import Image from "next/image";

const work = [
  {
    Image: "/pro/river4.png",
    neme: "river",
  },
  {
    Image: "/pro/Misafafahiyan_1.jpeg",
    neme: "Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan_14.jpeg",
    neme: "Misafafahiyan",
  },
  {
    Image: "/pro/lacke.png",
    neme: "lacke",
  },
];

const Projectswiper = () => {
  return (
    <div className="w-full relative">
      {/* 导航按钮 */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <Swiper
        slidesPerView={3}
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
        navigation={true} // 启用导航功能
        modules={[Autoplay, EffectFade, Navigation]} // 添加 Navigation 模块
        className="heroSwiper"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.Image}
              alt={slide.neme}
              className="w-screen	h-screen object-cover bg-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projectswiper;
