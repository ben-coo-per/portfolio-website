import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";
import { BodyText } from "../TextComponents";
import { PageTitle, Container, Nav } from "components";
import { darkTheme } from "styles/theme";

const Headshot = styled(Image)`
  border-radius: 10px;
`;

const ImageShadow = styled.div`
  filter: drop-shadow(0px 5.26582px 13.1646px rgba(0, 0, 0, 0.25));
  width: 45%;
  float: left;
  padding: 10px;
  /* margin-top: -40px; */
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
    margin: auto;
  }
`;

const AboutMeBodyText = styled(BodyText)`
  width: 45%;
  float: left;
  font-size: 24px;
  margin-left: 20px;

  @media (max-width: 1080px) {
    width: 48%;
    font-size: 20px;
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    width: 100%;
    margin: 20px 0px;
  }
`;

export function AboutMeSection() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container id="about-me">
        <PageTitle>About Me</PageTitle>

        <ImageShadow>
          <Headshot
            src="/headshot.jpeg"
            width="512px"
            height="512px"
            alt="Picture of Me"
            placeholder="blur"
            blurDataURL="/headshot.jpeg"
          />
        </ImageShadow>
        <AboutMeBodyText>
          I am an engineer by training but a designer & developer by practice.
          <br />
          <br />
          My dream job is to build everything from furniture to climate
          solutions alongside people that inspire me.
          <br />
          <br /> I like reading when it rains and riding my bike when it
          doesn’t.
        </AboutMeBodyText>
      </Container>
    </ThemeProvider>
  );
}
