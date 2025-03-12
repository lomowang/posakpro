import React from "react";
import Projectswiper from "./Projectswiper";

const Hero = () => {
  return (
    <section className="bg-black w-full min-h-[30vh] md:min-h-[60vh] lg:min-h-[0vh] flex justify-center items-center">
      <div className="w-full max-w-7xl h-full ">
        <Projectswiper />
      </div>
    </section>
  );
};

export default Hero;
