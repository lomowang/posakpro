import Layout from "../components/layout";
import "../app/globals.css"; // 確保全局樣式文件被最早引入

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
