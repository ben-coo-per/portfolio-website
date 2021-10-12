// @ts-nocheck
import styled from "styled-components";
import { CategoryTitleOptions } from "features/projects";
import getCategoryColor from "utils/categoryColorMapper";

const Toggle = styled.div`
  margin: 0px 4px;

  width: min-content;
  padding: 4px;
  border-radius: 3px;
  text-align: center;
  font-family: "Raleway", "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  align-items: center;

  box-shadow: ${(props) =>
    props.isSelected ? `0px 0.5px 5px rgba(0, 0, 0, 0.25)` : ``};

  color: ${(props) =>
    props.isSelected ? "#fff" : props.theme[props.color].dark};

  background-color: ${(props) =>
    props.isSelected
      ? props.theme[props.color]?.normal
      : props.theme[props.color]?.light};

  border: ${(props) =>
    props.isSelected ? `` : `1px solid ${props.theme[props.color].normal}`};
`;

export const CategoryToggle = ({
  category,
  isSelected,
}: {
  category: CategoryTitleOptions;
  isSelected: boolean;
}) => {
  const color = getCategoryColor(category);

  return (
    <Toggle color={color} isSelected={isSelected}>
      {category}
    </Toggle>
  );
};
