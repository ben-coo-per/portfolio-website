import styled from "styled-components";
import { CategoryTitleOptions, Categories } from "features/projects";
import { CategoryToggle } from "./CategorySelectionToggle";

const Container = styled.div`
  position: sticky;
  top: 85px;
  padding-top: 4px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${(props) => props.theme.bg};
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
