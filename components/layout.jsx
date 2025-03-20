import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "@/pages/Header";
import Footer from "@/components/ui/Footer";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const noHeaderPaths = [""]; // 避免 "s" 錯誤

  const shouldShowHeader = !noHeaderPaths.includes(router.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {shouldShowHeader && <Header />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
