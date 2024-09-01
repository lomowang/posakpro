import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from "react";

const Press = () => {
  return (
    <section className="flex flex-col space-y-16 p-4 m-8 lg:m-40">
      {/* CLABO實驗波 – 臺灣當代文化實驗場 2023/ May */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            CLABO實驗波 – 臺灣當代文化實驗場 2023/ May
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <p>發布日期2023.05.09</p>
              <p>撰文 鄭文琦</p>
            </li>
            <li>
              <Link
                href="https://mag.clab.org.tw/clabo-article/radiw-misafafahiyan-and-radiw-no-orip/"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                more
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/pro/clabo.JPG"
            layout="responsive"
            width={800}
            height={270}
            alt="Bad Romance"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Press;
