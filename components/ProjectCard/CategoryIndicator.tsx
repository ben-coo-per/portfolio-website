import styled from "styled-components";
import { CategoryTitleOptions } from "features/projects";
import getCategoryColor from "utils/categoryColorMapper";

const RoundedRect = styled.div`
  width: 8px;
  height: 18px;
  border-radius: 1px;
  margin: 0px 2px;
  background-color: ${(props) =>
    props.color && props.color !== ""
      ? props.theme[props.color].normal
      : props.theme.darkGray};
`;

export const CategoryIndicator = ({
  category,
}: {
  category: CategoryTitleOptions;
}) => {
  return <RoundedRect color={getCategoryColor(category)} />;
};
