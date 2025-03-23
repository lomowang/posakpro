import Image from "next/image";
import Link from "next/link";
import React from "react";

const Press = () => {
  // ✅ 標題原始內容
  const rawTitle =
    "CLABO實驗波 – 臺灣當代文化實驗場 (CLABO Experimental Waves – Taiwan Contemporary Culture Lab)";

  // ✅ 拆分主標 & 副標（英文）為兩行呈現
  const [mainTitle, subTitle] = rawTitle.includes("(")
    ? rawTitle.split(/\s*\(/)
    : [rawTitle, ""];
  const finalSubTitle = subTitle ? `(${subTitle}` : "";

  return (
    <section className="flex flex-col space-y-16 p-4 m-8 lg:m-40">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-4 items-center lg:items-start leading-8">
        {/* 右側圖片 */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/pro/clabo.JPG"
            layout="responsive"
            width={800}
            height={270}
            alt="CLABO"
            className="rounded-lg"
          />
        </div>

        {/* 左側文字內容 */}
        <div className="flex-1 w-full text-center lg:text-left">
          {/* ✅ 標題分行呈現 */}
          <h2 className="font-bold text-[16px] md:text-2xl leading-snug break-words max-w-full md:max-w-[90%] lg:max-w-none mx-auto lg:mx-0">
            {mainTitle}
            {subTitle && (
              <>
                <br />
                <span className="text-sm md:text-lg font-normal text-gray-700">
                  {finalSubTitle}
                </span>
              </>
            )}
          </h2>

          <ul className="mt-4 space-y-2 text-[14px]">
            <li>
              <p>發布日期：2023.05.09</p>
              <p>撰文：鄭文琦</p>
            </li>
            <li>
              <Link
                href="https://mag.clab.org.tw/clabo-article/radiw-misafafahiyan-and-radiw-no-orip/"
                className="text-green-600 font-semibold underline underline-offset-4 block mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                More →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Press;
