import Image from "next/image";
import React from "react";
import Records from "./Records";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Profile = () => {
  return (
    <section className="text-justify">
      <div className=" flex flex-col items-center m-4 ">
        <h2 className="text-2xl font-bold">導演介紹</h2>
        <h2>Profile</h2>
      </div>

      <div className="xl:flex  xl:justify-around ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="xl:w-3/5  "
        >
          <Image
            src="/Profile.jpg"
            layout="responsive"
            width={800}
            height={270}
            alt="Profile"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-center items-center m-4"
        >
          <h2 className="text-2xl">Rngrang Hungul</h2>
          <p className="flex justify-center items-center m-4 text-base">
            余欣蘭
          </p>
        </motion.div>
      </div>

      <div className=" xl:flex text-sm leading-8 xl:m-8 ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="xl:w-4/6 m-8"
        >
          <p>
            余欣蘭，1987年生，花蓮銅門部落太魯閣族，族語名字為Rngrang．Hungul，畢業於國立東華大學民族語言與傳播學系。創作以長期地田野影像為基礎，關注族群在當代所面臨的議題為出發，擅長從女性的視角出發，將部落中的日常處境與親密的個人經驗轉化為創作元素，以此辯證出個體在當代社會中重新連接傳統文化的定位與方法。
            <br></br>
            余欣蘭從《Mgaluk
            Dowmung正在連結銅門—銅門部落家族故事影像紀錄》延伸出女獵人系列支線，記錄母親走入山林狩獵過程，完成兩部作品《我是女人,我是獵人：筆記版》與《山上的人》，並製作《揹獵物的女人》紀錄長片，持續關注當代原住民的狩獵議題。2022年《我是女人，我是獵人：筆記版》獲得「MATA
            TIFF
            台灣原住民族文化影視節」新視野影像競賽首獎；《山上的人》獲得「花蓮短片創作獎」最佳導演獎、評審團特別獎等獎項。
          </p>
          <br></br>
          <p>
            YU Hsin-lan, originated from the Truku tribe, whose ethnic name is
            Rngrang·Hungul, Rngrang being her first name and Hungul in her
            father’s name.
            <br></br>
            Rngrang’s works are based on long-term visual fieldwork and focus on
            contemporary issues of indigenous people. She excels in transforming
            daily situations and intimate personal experiences of the tribe into
            creative elements from a woman’s perspective, thereby debating the
            positioning and methods of reconnecting individuals with traditional
            culture in contemporary society. Her recent works include “Mgaluk
            Dowmung, Connecting with Dowmung”, “Woman the Hunter”, “The Woman
            Carrying the Prey” , ”Mountain Keepers”.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className=" flex flex-col   xl:w-1/2 p-8"
        >
          <h2 className="flex flex-col justify-center items-center font-bold ">
            展覽與獎項
          </h2>
          <p className="flex flex-col justify-center items-center font-bold leading-8 ">
            AWARDS AND PUBLICATION RECORDS
          </p>

          <div>
            <Records />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
