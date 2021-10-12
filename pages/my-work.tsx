import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Nav,
  PageTitle,
  WorkCategorySelectionRow,
  Container,
  ProjectCard,
  DisplayGrid,
} from "components";
import { sanityClient } from "sanity";

import { Project, Category } from "features/projects";
import { useDispatch, useSelector } from "react-redux";
import {
  hydrateCategories,
  selectSelectedCategories,
} from "features/workSlice";

interface MyWorkProps {
  projects: Project[];
  categories: Category[];
}

export default function Home({ projects, categories }: MyWorkProps) {
  const selectedCategories = useSelector(selectSelectedCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateCategories(categories));
  }, []);

  const selectedCategoriesIdList = selectedCategories.map(
    (category) => category._id
  );

  // Filter out any projects that are not in the selected categories
  let projectsToRender: Project[] = projects.filter((project) => {
    return project.categories.some((category) =>
      selectedCategoriesIdList.includes(category._id)
    );
  });

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
          <WorkCategorySelectionRow allCategories={categories} />
          <DisplayGrid>
            {projectsToRender.map((project) => (
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
    `*[_type == "category"] | order(title desc)`
  );
  const projects: Project[] =
    await sanityClient.fetch(`*[_type  == "project" ]{    
    title, 
    role,
    mainImage,
    categories[]->{
      _id,
      title,
    }, 
    "slug": slug.current,
    years,
    _id, 
  }| order(years desc)`);

  const props: MyWorkProps = { projects, categories };

  return { props };
}

backgroundImage: Image;
