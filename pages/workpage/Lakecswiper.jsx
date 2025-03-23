import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const work = [
  { Image: "/pro/Lakec_1.png", name: "Lakec" },
  { Image: "/pro/Lakec_2.jpg", name: "Lakec" },
  { Image: "/pro/Lakec_3.png", name: "Lakec" },
  { Image: "/pro/Lakec_4.png", name: "Lakec" },
  { Image: "/pro/Lakec/lakec_5.png", name: "Lakec" },
  { Image: "/pro/Lakec/lakec_6.png", name: "Lakec" },
  { Image: "/pro/Lakec/lakec_7.png", name: "Lakec" },
  { Image: "/pro/Lakec/lakec_8.png", name: "Lakec" },
];

const Lakecswiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* 主 Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopedSlides={work.length} // ✅ 為了配合 thumbs 正確對應
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, EffectFade, Navigation, Thumbs]}
        className="heroSwiper"
        onSlideChange={
          (swiper) => thumbsSwiper && thumbsSwiper.slideToLoop(swiper.realIndex) // ✅ 使用 slideToLoop
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
        loopedSlides={work.length} // ✅ 讓縮圖也對應 loop 模式
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        modules={[Thumbs]}
        className="thumbSwiper mt-2"
        style={{ width: "800px", margin: "0 auto" }} // ✅ 修正 style 寫法
      >
        {work.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => thumbsSwiper && thumbsSwiper.slideToLoop(index)} // ✅ 使用 slideToLoop
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

export default Lakecswiper;
