import React from "react";
import Cvexperience from "./Cvexperience";

const About = () => {
  return (
    <section className="max-w-screen-xl m-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 m-40">
        <div className="flex-1 ">
          <h2 className="text-[28px] font-bold leading-20">Posak Jodian</h2>
          <p className="text-justify text-sm  leading-6">
            Posak Jodian, an Amis who lives in Taipei. Posak is the given name
            and Jodian is the father’s name. Posak has a background in
            ethnolinguistics and Communication studies. She mainly uses video as
            a method and her own ethnic identity as a starting point, to observe
            the traditional field formulation of tribes and the urban life of
            the aborigines who left their hometown through long-term field
            research. Meanwhile, she participates in the scenes of various mass
            movements, and the various actions of young people in between the
            gaps of cities. Trying to use the ethnic and cultural actions as a
            fulcrum to open the boundaries between identity and recognition.
            Posak’s works can be seen in various types of forms and media, Lakec
            (2018) at Open Contemporary Art Center’s (OCAC) “PETAMU Project”,
            Lakec: A Very Simple River (2020) at the Taitung Art Museum “Another
            Continent”, Lakec project was showcased at ACT 85, Indigenous
            Fields, Contemporary Transformations: Indigeneity in Arts and
            Confusions in Plurality, in the “Remapping- Paper Exhibition"
            (2021), Misafafahiyan Metamorphosis at Solid Art “Ocean and
            Interpreters" (2022). She is also a member of OCAC (Open
            Contemporary Art Center), PMS, Halfway Cafe and Taiwan Haibizi Tent
            Theatre.
          </p>
        </div>
      </div>
      <div className=" xl:flex xl:m-40 ">
        <div className="xl:flex flex-col  text-sm">
          <Cvexperience />
        </div>
      </div>
    </section>
  );
};

export default About;
