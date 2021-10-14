import { Project } from "features/projects";
import { sanityClient } from "sanity";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Main } from "../index";

import { Nav, Container } from "components";

interface ProjectPageProps {
  project?: Project;
}
export default function Home({ project }: ProjectPageProps) {
  console.log(project);
  return (
    <>
      <Head>
        <title>Ben Cooper</title>
        <meta name="description" content="Welcome to my website" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav backPath="/#my-work" />
      <Main>
        <Container>{JSON.stringify(project)}</Container>
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const projects: Project[] =
    await sanityClient.fetch(`*[_type  == "project" && slug.current == "${params?.slug}"]{
      title,
      role,
      mainImage,
      backgroundImage,
      categories[]->{
        _id,
        title,
      },
      years,
      _id,
    }`);

  if (projects.length > 0) {
    return { props: { project: projects[0] } };
  }

  return { props: { project: null } };
};
