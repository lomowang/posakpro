import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "@/pages/Header";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  // 你不想顯示 Header 的路径
  const noHeaderPaths = [""];

  const shouldShowHeader = !noHeaderPaths.includes(router.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      {children}
    </>
  );
}
