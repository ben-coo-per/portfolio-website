import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { lightTheme, darkTheme } from "styles/theme";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { ExternalSiteButton } from "./buttons";
import Link from "next/link";

interface FixedContainerProps {
  navbarIsHidden: boolean;
}

const FixedContainer = styled.div<FixedContainerProps>`
  visibility: ${(props) => (props.navbarIsHidden ? "hidden" : "visible")};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  @media (max-width: 768px) {
    padding: 10px;
    background: ${(props) => props.theme.bg};
  }
  height: 65px;
  /* background: ${(props) => props.theme.bg}; */

  color: ${(props) => props.theme.text};
`;

const NavLinks = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 43px;
  top: 10px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const NavLink = styled(ScrollLink)`
  margin: 0px 24px;
  font-family: "Indie Flower", "Raleway", "Open Sans", sans-serif;
  font-size: 20px;
  text-decoration: none;

  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0px 16px;
  }

  &:hover {
    text-decoration: underline;
  }

  transition: ease-in 0.2s;
`;

const NavIcon = styled(Image)`
  cursor: pointer;
`;

export const Nav = () => {
  const [navbarIsHidden, setHideNavbar] = useState<boolean>(true);
  const [isLightTheme, setThemeToLight] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <FixedContainer navbarIsHidden={navbarIsHidden}>
        <Container>
          <Icon />
          <NavLinks>
            <NavLink
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => {
                setHideNavbar(false);
                setThemeToLight(false);
              }}
              onSetInactive={() => setHideNavbar(true)}
            >
              about me
            </NavLink>

            <NavLink
              activeClass="active"
              to="my-work"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => {
                setHideNavbar(false);
                setThemeToLight(true);
              }}
            >
              my work
            </NavLink>
          </NavLinks>
        </Container>
      </FixedContainer>
    </ThemeProvider>
  );
};

const Icon = () => {
  return (
    <NavLink activeClass="active" to="landing" smooth={true} duration={500}>
      <NavIcon src={"/logo.svg"} height={"45px"} width={"45px"} />
    </NavLink>
  );
};

const BackButton = ({ backPath }: { backPath?: string }) => {
  return (
    <Link href={backPath ? backPath : "/#my-work"} passHref>
      <a>
        <NavIcon src="/svg/BackArrow.svg" height="20px" width="32px" />
      </a>
    </Link>
  );
};

export const BackNav = ({
  backPath,
  link,
}: {
  backPath?: string;
  link?: string;
}) => {
  const [isLightTheme, setThemeToLight] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <FixedContainer navbarIsHidden={false}>
        <Container>
          <BackButton backPath={backPath} />
          {link && <ExternalSiteButton link={link} />}
        </Container>
      </FixedContainer>
    </ThemeProvider>
  );
};
