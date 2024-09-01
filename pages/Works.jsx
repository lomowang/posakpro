"use client";
import React, { useState } from "react";
import { useRouter } from "next/router"; // 导入 useRouter
import Misafafahiyan from "./workpage/Misafafahiyan";
import Lakec from "./workpage/Lakec";
import Simpleriver from "./workpage/Simpleriver";

const Works = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter(); // 初始化 useRouter

  const renderContent = () => {
    switch (selectedOption) {
      case "option1":
        return (
          <div>
            <Misafafahiyan />
          </div>
        );
      case "option2":
        return (
          <div>
            <Simpleriver />
          </div>
        );
      case "option3":
        return (
          <div>
            <Lakec />
          </div>
        );
      default:
        return <div> 這邊要不要放甚麼照片</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* 左边：回到首页 (占3/12) */}
      <div className="w-1/4 lg:w-3/12  flex items-center justify-center">
        <button
          onClick={() => router.push("/")} // 点击时导航到首页
          className="text-xl font-bold"
        >
          Posak Jodian
        </button>
      </div>

      {/* 中间：子画面 (占6/12) */}
      <div className="w-2/4 lg:w-6/12  overflow-y-auto flex items-center justify-center p-4 hide-scrollbar">
        <div className="max-h-full w-full">{renderContent()}</div>
      </div>

      {/* 右边：选项 (占3/12) */}
      <div className="w-1/4 lg:w-3/12 flex flex-col items-center justify-center space-y-4">
        <button
          onClick={() => setSelectedOption("option1")}
          className="text-xl"
        >
          Misafafahiyan
        </button>
        <button
          onClick={() => setSelectedOption("option2")}
          className="text-xl"
        >
          Lakec:A Very Simple River
        </button>
        <button
          onClick={() => setSelectedOption("option3")}
          className="text-xl"
        >
          Lakec
        </button>
      </div>
    </div>
  );
};

export default Works;
