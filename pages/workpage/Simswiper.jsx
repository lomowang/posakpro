import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // 引入淡入淡出效果的樣式
import "swiper/css/navigation";
import "swiper/css/thumbs";

const work = [
  {
    Image: "/pro/Simswiper_1.png",
    neme: "Simswiper",
  },
  {
    Image: "/pro/Simswiper_2.png",
    neme: "Simswiper",
  },
  {
    Image: "/pro/Simswiper_3.png",
    neme: "Simswiper",
  },
  {
    Image: "/pro/Simpleriver/river_4.png",
    neme: "Simswiper",
  },
  {
    Image: "/pro/Simpleriver/river_5.png",
    neme: "Simswiper",
  },
  {
    Image: "/pro/Simpleriver/river_6.png",
    neme: "Simswiper",
  },
];

const Simswiper = () => {
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
        loopedSlides={work.length} // ✅ 為了 loop thumbs 對應正確
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, EffectFade, Navigation, Thumbs]}
        className="heroSwiper"
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.Image}
              alt={slide.name}
              className="w-full max-w-xl h-auto object-contain bg-center p-2 m-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 縮圖 Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={2}
        slidesPerView={4}
        loopedSlides={work.length} // ✅ 加上這個確保主圖與縮圖同步
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        modules={[Thumbs]}
        className="thumbSwiper mt-2"
        style={{ width: "800px", margin: "0 auto" }} // ✅ 修正 style 語法錯誤
      >
        {work.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => thumbsSwiper && thumbsSwiper.slideToLoop(index)} // ✅ 使用 slideToLoop 替代 slideTo
          >
            <img
              src={slide.Image}
              alt={slide.name}
              className="w-full max-w-xl h-auto object-contain p-2 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Simswiper;
