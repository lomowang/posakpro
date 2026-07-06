import Layout from "../components/layout";
import "../app/globals.css";
import { LoadingProvider } from "../components/LoadingContext"; // ✅ 正確路徑！

export default function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoadingProvider>
  );
}
