"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";

const work = [
  {
    Image: "/DuckEggs.jpg",
    neme: "DuckEggs",
    title: "2023-2024鴨蛋與Gaya—召喚",
    text: "2023-2024 Duck Eggs and Gaya – The Calling",
    info: "Taiwan｜2023-2024 | continued",
    language: "Truku、Chinese｜CH&EN subtitles",
    url: "/workpage/Duck",
  },
  {
    Image: "/TheWomanCarryingthePrey.jpg",
    neme: "TheWomanCarryingthePrey",
    title: "揹獵物的女人",
    text: "The Woman Carrying the Prey",
    info: "Taiwan｜2023-2024 | continued",
    language: "Truku、Chinese｜CH&EN subtitles",
    url: "/UpcomingEvents",
  },
  {
    Image: "/MountainKeepers.jpg",
    neme: "MountainKeepers",
    title: "山上的人",
    text: "Mountain Keepers",
    info: "Taiwan｜2023-2024 | continued",
    language: "Truku、Chinese｜CH&EN subtitles",
    url: "/UpcomingEvents",
  },
  {
    Image: "/Edition.jpg",
    neme: "Edition",
    title: "我是女人，我是獵人：筆記版",
    text: "Yaku o kuyuh , maduk ku kuyuh",
    textEng: "I’m a Woman, and Also a Hunter.: The Director’s Edition.",
    info: "Taiwan｜2022｜FHD｜Colour｜20min｜",
    language: "Truku、Chinese｜CH&EN subtitles",
    url: "/UpcomingEvents",
  },
  {
    Image: "/Videowork.png",
    neme: "Videowork",
    title: "我是女人，我是獵人：錄像作品",
    text: "Yaku o kuyuh , maduk ku kuyuh",
    textEng: "I’m a Woman, and Also a Hunter:Video work",
    info: "Taiwan｜2022｜FHD｜Colour｜17min｜",
    language: "Truku、Chinese｜CH&EN subtitles",
    url: "/UpcomingEvents",
  },

  {
    Image: "/MgalukDowmung.JPG",
    neme: "MgalukDowmung",
    title: "Mgaluk Dowmung正在連結銅門—銅門部落家族故事影像紀錄",
    text: "Mgaluk Dowmung, the documentary about the Tongmen family",
    info: "Taiwan｜2020｜FHD｜Colour｜63min｜",
    language: "Truku、Chinese｜CH&EN subtitles",
    url: "/UpcomingEvents",
  },
  {
    Image: "/Dream.jpg",
    neme: "Dream",
    title: "夢系列——肉",
    text: "The Dream Series-Flesh",
    info: "Taiwan｜2011｜DV｜Colour｜8分50秒｜無聲｜單頻道錄像 Single channel video",
    url: "/UpcomingEvents",
  },
];

const Project = () => {
  return (
    <div className="flex flex-wrap justify-center leading-8 ">
      {work.map((video, index) => (
        <div key={index} className="m-4 ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <Image
              src={video.Image}
              width={600}
              height={270}
              alt={video.title}
              className="bg-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <h2 className="font-bold">{video.title}</h2>
            <h3 className="font-semibold text-sm">{video.text}</h3>
            <h3 className="font-bold text-sm leading-8">{video.textEng}</h3>
            <p className="text-base leading-8">{video.info}</p>
            <p className="text-sm leading-8">{video.language}</p>
            <p>
              <Link href={video.url}>作品介紹Works</Link>
            </p>
            <a className="font-bold leading-8"></a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Project;
