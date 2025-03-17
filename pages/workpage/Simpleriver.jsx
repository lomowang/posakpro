import React from "react";
import Simswiper from "./Simswiper";

function Simpleriver() {
  return (
    <section className="max-w-screen-xl m-auto">
      <Simswiper />

      <div className="flex p-6 justify-center text-justify	">
        <div className="w-full m-2 ">
          <h2 className="leading-8 xl:text-sm text-[14px] text-gray-700">
            Posak Jodian | 2020 | Taiwan | 14’32”
          </h2>
          <p className="border-b-2 mt-2"></p>
          <p className="pb-2 font-bold text-[18px]">
            Lakec:A Very Simple River
          </p>
          <p className="text-[16px] leading-[40px]">
            Posak Jodian’s first work about the Malay Peninsula. Through the
            “writing" of the lens to capture the essence of the river. This work
            , a journey into the heart of Malaysia’s indigenous communities,
            focuses on the Jakun people of the Peninsula. Drawing from their
            oral stories and lived experiences, Posak intricately weaves a
            narrative that interplay between the documented and the undocumented
            within the collective memory of the Jakun community. A landscape
            existing in the subtle realm between tangible and intangible
            geographies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Simpleriver;
