import { useEffect, useState } from "react";
import {
  PageTitle,
  WorkCategorySelectionRow,
  Container,
  ProjectCard,
  DisplayGrid,
} from "components";

import { Project, Category } from "features/projects";
import { useDispatch, useSelector } from "react-redux";
import {
  hydrateCategories,
  selectSelectedCategories,
} from "features/workSlice";

export interface MyWorkProps {
  projects: Project[];
  categories: Category[];
}

export function MyWorkSection({ projects, categories }: MyWorkProps) {
  const selectedCategories = useSelector(selectSelectedCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateCategories(categories));
  }, []);

  const selectedCategoriesIdList = selectedCategories.map(
    (category) => category._id
  );

  // Filter out any projects that are not in the selected categories
  let projectsToRender: Project[] =
    selectedCategories.length == 0
      ? projects
      : // selectedCategories.length > 1?
        projects.filter((project) => {
          return project.categories.some((category) =>
            selectedCategoriesIdList.includes(category._id)
          );
        });
  // : projects.filter((project) => {
  //     return project.categories.some((category) =>
  //       selectedCategoriesIdList.includes(category._id)
  //     );
  //   });
  return (
    <Container>
      <PageTitle>My Work</PageTitle>
      <WorkCategorySelectionRow allCategories={categories} />
      <DisplayGrid>
        {projectsToRender.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </DisplayGrid>
    </Container>
  );
}
