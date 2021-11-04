import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  background: #ffffff;
  border: none;

  /* Card Shadow */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  }
`;

const Title = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  margin-left: 6px;
  margin-right: 6px;
  color: ${(props) => props.theme.text};
`;

interface ButtonProps {
  link: string;
}
export const ExternalSiteButton = ({ link }: ButtonProps) => {
  return (
    <StyledButton href={link} target="_blank">
      <Title>Link to Project</Title>
      <img src="/svg/External.svg" alt="external Icon" />
    </StyledButton>
  );
};
