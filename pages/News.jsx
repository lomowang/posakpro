import React from "react";
import Exhibition from "@/components/ui/Exhibition";

const News = () => {
  const exhibitions = [
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
