import React from "react";

const exhibitions = [
  {
    title:
      "2008 Self-portrait showed at Hualien Creative and Cultural Industries Park.",
  },
  {
    title: "2011 Story of Bai published on Taiwan Indigenous TV (TITV).",
  },
  {
    title:
      "2018 Lakec showed at Open Contemporary Art Center’s (OCAC) “PETAMU Project”",
  },
  {
    title:
      "2018 Lakec showed at A+ WORKS of ART “A+ Online Festival of Video Art”",
  },
  {
    title:
      "2019 Bitter Sweet participated in Open Contemporary Art Center’s project, showed at Taiwan Museum of Fine Arts",
  },
  {
    title:
      "2019 Asian Art Biennial:The Strangers from beyond the Mountain and the Sea",
  },
  {
    title:
      "2019 Palm Trees, Helicopters, the Boulder, and the Storyteller Included in Nusantara Archive, published on the “Nomansland” online platform",
  },
  {
    title:
      "2020 Lakec: A Very Simple River participated in Nusantara Archive，showed at Taipei Fine Arts Museum “The Secret South”",
  },
  {
    title:
      "2021 Lakec project published on ACT 85. Indigenous Fields, Contemporary Transformations: Indigeneity in Arts and Confusions in Plurality, in the “Remapping- Paper Exhibition",
  },
  {
    title: "2021 Lakec project published on Pulima Link “Remapping”",
  },
  {
    title:
      "2021 Lakec project received an Excellent Work Awards in Pulima Art Award",
  },
  {
    title:
      "2021 Lakec: A Very Simple River showed at Hong-gah Museum “The Oceans and the Interpreters Interpreters’ Screening II: The Mysterious Island”",
  },
  {
    title:
      "2022 Lakec: A Very Simple River showed at Taitung Art Museum “Another Continent”",
  },
  {
    title:
      "2022 Misafafahiyan Metamorphosis showed at Solid Art “Ocean and Interpreters”",
  },

  {
    title:
      "2012 Naruwan-Life finds a way—Taiwan Indigenous Artists Exhibition.",
  },

  {
    title:
      "2023 Misafafahiyan Metamorphosis showed at Britto Arts Trust “Ocean and Interpreters” in Dhaka, Bangladesh",
  },
  {
    title:
      "2023 Misafafahiyan Metamorphosis received an Jury Award in Pulima Art Award",
  },
  {
    title:
      "2023 Misafafahiyan Metamorphosis showed at Jogja Fotografis Festival “Frame” in Yogyakarta, indonesia",
  },
  {
    title:
      "2023 Misafafahiyan Metamorphosis showed at Hualien Creative and Cultural Industries Park",
  },
  {
    title:
      "2023 Pulima Art Festival “Amorous Mountains, Erotic Seas: Queer, Indigene, and the Hidden History” ",
  },
];

const Cvexperience = ({ item }) => {
  return (
    <section className="leading-4">
      <div></div>
      {exhibitions.map((item, index) => {
        return (
          <section>
            <ul key={index} className="mt-4 list-none ">
              <p>
                <span></span>
                {item.title}
              </p>
              <p>{item.enname}</p>
            </ul>
          </section>
        );
      })}
      {/* <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className=""
      >
        {exhibitions.map((item, index) => {
          return (
            <section>
              <ul key={index} className="mt-4 list-none ">
                <p>
                  <span></span>
                  {item.title}
                </p>
                <p>{item.enname}</p>
              </ul>
            </section>
          );
        })}
      </motion.div> */}
    </section>
  );
};

export default Cvexperience;
