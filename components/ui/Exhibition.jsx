import React from "react";
import Image from "next/image";

const Exhibition = ({
  title,
  dates,
  location,
  artists = [],
  image,
  infoLink,
}) => {
  // ✅ 分割中英文標題（用 "(" 拆分）
  const [mainTitle, subTitle] = title.includes("(")
    ? title.split(/\s*\(/)
    : [title, ""];
  const finalSubTitle = subTitle ? `(${subTitle}` : "";

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-4 items-center lg:items-start">
      {/* ✅ 圖片區塊：桌機在右，手機/平板在上 */}
      <div className="w-full lg:w-2/4">
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            quality={75}
            className="object-cover w-full h-auto rounded"
          />
        </a>
      </div>

      {/* ✅ 文字內容區塊：手機置中，桌機靠左 */}
      <div className="flex-1 w-full text-center lg:text-left">
        {/* ✅ 主標題 + 副標題分兩行 */}
        <h2 className="text-xl md:text-2xl font-bold break-words leading-snug max-w-full md:max-w-[90%] lg:max-w-none mx-auto lg:mx-0">
          {mainTitle}
          {subTitle && (
            <>
              <br />
              <span className="text-base md:text-lg font-normal text-gray-700">
                {finalSubTitle}
              </span>
            </>
          )}
        </h2>

        {/* 日期與地點 */}
        <p className="text-sm text-gray-600 mt-2">{dates}</p>
        <p className="text-sm text-gray-600">{location}</p>

        {/* 藝術家清單 */}
        {Array.isArray(artists) && artists.length > 0 && (
          <div className="mt-3 text-sm text-gray-800 space-y-1">
            {artists.map((artist, i) => (
              <p key={i}>{artist}</p>
            ))}
          </div>
        )}

        {/* 資訊連結 */}
        <div className="mt-4">
          <a
            href={infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold underline underline-offset-4"
          >
            More information →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
