// pages/_app.js

import { LoadingProvider, useLoading } from "../components/LoadingContext";
import LoadingScreen from "../components/LoadingScreen";
import "../app/globals.css"; // 假設這是您的全域樣式路徑

// ----------------------------------------------------
// 步驟 1: 創建一個組件來使用 Context 狀態
// ----------------------------------------------------
function AppContent({ Component, pageProps }) {
  // 從 Context 中獲取 isLoaded 狀態
  const { isLoaded } = useLoading();

  return (
    <>
      {/* 判斷：如果 isLoaded 為 false (初始狀態)，則顯示 LoadingScreen */}
      {!isLoaded && <LoadingScreen />}

      {/* 判斷：如果 isLoaded 為 true (點擊後)，則顯示主應用程式內容 */}
      {/* 這樣可以確保在 LoadingScreen 隱藏時，主頁面 Component 才會被渲染 */}
      {isLoaded && <Component {...pageProps} />}
    </>
  );
}

// ----------------------------------------------------
// 步驟 2: 在根組件中提供 LoadingProvider
// ----------------------------------------------------
function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      {/* 將 AppContent 放在 Provider 內部，這樣它才能訪問 Context */}
      <AppContent Component={Component} pageProps={pageProps} />
    </LoadingProvider>
  );
}

export default MyApp;
