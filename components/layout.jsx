import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function RootLayout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Seo />
      {!isHome && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
