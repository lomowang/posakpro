import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const work = [
  { Image: "/pro/Misafafahiyan_1.jpeg", name: "Misafafahiyan" },
  { Image: "/pro/Misafafahiyan_14.jpeg", name: "Misafafahiyan" },
  { Image: "/pro/Misafafahiyan_4.jpeg", name: "Misafafahiyan" },
  { Image: "/pro/Misafafahiyan/Misafafahiyan_9.jpeg", name: "Misafafahiyan" },
  { Image: "/pro/Misafafahiyan/Misafafahiyan_11.jpeg", name: "Misafafahiyan" },
  { Image: "/pro/Misafafahiyan/Misafafahiyan_16.jpg", name: "Misafafahiyan" },
  { Image: "/pro/Misafafahiyan/Misafafahiyan_18.jpeg", name: "Misafafahiyan" },
];

const Misaswiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        loopedSlides={work.length} // ✅ 讓 loop 有足夠的備份 Slide 以避免 index 錯亂
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, EffectFade, Navigation, Thumbs]}
        className="heroSwiper"
        onSlideChange={
          (swiper) => thumbsSwiper && thumbsSwiper.slideToLoop(swiper.realIndex) // ✅ 用 realIndex 確保同步
        }
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

      {/* 縮略圖 Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={2}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        loopedSlides={work.length} // ✅ 同樣套用 loopedSlides
        modules={[Thumbs]}
        className="thumbSwiper mt-2"
        style={{ width: "800px", margin: "0 auto" }} // ✅ 修正 style 語法錯誤
      >
        {work.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => thumbsSwiper && thumbsSwiper.slideToLoop(index)} // ✅ 必須使用 slideToLoop
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

export default Misaswiper;
