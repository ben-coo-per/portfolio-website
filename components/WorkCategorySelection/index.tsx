import styled from "styled-components";
import { Category } from "features/projects";
import { CategoryToggle } from "./CategorySelectionToggle";
import { useSelector } from "react-redux";
import { selectSelectedCategories } from "features/workSlice";

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
  const selectedCategories: Category[] = useSelector(selectSelectedCategories);

  return (
    <Container>
      {allCategories.map((category) => (
        <CategoryToggle
          category={category.title}
          isSelected={selectedCategories.includes(category)}
          key={category._id}
        />
      ))}
    </Container>
  );
};
