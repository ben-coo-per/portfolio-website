import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "styles/theme";
import { GetInTouchButton } from "components/buttons";
import { SocialLinks } from "./SocialLinks";
import { getBrooklynTemperature } from "utils/getCurrentTemp";

const Container = styled.footer`
  background-color: ${(props) => props.theme.bg};
  max-height: 300px;
  padding: 20px 100px;
  display: flex;
  @media (max-width: 768px) {
    padding: 65px 10px;
  }
`;

const Wrapper = styled.div`
  max-width: 825px;
`;

const MainText = styled.h1`
  margin: 15px 0px;
  font-family: Quantico, Raleway, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;

  color: ${(props) => props.theme.subtleText};
`;

const SecondaryText = styled.h2`
  margin: 15px 0px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;

  color: ${(props) => props.theme.subtleText};
`;

export const Footer = () => {
  getBrooklynTemperature();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          {/* <MainText>It’s 57˚F here in Brooklyn, NY</MainText>
          <SecondaryText>And I’m eager to meet you</SecondaryText> */}
          <GetInTouchButton>Get In Touch</GetInTouchButton>
          <SocialLinks />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
