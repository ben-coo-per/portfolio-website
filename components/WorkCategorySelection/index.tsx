import styled from "styled-components";
import { Category } from "features/projects";
import { CategoryToggle } from "./CategorySelectionToggle";

const Container = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
`;

interface CategoriesSelectionRowProps {
  allCategories: Category[];
}

export const WorkCategorySelectionRow = ({
  allCategories,
}: CategoriesSelectionRowProps) => {
  return (
    <Container>
      {allCategories.map((category) => (
        <CategoryToggle
          category={category}
          key={category._id}
          numCategories={allCategories.length}
        />
      ))}
    </Container>
  );
};
