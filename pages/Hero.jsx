import React from "react";
import Projectswiper from "./Projectswiper";

const Hero = () => {
  return (
    <section className="bg-black w-full min-h-[20vh] md:min-h-[60vh] lg:min-h-[80vh] flex justify-center items-center">
      <div className="w-full sm:max-w-3xl lg:max-w-5xl h-full">
        <Projectswiper />
      </div>
    </section>
  );
};

export default Hero;
