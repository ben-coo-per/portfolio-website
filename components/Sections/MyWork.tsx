import { useEffect } from "react";
import {
  PageTitle,
  WorkCategorySelectionRow,
  Container,
  ProjectCard,
  DisplayGrid,
  Nav,
} from "components";

import { Project, Category } from "features/projects";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCategories } from "features/workSlice";

export interface MyWorkProps {
  projects: Project[];
}

export function MyWorkSection({ projects }: MyWorkProps) {
  const selectedCategories = useSelector(selectSelectedCategories);

  // Filter out any projects that are not in the selected categories
  let projectsToRender: Project[] =
    selectedCategories.length == 0
      ? projects
      : // selectedCategories.length > 1?
        projects.filter((project) => {
          return project.categories.some((category) =>
            selectedCategories.includes(category.title)
          );
        });

  return (
    <>
      <Container id="my-work">
        <PageTitle>My Work</PageTitle>
        <WorkCategorySelectionRow />
        <DisplayGrid>
          {projectsToRender.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </DisplayGrid>
      </Container>
    </>
  );
}
