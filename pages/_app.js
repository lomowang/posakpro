import Layout from "../components/layout";
import "../app/globals.css"; // 確保全局樣式文件被最早引入
import Footer from "@/components/ui/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
