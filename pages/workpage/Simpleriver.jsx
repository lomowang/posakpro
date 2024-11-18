import React from "react";
import Simswiper from "./Simswiper";

function Simpleriver() {
  return (
    <section className="max-w-screen-xl m-auto">
      <Simswiper />

      <div className="flex p-10 justify-center text-justify	">
        <div className="w-full m-2 ">
          <h2 className="text-base font-bold leading-8">
            Posak Jodian | 2020 | Taiwan | 14’32”
          </h2>
          <br></br>
          <p className="leading-8 text-sm">
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
