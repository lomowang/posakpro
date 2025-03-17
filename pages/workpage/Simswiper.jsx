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
    Image: "/pro/Simswiper_4.png",
    neme: "Simswiper",
  },
];

const Simswiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // 使用 useState 儲存縮略圖 Swiper 實例

  return (
    <div className="w-full">
      {/* 主 Swiper */}
      <Swiper
        slidesPerView={1} // 一次顯示一張幻燈片
        spaceBetween={10} // 幻燈片之間的間距設置為 10px
        autoplay={{
          delay: 2500, // 每張幻燈片停留 2500 毫秒
          disableOnInteraction: false, // 使用者交互後不禁用自動播放
        }}
        loop={true} // 啟用無限循環播放
        effect={"fade"} // 使用淡入淡出效果
        fadeEffect={{
          crossFade: true, // 啟用交叉淡入淡出效果
        }}
        navigation={true} // 啟用導航按鈕
        thumbs={{ swiper: thumbsSwiper }} // 與縮略圖 Swiper 連動
        modules={[Autoplay, EffectFade, Navigation, Thumbs]} // 添加 Autoplay, EffectFade, Navigation 和 Thumbs 模塊
        className="heroSwiper"
        onSlideChange={(swiper) =>
          thumbsSwiper && thumbsSwiper.slideTo(swiper.activeIndex)
        } // 當主 Swiper 更改時，縮略圖也更新
      >
        {work.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.Image}
              alt={slide.name} // 為 img 元素添加描述性文字
              className="w-full max-w-xl h-auto object-contain bg-center p-2 m-auto" // 調整圖片尺寸，添加 max-w-xl 和 h-auto 確保圖片不會過大且保持比例
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 縮略圖 Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper} // 設定縮略圖 Swiper 實例，與主 Swiper 連動
        spaceBetween={2} // 幻燈片之間的間距設置為 2px，進一步減少間距使縮略圖不過於分散
        slidesPerView={4} // 一次顯示三個縮略圖
        freeMode={false} // 開啟 freeMode，使縮略圖自由滑動
        watchSlidesProgress={true} // 觀察縮略圖進度
        watchSlidesVisibility={true} // 觀察縮略圖的可見性，確保同步更新
        modules={[Thumbs]} // 添加 Thumbs 模塊
        className="thumbSwiper mt-4  "
        style={{ width: "800px m-auto" }}
      >
        {work.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => thumbsSwiper && thumbsSwiper.slideTo(index)}
          >
            {" "}
            {/* 點擊縮略圖後更新主 Swiper */}
            <img
              src={slide.Image}
              alt={slide.name} // 為縮略圖添加描述性文字
              className="w-full max-w-xl h-auto object-contain p-2 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Simswiper;
