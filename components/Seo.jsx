import Head from "next/head";

const SITE_NAME = "Posak Jodian";
const DEFAULT_DESCRIPTION =
  "Posak Jodian is an Amis artist, filmmaker and field researcher based in Taipei, working through moving image, Indigenous identity, tribal memory and urban life.";

// Meta tags carry `key` attributes so a page-level <Seo> overrides the
// layout-level default.
export default function Seo({ title, description, image = "/og.jpg" }) {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Artist · Filmmaker · Field Researcher`;
  const desc = description || DEFAULT_DESCRIPTION;

  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={desc} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:description" property="og:description" content={desc} />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta key="twitter:description" name="twitter:description" content={desc} />
      <meta key="twitter:image" name="twitter:image" content={image} />
    </Head>
  );
}
