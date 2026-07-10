import { WorkDetailPage } from "@/components/WorkExperience";
import Seo from "@/components/Seo";
import { projects } from "@/lib/works";

export default function WorkPage({ slug }) {
  const project = projects.find((item) => item.slug === slug);
  return (
    <>
      <Seo
        title={project?.title}
        description={project?.statement?.[0]}
        image={project?.hero}
      />
      <WorkDetailPage slug={slug} />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
