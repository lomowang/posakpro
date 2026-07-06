// components/LoadingScreen.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLoading } from "./LoadingContext"; // 引入 useLoading
import "../app/LoadingScreen.css";
import { useRouter } from "next/router"; // 引入 useRouter (如果你使用 Next.js)

const work = [
  {
    Image: "/pro/Simpleriver/river_2.png",
    name: "River, 2020",
    text: "A quiet journey along the river of memory, blending tradition and transformation.",
    side: "left",
  },
  {
    Image: "/pro/Simpleriver/river_3.png",
    name: "Mountain, 2020",
    text: "A tribute to towering landscapes and resilient cultures.",
    side: "right",
  },
  {
    Image: "/pro/Simpleriver/river_6.png",
    name: "Forest, 2021",
    text: "Whispers between the leaves, echoing ancient stories.",
    side: "left",
  },
  {
    Image: "/pro/Misafafahiyan/Misafafahiyan_1.jpeg",
    name: "Metamorphosis, 2022",
    text: "Identity and art colliding in bold expressions.",
    side: "right",
  },
  {
    Image: "/pro/Lakec/lakec_5.png",
    name: "Lakec, 2018",
    text: "Waves carry memories across generations.",
    side: "left",
  },
];

const LoadingScreen = () => {
  const endRef = useRef();
  const [locked, setLocked] = useState(false);
  const lastPosRef = useRef(0);
  const zValsRef = useRef([]);

  const { setIsLoaded } = useLoading();
  const router = useRouter(); // 實例化 useRouter (如果你使用 Next.js)

  const calculateDynamicDepth = (numFrames, zSpacing, scrollSpeedFactor) => {
    const totalZMovement = Math.abs((numFrames - 1) * zSpacing);
    const requiredScrollPixels = totalZMovement / scrollSpeedFactor;
    return `${requiredScrollPixels + window.innerHeight * 1.5}px`;
  };

  // 主滾動邏輯 Effect
  useEffect(() => {
    const zSpacing = -1000;
    const scrollSpeedFactor = 5;
    const numTotalFrames = work.length + 2;

    const depth = getComputedStyle(document.documentElement)
      .getPropertyValue("--depth")
      .trim();
    document.body.style.height = depth;
    document.body.style.overflowY = "scroll";
    document.body.classList.add("loading");

    const frames = Array.from(document.getElementsByClassName("frame"));
    lastPosRef.current = window.scrollY;
    zValsRef.current = frames.map((_, i) => i * zSpacing);

    frames.forEach((frame, i) => {
      const z = zValsRef.current[i];
      frame.style.transform = `translateZ(${z}px)`;
      const showRange = Math.abs(zSpacing) / 1.2;
      frame.style.opacity = frame.classList.contains("frame_intro")
        ? 1
        : Math.abs(z) < showRange
        ? 1
        : 0;
    });

    const handleScroll = () => {
      const top = window.scrollY;
      const delta = lastPosRef.current - top;
      lastPosRef.current = top;

      frames.forEach((frame, i) => {
        zValsRef.current[i] += delta * -scrollSpeedFactor;
        const z = zValsRef.current[i];
        frame.style.transform = `translateZ(${z}px)`;

        const showRange = Math.abs(zSpacing) / 1.2;
        frame.style.opacity = frame.classList.contains("frame_intro")
          ? 1
          : Math.abs(z) < showRange
          ? 1
          : 0;
      });

      if (!locked && endRef.current) {
        const rect = endRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          setLocked(true);
          document.body.style.height = "100vh";
          document.body.style.overflow = "hidden";
        }
      }
    };

    window.scrollTo(0, 1);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("loading");
      document.body.style.overflow = "auto";
      document.body.style.height = "";
    };
  }, [locked]); // 依賴 locked 狀態

  // ✅ MODIFIED: 移除自動跳轉的 Effect
  // useEffect(() => {
  //   let timer;
  //   if (locked) {
  //     timer = setTimeout(() => {
  //       setIsLoaded(true);
  //     }, 2000);
  //   }
  //   return () => {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //   };
  // }, [locked, setIsLoaded]);

  // ✅ NEW: 處理 "POSAK" 點擊的跳轉函數
  const handlePosakClick = () => {
    if (locked) {
      // 只有在畫面鎖定後才能點擊跳轉
      console.log("POSAK clicked! Entering main site.");
      setIsLoaded(true); // 通知 Context 載入完成，切換到主頁
      // 如果你使用 Next.js，這裡也可以直接使用 router.push('/你的主頁路徑');
      // 例如: router.push('/main');
    }
  };

  return (
    <div className="container">
      <section className="gallery">
        <div className="frame frame_intro">
          <div className="frame_content">
            <h2>POSAK JODIAN</h2>
          </div>
        </div>

        {work.map((item, index) => (
          <div className="frame frame_bg" key={index}>
            <div className="frame_content flex flex-row items-center justify-center gap-[8vw] px-[4vw]">
              {item.side === "left" ? (
                <>
                  <div
                    className="frame-media frame-media_left"
                    style={{ backgroundImage: `url(${item.Image})` }}
                  ></div>
                  <div className="text-content text-left w-[30vw]">
                    <h3 className="text-3xl font-bold mb-4">{item.name}</h3>
                    <p className="text-sm leading-relaxed">{item.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-content text-right w-[30vw]">
                    <h3 className="text-3xl font-bold mb-4">{item.name}</h3>
                    <p className="text-sm leading-relaxed">{item.text}</p>
                  </div>
                  <div
                    className="frame-media frame-media_right"
                    style={{ backgroundImage: `url(${item.Image})` }}
                  ></div>
                </>
              )}
            </div>
          </div>
        ))}

        <div className="frame frame-end" ref={endRef}>
          <div className="frame_content text-center flex flex-col items-center">
            {/* 👇 建立一個新的 div 來包裹所有可點擊的內容 */}
            {/* 將 onClick 和 className 都移到這個父層 div 上 */}
            <div
              className={locked ? "clickable-posak" : ""}
              onClick={handlePosakClick}
            >
              {/* h2 現在只負責顯示文字，不需要任何事件或 class */}
              <h2>POSAK</h2>

              {/* 當畫面鎖定時，顯示這個額外的提示文字 */}
              {locked && (
                <p
                  className="click-prompt-3d clickable-posak"
                  onClick={handlePosakClick}
                >
                  Click to Enter
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingScreen;
