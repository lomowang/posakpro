import Image from "next/image";
import React, { useState, useEffect } from "react";
import Projectswiper from "./Projectswiper";

const Hero = () => {
  return (
    <section className="bg-black">
      <Projectswiper />
    </section>
  );
};

export default Hero;
