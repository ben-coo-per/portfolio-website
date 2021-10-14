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
  margin-top: 10px;
  border-radius: 8px;
  background: linear-gradient(
    159.71deg,
    #e4e7ec -11.85%,
    #f5f5f7 41.68%,
    #d6d8df 98.67%
  );
  /* border: 1px solid #dadada; */
  display: flex;
  flex-direction: column;
  align-items: stretch;

  column-count: 3;
  cursor: pointer;
  &:hover {
    /* background-color: black; */
    margin-top: -10px;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
  }
`;

export const ProjectCard = ({ project }: { project: Partial<Project> }) => {
  return (
    <Link href={`/project/${project.slug}`} passHref>
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
