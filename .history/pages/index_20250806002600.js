// app/page.js

import { useEffect } from "react"; // ✅ 1. 確保 useEffect 被引入
import { useLoading } from "../components/LoadingContext";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/pages/Hero";
import Works from "@/pages/Work";
import "../app/LoadingScreen.css";

export default function Home() {
  const { isLoaded, setIsLoaded } = useLoading();

  // ✅ 2. 加入這個 useEffect 來處理滾動
  useEffect(() => {
    // 只有當 isLoaded 從 false 變為 true 時，才執行
    if (isLoaded) {
      // 將視窗滾動到頁面最頂端
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 使用平滑滾動，效果更佳
      });
    }
  }, [isLoaded]); // 這個 effect 會在 isLoaded 狀態改變時觸發

  return isLoaded ? (
    <>
      <Hero />
      <Works />
    </>
  ) : (
    <LoadingScreen />
  );
}
