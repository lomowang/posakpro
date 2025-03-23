import React from "react";
import Projectswiper from "./Projectswiper";

const Hero = () => {
  return (
    <section className="bg-black w-full min-h-[20vh] md:min-h-[60vh] lg:min-h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-screen-xl px-4 h-full mx-auto">
        <Projectswiper />
      </div>
    </section>
  );
};

export default Hero;
