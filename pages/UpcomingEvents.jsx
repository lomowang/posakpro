import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpcomingEvents = () => {
  return (
    <section className="flex flex-col space-y-16 p-4 m-8 lg:m-40">
      {/* Bad Romance: Affective Body with its Misconceptions and Rumours */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <h2 className="font-bold xl:text-4xl text-center lg:text-left">
            Bad Romance: Affective Body with its Misconceptions and Rumours
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <p className="w-full xl:text-2xl text-center lg:text-left">
                May 11 – June 09, 2024
              </p>
              <p className="w-full xl:text-2xl text-center lg:text-left">
                Waley Art, Taipei, Taiwan
              </p>
              <p className="font-bold mt-4 text-center lg:text-left">
                Group exhibition - Participating artists:
              </p>
              <ul className="flex flex-col items-center lg:items-start mt-2 space-y-1 text-sm leading-6">
                <li>Minia Biabiany</li>
                <li>Posak Jodian</li>
                <li>Jung Jaekyung</li>
                <li>Mark Salvatus</li>
                <li>Ana Elena Tejera</li>
              </ul>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/events/419124790911287/?ref=newsfeed"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                information
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/pro/Badromance.jpg"
            layout="responsive"
            width={800}
            height={270}
            alt="Bad Romance"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Fever Dream */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <h2 className="font-bold xl:text-4xl text-center lg:text-left">
            Fever Dream
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <p className="w-full xl:text-2xl text-center lg:text-left">
                May 09 – July 07, 2024
              </p>
              <p className="w-full xl:text-2xl text-center lg:text-left">
                UP Vargas Museum, Manila, Philippines
              </p>
              <p className="font-bold mt-4 text-center lg:text-left">
                Group exhibition - Participating artists:
              </p>
              <ul className="flex flex-col items-center lg:items-start mt-2 space-y-1 text-sm leading-6">
                <li>Jörgen Axwlvall</li>
                <li>Serene Hui</li>
                <li>Posak Jodian</li>
                <li>Chulayarnnon Siriphol</li>
                <li>Fuyuhiko Takata</li>
              </ul>
            </li>
            <li>
              <Link
                href="https://vargasmuseum.org/fever-dream/"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                information
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/pro/FeverDream.jpg"
            layout="responsive"
            width={800}
            height={270}
            alt="Fever Dream"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
