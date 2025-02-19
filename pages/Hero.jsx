import React from "react";
import Projectswiper from "./Projectswiper";

const Hero = () => {
  return (
    <section className="bg-black w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-7xl h-[80vh]">
        <Projectswiper />
      </div>
    </section>
  );
};

export default Hero;
