// @ts-nocheck
import styled from "styled-components";
import { Category } from "features/projects";
import getCategoryColor from "utils/categoryColorMapper";
import {
  addCategory,
  removeCategory,
  selectSelectedCategories,
  selectCategory,
  unSelectCategory,
} from "features/workSlice";
import { useDispatch, useSelector } from "react-redux";

const Toggle = styled.button`
  margin: 0px 4px;

  width: min-content;
  padding: 4px;
  border-radius: 3px;
  text-align: center;
  font-family: "Raleway", "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0.5px 5px rgba(0, 0, 0, 0.25)` : `none`};
  color: ${(props) =>
    props.isSelected ? "#fff" : props.theme[props.color].dark};
  background-color: ${(props) =>
    props.isSelected
      ? props.theme[props.color]?.normal
      : props.theme[props.color]?.light};
  border: ${(props) => `1px solid ${props.theme[props.color].normal}`};
`;

export const CategoryToggle = ({
  category,
  numCategories,
}: {
  category: Category;
  numCategories: number;
}) => {
  const selectedCategories: Category[] = useSelector(selectSelectedCategories);
  let isSelected = selectedCategories.includes(category);
  const dispatch = useDispatch();
  const color = getCategoryColor(category.title);

  function handleToggle() {
    if (isSelected) {
      dispatch(unSelectCategory());
    } else {
      dispatch(selectCategory(category));
    }
  }
  return (
    <Toggle color={color} isSelected={isSelected} onClick={handleToggle}>
      {category.title}
    </Toggle>
  );
};
