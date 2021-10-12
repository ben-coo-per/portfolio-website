import styled from "styled-components";

const RoundedRect = styled.div`
  width: 5px;
  height: 12px;
  border-radius: 1px;
  margin: 0px 2px;
  background-color: ${(props) => props.color};
`;

export const CategoryIndicator = ({ color }: { color: string }) => {
  return <RoundedRect color={color} />;
};
