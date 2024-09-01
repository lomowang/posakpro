import React from "react";
import Lakecswiper from "./Lakecswiper";

function Lakec() {
  return (
    <section>
      <Lakecswiper />
      <div className="flex p-10 justify-center text-justify	">
        <div className="w-full m-2 ">
          <h2 className="text-lg font-bold">Posak Jodian | 2018 | 20’34”</h2>
          <br></br>
          <p className="leading-8 text-sm">
            <strong>Lakec</strong> is the inspiration from the memory of Posak’s
            childhood memories of the Amis people who live by the water, and her
            younger brother who comes to work in Taipei from her hometown. It
            traces the experience of many aboriginal young people and even the
            previous generation who leave home and try to survive in the city.
            Further, Posak connects Satefo (Fata’an river) from her hometown and
            the Xiu Bitan that is next to the Xindian River with the image of
            flowing. Through interviews, oral storytelling, myths and songs
            delivered by the tribal people of the two places, it depicts a
            picture of the formable space and life between migratory nomadism
            and the river journey home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Lakec;
