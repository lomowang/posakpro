import React, { useState, useEffect } from "react";
import Projectswiper from "./Projectswiper";

const Hero = () => {
  return (
    <section className="bg-black w-full h-screen flex justify-center items-center">
      <div className="w-full h-full">
        <Projectswiper />
      </div>
    </section>
  );
};

export default Hero;
