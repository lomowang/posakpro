"use client";
import Hero from "@/pages/Hero";
import Project from "@/pages/Project";

export default function Home() {
  return (
    <main className="max-w-full mx-auto min-h-screen bg-white overflow-hidden">
      <Hero />
      <Project />
    </main>
  );
}
