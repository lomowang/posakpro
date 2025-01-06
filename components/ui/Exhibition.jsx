import Image from "next/image";
import Link from "next/link";
import React from "react";

const Exhibition = ({ title, dates, location, artists, image, infoLink }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="flex-1">
        {/* 文字區域 */}
        <h2 className="font-bold xl:text-[32px] text-center lg:text-left">
          {title}
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            <p className="w-full xl:text-[28px] text-center lg:text-left pb-3">
              {dates}
            </p>
            <p className="w-full xl:text-[26px] text-center lg:text-left">
              {location}
            </p>
            <p className="font-bold mt-4 text-center lg:text-left text-[20px]">
              Group exhibition - Participating artists:
            </p>
            <ul className="flex flex-col text-center lg:items-start mt-2 space-y-2 text-sm leading-6">
              {artists.map((artist, index) => (
                <li key={index}>{artist}</li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href={infoLink}
              className="text-green-600 text-center lg:text-left font-bold block"
            >
              information
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={image}
          layout="responsive"
          width={800}
          height={270}
          alt={title}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Exhibition;
