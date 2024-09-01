import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper style
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay } from "swiper/modules";
const work = [
  {
    Image: "/DuckEggs.jpg",
    neme: "DuckEggs",
    title: "2023-2024鴨蛋與Gaya—召喚",
    text: "2023-2024 Duck Eggs and Gaya – The Calling",
    info: "Taiwan｜2023-2024 | continued",
    language: "Truku、Chinese｜CH&EN subtitles",
  },
  {
    Image: "/TheWomanCarryingthePrey.jpg",
    neme: "TheWomanCarryingthePrey",
    title: "揹獵物的女人",
    text: "The Woman Carrying the Prey",
    info: "Taiwan｜2023-2024 | continued",
    language: "Truku、Chinese｜CH&EN subtitles",
  },
  {
    Image: "/MountainKeepers.jpg",
    neme: "MountainKeepers",
    title: "山上的人",
    text: "Mountain Keepers",
    info: "Taiwan｜2023-2024 | continued",
    language: "Truku、Chinese｜CH&EN subtitles",
  },
  {
    Image: "/Edition.jpg",
    neme: "Edition",
    title: "我是女人，我是獵人：筆記版",
    text: "Yaku o kuyuh , maduk ku kuyuh",
    textEng: "I’m a Woman, and Also a Hunter.: The Director’s Edition.",
    info: "Taiwan｜2022｜FHD｜Colour｜20min｜",
    language: "Truku、Chinese｜CH&EN subtitles",
  },
  {
    Image: "/Videowork.png",
    neme: "Videowork",
    title: "我是女人，我是獵人：錄像作品",
    text: "Yaku o kuyuh , maduk ku kuyuh",
    textEng: "I’m a Woman, and Also a Hunter:Video work",
    info: "Taiwan｜2022｜FHD｜Colour｜17min｜",
    language: "Truku、Chinese｜CH&EN subtitles",
  },

  {
    Image: "/MgalukDowmung.jpg",
    neme: "MgalukDowmung",
    title: "Mgaluk Dowmung正在連結銅門—銅門部落家族故事影像紀錄",
    text: "Mgaluk Dowmung, the documentary about the Tongmen family",
    info: "Taiwan｜2020｜FHD｜Colour｜63min｜",
    language: "Truku、Chinese｜CH&EN subtitles",
  },
  {
    Image: "/Dream.jpg",
    neme: "Dream",
    title: "夢系列——肉",
    text: "The Dream Series-Flesh",
    info: "Taiwan｜2011｜DV｜Colour｜8分50秒｜無聲｜單頻道錄像 Single channel video",
  },
];

const Workswiper = () => {
  return (
    <div className="w-full  p-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        modules={[Autoplay]}
        className="heroSwiper"
      >
        {work.map((slide) => (
          <SwiperSlide>
            <img
              src={slide.Image}
              alt={slide.title}
              className="w-full h-1280 object-cover bg-center bg-cover"
            />
            <p>{slide.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Workswiper;
