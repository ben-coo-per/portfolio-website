import styled from "styled-components";
import { CategoryTitleOptions, Categories } from "features/projects";
import { CategoryToggle } from "./CategorySelectionToggle";

const Container = styled.div`
  /* position: sticky; */
  /* top: 20px; */
  /* z-index: 100; */

  padding-top: 4px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 50px;
  }
`;

export const WorkCategorySelectionRow = () => {
  // @ts-ignore
  const allCategories: CategoryTitleOptions[] = Object.keys(Categories);

  return (
    <Container>
      {allCategories.map((category) => (
        <CategoryToggle category={category} key={category} />
      ))}
    </Container>
  );
};
