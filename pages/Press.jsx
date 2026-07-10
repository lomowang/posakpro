import Seo from "@/components/Seo";
import { PressIndexPage } from "@/components/PortfolioIndexPages";

export default function Press() {
  return (
    <>
      <Seo
        title="Press"
        description="Conversations, reviews and published encounters with Posak Jodian’s practice."
      />
      <PressIndexPage />
    </>
  );
}
