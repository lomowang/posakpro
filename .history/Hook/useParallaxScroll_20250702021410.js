// hooks/useParallaxScroll.js
import { useEffect, useRef, useCallback, useState } from "react";

// 自定義節流函數 (推薦安裝 lodash.throttle 以獲得更強大的功能)
const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 處理 3D 視差滾動效果的 Custom Hook
 * @param {string} framesSelector - 選擇器字串，用於獲取所有需要進行視差滾動的元素 (e.g., ".frame")
 * @param {React.RefObject} endRef - 指向頁面結束標誌元素的 useRef
 * @param {number} [zSpacing=-1000] - 每個 frame 之間的 Z 軸間距
 * @returns {object} 包含 isLocked 狀態的物件
 */
const useParallaxScroll = (framesSelector, endRef, zSpacing = -1000) => {
  // 儲存所有 frame 元素的引用，避免重複查詢 DOM
  const frameElementsRef = useRef([]);
  // 儲存每個 frame 的 Z 軸值，在滾動時動態更新
  const zValsRef = useRef([]);
  // 儲存上一次的滾動位置，用於計算滾動方向和距離
  const lastScrollPosRef = useRef(0);
  // 控制頁面是否鎖定 (停止滾動)
  const [isLocked, setIsLocked] = useState(false);

  // 初始化階段：獲取 frames、設定初始 Z 值、預設樣式和初始滾動位置
  useEffect(() => {
    // 獲取所有符合選擇器的 frame 元素
    const frames = Array.from(document.querySelectorAll(framesSelector));
    frameElementsRef.current = frames; // 儲存元素引用

    // 初始化每個 frame 的 Z 軸值
    zValsRef.current = frames.map((_, i) => i * zSpacing);

    // 為每個 frame 應用初始的 3D 變換和透明度
    frames.forEach((frame, i) => {
      const z = zValsRef.current[i];
      frame.style.transform = `translateZ(${z}px)`; // 應用 Z 軸變換

      // 根據 Z 軸位置判斷透明度 (實現內容的漸入漸出)
      const showRange = Math.abs(zSpacing) / 1.2;
      frame.style.opacity = frame.classList.contains("frame_intro")
        ? 1 // 介紹 frame 始終可見
        : Math.abs(z) < showRange
        ? 1 // 在顯示範圍內的 frame 完全可見
        : 0; // 超出範圍的 frame 隱藏
    });

    // 將頁面滾動到指定位置，通常用於觸發初始滾動事件
    window.scrollTo(0, 1);
  }, [framesSelector, zSpacing]); // 依賴 framesSelector 和 zSpacing，只有它們改變時才重新執行

  // 處理滾動事件的核心邏輯，使用 useCallback 優化性能
  const handleScroll = useCallback(() => {
    const top = window.scrollY; // 當前滾動位置
    const delta = lastScrollPosRef.current - top; // 計算滾動距離和方向
    lastScrollPosRef.current = top; // 更新上一次滾動位置

    // 對每個 frame 應用新的 Z 軸位置和透明度
    frameElementsRef.current.forEach((frame, i) => {
      zValsRef.current[i] += delta * -5; // 根據滾動距離調整 Z 軸值，實現視差效果
      const z = zValsRef.current[i];
      frame.style.transform = `translateZ(${z}px)`;

      const showRange = Math.abs(zSpacing) / 1.2;
      frame.style.opacity = frame.classList.contains("frame_intro")
        ? 1
        : Math.abs(z) < showRange
        ? 1
        : 0;
    });

    // 檢查是否滾動到結束位置，並觸發鎖定
    if (!isLocked && endRef.current) {
      const rect = endRef.current.getBoundingClientRect();
      // 當結束元素進入視窗中心時觸發鎖定
      if (rect.top <= window.innerHeight / 2) {
        setIsLocked(true);
      }
    }
  }, [isLocked, endRef, zSpacing]); // 依賴 isLocked, endRef 和 zSpacing

  // 添加和移除滾動事件監聽器，並應用節流
  useEffect(() => {
    // 使用節流函數包裝 handleScroll，限制執行頻率，提升性能
    const throttledHandleScroll = throttle(handleScroll, 10); // 每 10 毫秒最多執行一次

    window.addEventListener("scroll", throttledHandleScroll);

    // 清理函數：在組件卸載時移除事件監聽器
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll]); // 依賴 handleScroll，確保在 handleScroll 改變時重新綁定

  // 管理 body 的樣式 (高度和溢出)，根據鎖定狀態調整
  useEffect(() => {
    if (isLocked) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      // 從 CSS 變數中獲取 --depth 值
      const depth = getComputedStyle(document.documentElement)
        .getPropertyValue("--depth")
        .trim();
      document.body.style.height = depth;
      document.body.style.overflowY = "scroll";
    }
  }, [isLocked]); // 依賴 isLocked

  // 設置 body 的初始 loading class，在組件掛載時添加，卸載時移除
  useEffect(() => {
    document.body.classList.add("loading");
    return () => {
      document.body.classList.remove("loading");
    };
  }, []); // 空依賴陣列表示只在掛載和卸載時執行一次

  return { isLocked }; // 返回鎖定狀態，供組件使用
};

export default useParallaxScroll;
