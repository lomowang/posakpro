import React from "react";
import Exhibition from "@/components/ui/Exhibition";

const News = () => {
  const exhibitions = [
    {
      title:
        "一四九海浬的時間：抵抗遺忘(Duration of 149 Sea Miles: The struggle of Memory against Forgetting)",
      dates: "May 17 – Sep 21, 2025",
      location: "國家人權博物館 白色恐怖綠島紀念園區",
      artists: [
        "王德瑜",
        "王虹凱",
        "區秀詒",
        "林書楷",
        "群島資料庫計畫（Posak Jodian、Angga Cipta 、鄭文琦）",
        "長椅小姐 與 李芳吟",
        "太認真",
        "秦政德",
        "許哲瑜",
        "陳武鎮",
        "黃旭宏",
        "群陶亞倫",
        "李奧森",
        "楊傑懷",
        "拉勒俄嵐．巴耷玬（郭悅暘）",
        "李可穎",
        "吳梓安",
        "劉芸怡",
        "Andreja Kulunčić",
        "Bui Cong Khanh",
        "Jean-Ulrick Désert",
        "Pangrok Sulap",
      ],
      image: "/pro/Durationof149SeaＭiles.jpg",
      infoLink: "https://www.nhrm.gov.tw/w/nhrm/News_24111815365642501",
    },
    {
      title: "Bad Romance: Affective Body with its Misconceptions and Rumours",
      dates: "May 11 – June 09, 2024",
      location: "Waley Art, Taipei, Taiwan",
      artists: [
        "Jörgen Axwlvall",
        "Serene Hui",
        "Posak Jodian",
        "Chulayarnnon Siriphol",
        "Fuyuhiko Takata",
      ],
      image: "/pro/Badromance.jpg",
      infoLink: "https://www.facebook.com/events/419124790911287/?ref=newsfeed",
    },
    {
      title: "Fever Dream",
      dates: "May 09 – July 07, 2024",
      location: "UP Vargas Museum, Manila, Philippines",
      artists: [
        "Minia Biabiany",
        "Posak Jodian",
        "Jung Jaekyung",
        "Mark Salvatus",
        "Ana Elena Tejera",
      ],
      image: "/pro/FeverDream.jpg",
      infoLink: "https://vargasmuseum.org/fever-dream/",
    },
  ];

  return (
    <section className="flex flex-col space-y-16 p-4 m-8 lg:m-40">
      {exhibitions.map((exhibition, index) => (
        <Exhibition key={index} {...exhibition} />
      ))}
    </section>
  );
};

export default News;
