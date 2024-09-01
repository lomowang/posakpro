import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // 引入淡入淡出效果的样式
import Image from "next/image";

const work = [
  {
    Image: "/pro/Misafafahiyan_1.jpeg",
    neme: "Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan_14.jpeg",
    neme: "Misafafahiyan",
  },
  {
    Image: "/pro/Misafafahiyan_4.jpeg",
    neme: "Misafafahiyan",
  },
];

const Misaswiper = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"} // 使用淡入淡出效果
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, EffectFade]} // 引入 EffectFade 模块
        className="heroSwiper"
      >
        {work.map(
          (
            slide,
            index // 添加 key 属性
          ) => (
            <SwiperSlide key={index}>
              <img
                src={slide.Image}
                alt=""
                className="w-2/3 h-2/3 object-cover bg-center p-2 m-auto"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Misaswiper;
