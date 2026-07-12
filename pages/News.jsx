import Seo from "@/components/Seo";
import { NewsIndexPage } from "@/components/PortfolioIndexPages";

export default function News() {
  return (
    <>
      <Seo
        title="News"
        description="Current and recent exhibitions, screenings and public programmes by POSAK JODIAN."
      />
      <NewsIndexPage />
    </>
  );
}
