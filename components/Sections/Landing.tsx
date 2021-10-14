import Image from "next/image";
import { NavLink } from "components/Nav";
import styled from "styled-components";

const LandingContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bg};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const LinksContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    margin-top: 48px;
    flex-direction: column;
    justify-items: center;
    position: inherit;
  }
`;

const LandingNavLink = styled(NavLink)`
  margin: 0px 14px;
  @media (max-width: 768px) {
    margin: 12px;
    font-size: 40px;
  }
`;

export const Landing = () => {
  return (
    <LandingContainer id="landing">
      <CenteredDiv>
        <Image
          src="/landingImage.svg"
          width="370px"
          height="200px"
          alt="Illustation of me"
        />
        <LinksContainer>
          <LandingNavLink
            activeClass="active"
            to="about-me"
            spy={true}
            smooth={true}
            duration={500}
          >
            about me
          </LandingNavLink>
          <LandingNavLink
            activeClass="active"
            to="my-work"
            spy={true}
            smooth={true}
            duration={500}
          >
            my work
          </LandingNavLink>
        </LinksContainer>
      </CenteredDiv>
    </LandingContainer>
  );
};
