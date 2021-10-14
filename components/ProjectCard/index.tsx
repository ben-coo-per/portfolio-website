import styled from "styled-components";
import { Project } from "features/projects";
import Link from "next/link";
import { MainImage } from "./MainImage";
import { CategoryIndicator } from "./CategoryIndicator";
import {
  ProjectYears,
  ProjectRole,
  ProjectTitle,
  UpperDetails,
  LowerDetails,
  CategoriesRow,
} from "./Styles";

export const CardBase = styled.div`
  max-width: 400px;
  border-radius: 1px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  column-count: 3;
`;

export const ProjectCard = ({ project }: { project: Partial<Project> }) => {
  return (
    <Link href={`project/${project.slug}`}>
      <CardBase>
        <UpperDetails>
          <CategoriesRow>
            {project.categories?.map((category) => (
              <CategoryIndicator
                category={category.title}
                key={category.title}
              />
            ))}
          </CategoriesRow>
          <ProjectYears>{project.years}</ProjectYears>
        </UpperDetails>
        <MainImage
          src={project.mainImage}
          alt={`${project.title} display image`}
        />

        <LowerDetails>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectRole>{project.role}</ProjectRole>
        </LowerDetails>
      </CardBase>
    </Link>
  );
};

export { MainImage } from "./MainImage";
export { CategoryIndicator } from "./CategoryIndicator";
