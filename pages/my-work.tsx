import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import {
  Nav,
  PageTitle,
  BodyText,
  Container,
  ProjectCard,
  DisplayGrid,
} from "components";
import { sanityClient, urlFor } from "sanity";

import { Project, Category } from "types/projects";

interface MyWorkProps {
  projects: Project[];
  categories: Category[];
}

export default function Home({ projects, categories }: MyWorkProps) {
  return (
    <>
      <Head>
        <title>my work</title>
        <meta name="description" content="My projects and work" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Container>
          <PageTitle>My Work</PageTitle>

          <DisplayGrid>
            {projects.map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))}
          </DisplayGrid>
        </Container>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const categories: Category[] = await sanityClient.fetch(
    `*[_type == "category"]`
  );
  const projects: Project[] =
    await sanityClient.fetch(`*[_type  == "project" ]{    
    title, 
    role,
    mainImage,
    categories[]->{
      _id,
      title,
      primaryColor,
      secondaryColor
    }, 
    "slug": slug.current,
    years,
    _id, 
  }| order(years desc)`);

  const props: MyWorkProps = { projects, categories };

  return { props };
}

backgroundImage: Image;
