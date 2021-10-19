import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
`;

interface ButtonProps {
  link: string;
}
export const ExternalSiteButton = ({ link }: ButtonProps) => {
  return (
    <StyledButton href={link} target="_blank">
      <img src="/svg/External.svg" alt="external Icon" />
    </StyledButton>
  );
};
