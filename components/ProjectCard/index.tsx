import styled from "styled-components";
import { Project } from "types/projects";
import { urlFor } from "sanity";
import { MainImage } from "./MainImage";
import { CategoryIndicator } from "./CategoryIndicator";

const CardBase = styled.div`
  /* width: 215px; */
  border-radius: 1px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  column-count: 3;
`;

const CategoriesRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const UpperDetails = styled.div`
  margin: 4px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 10px;
`;

const LowerDetails = styled.div`
  margin: 4px 0px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */

  padding: 0px 10px;
`;

const ProjectTitle = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 100%;
  margin-bottom: 0px;
`;

const ProjectRole = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  margin-top: 0px;
  color: #65788b;
`;

const ProjectYears = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 100%;
  color: #636363;
`;

export const ProjectCard = ({ project }: { project: Partial<Project> }) => {
  return (
    <CardBase>
      <UpperDetails>
        <CategoriesRow>
          {project.categories?.map((category) => (
            <CategoryIndicator color={category.primaryColor} />
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
  );
};

export { MainImage } from "./MainImage";
export { CategoryIndicator } from "./CategoryIndicator";
