import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // 引入淡入淡出效果的樣式
import "swiper/css/navigation";
import "swiper/css/thumbs";

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
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // 使用 useState 儲存縮略圖 Swiper 實例

  return (
    <div className="w-full">
      {/* 主 Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, EffectFade, Navigation, Thumbs]}
        className="heroSwiper"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.Image}
              alt=""
              className="w-2/8 h-2/3 object-cover bg-center p-2 m-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 縮略圖 Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper} // 設定縮略圖 Swiper 實例
        spaceBetween={10}
        slidesPerView={3}
        freeMode={false} // 關閉 freeMode，使得縮略圖保持同步
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumbSwiper mt-4"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.Image}
              alt=""
              className={`w-full h-20 object-cover p-1 m-auto ${
                thumbsSwiper && thumbsSwiper.activeIndex === index // 確保 thumbsSwiper 不為 null
                  ? "opacity-100"
                  : "opacity-50 grayscale"
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Misaswiper;
