import "../app/globals.css";
import Header from "@/pages/Header";
import Footer from "@/components/ui/Footer";
import { useRouter } from "next/router";


export default function RootLayout({ children }) {
  const router = useRouter();
  const noHeaderPaths = [""]; // 避免 "s" 錯誤

  const shouldShowHeader = router.pathname !== "/";

  return (
    <div className="min-h-screen bg-white text-black">
      {shouldShowHeader && <Header />}
      <main>{children}</main>
      {router.pathname !== "/" && <Footer />}
    </div>
  );
}
