import { Project } from "features/projects";
import { sanityClient, urlFor } from "sanity";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Main } from "../index";
const BlockContent = require("@sanity/block-content-to-react");

import { BackNav, Container, PageTitle, Header1, Footer } from "components";
import styled from "styled-components";
import { useWindowSize } from "utils/customHooks";
import { NextProjectButton } from "components/buttons";

interface ProjectPageProps {
  project: Project | null;
}

interface ContainerProps {
  backgroundImageUrl?: string;
}

const ProjectContainer = styled.div<ContainerProps>`
  position: relative;

  min-height: 100vh;
  padding: 100px;

  background-color: ${(props) => props.theme.bg};
  @media (max-width: 768px) {
    padding: 70px 10px;

    justify-items: center;
  }

  background: ${(props) =>
    props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : "none"};
`;

const StyledBlockContent = styled(BlockContent)``;

export default function Home({ project }: ProjectPageProps) {
  let imageWidth = Math.floor(useWindowSize().width * 0.75);
  let imageHeight = Math.floor(useWindowSize().height * 0.75);

  if (project) {
    return (
      <>
        <Head>
          <title>{`${project.title} | Ben Cooper`}</title>
          <meta
            name="description"
            content={`${project.title} from ${project.years} `}
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BackNav link={project.linkToProject} />
        <Main>
          <ProjectContainer
            backgroundImageUrl={urlFor(project.backgroundImage)}
          >
            <PageTitle>{project?.title}</PageTitle>
            <StyledBlockContent
              blocks={project.body}
              // serializers={{ marks: { Header2 } }}
              imageOptions={{ fit: "clip", h: imageHeight, w: imageWidth }}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />

            <NextProjectButton id={project._id} />
          </ProjectContainer>
        </Main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Ben Cooper</title>
        <meta name="description" content="Welcome to my website" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackNav />
      <Main>
        <Container>
          <PageTitle> Oops!</PageTitle>

          <Header1>This project is missing</Header1>
        </Container>
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
      body,
      linkToProject,
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
