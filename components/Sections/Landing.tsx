import Image from "next/image";
import { Container } from "../Container";
import styled from "styled-components";

const LandingContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bg};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredDiv = styled.div``;

export const Landing = () => {
  return (
    <LandingContainer>
      <CenteredDiv>
        <Image src="/landingImage.svg" width="370px" height="200px" />
      </CenteredDiv>
    </LandingContainer>
  );
};
