import { useEffect } from "react";
import Hero from "@/pages/Hero";
import Works from "@/pages/Work";
import LoadingScreen from "@/components/LoadingScreen";
import { useLoading } from "../components/LoadingContext"; // ✅ 正確路徑！
import "../app/LoadingScreen.css";

export default function Home() {
  const { isLoaded, setIsLoaded } = useLoading();

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoaded(true), 7000);
  //   return () => clearTimeout(timer);
  // }, [setIsLoaded]);

  return isLoaded ? (
    <>
      <Hero />
      <Works />
    </>
  ) : (
    <LoadingScreen />
  );
}
