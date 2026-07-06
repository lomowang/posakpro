import React from "react";
import Cvexperience from "./Cvexperience";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      {/* ⬆️ 統一 padding，手機與桌機都舒適 */}

      {/* 🧑‍🎨 個人介紹區塊 */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-16 lg:mt-40">
        {/* 左邊：文字區塊 */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold leading-tight">Posak Jodian</h2>

          {/* 介紹段落 */}
          <p className="text-sm leading-6 mt-4 text-justify hyphens-auto">
            Posak Jodian, an Amis who lives in Taipei. Posak is the given name!
            and Jodian is the father’s name. Posak has a background in
            ethnolinguistics and Communication studies. She mainly uses video as
            a method and her own ethnic identity as a starting point, to observe
            the traditional field formulation of tribes and the urban life of
            the aborigines who left their hometown through long-term field
            research. Meanwhile, she participates in the scenes of various mass
            movements, and the various actions of young people in between the
            gaps of cities. Trying to use the ethnic and cultural actions as a
            fulcrum to open the boundaries between identity and recognition.
          </p>

          <p className="text-sm leading-6 mt-4 text-justify hyphens-auto">
            Posak’s works can be seen in various types of forms and media:
            <br />
            <em> Lakec</em> (2018) at Open Contemporary Art Center’s (OCAC)
            “PETAMU Project”,
            <br />
            <em> Lakec: A Very Simple River</em> (2020) at the Taitung Art
            Museum “Another Continent”,
            <br />
            <em> Lakec</em> project was showcased at ACT 85, Indigenous Fields,
            Contemporary Transformations: Indigeneity in Arts and Confusions in
            Plurality, in the “Remapping- Paper Exhibition" (2021),
            <br />
            <em> Misafafahiyan Metamorphosis</em> at Solid Art “Ocean and
            Interpreters" (2022). She is also a member of OCAC (Open
            Contemporary Art Center), PMS, Halfway Cafe and Taiwan Haibizi Tent
            Theatre.
          </p>
        </div>

        {/* 右邊：圖片 */}
        <div className="w-full max-w-sm lg:w-auto">
          <Image
            src="/pro/Posak.png"
            alt="Posak Jodian"
            width={380}
            height={500}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>

      {/* 📧 聯絡方式與社群連結 */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-12">
        <p className="text-sm text-gray-500">posak1987@gmail.com</p>
        <div className="flex items-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com/posakjodian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/posakjodian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* 📝 履歷區塊 */}
      <div className="mt-20 lg:mt-40">
        <Cvexperience />
      </div>
    </section>
  );
};

export default About;
