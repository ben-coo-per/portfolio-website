import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const FixedContainer = styled.div`
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
  padding: 10px 64px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  height: 65.09px;
  background: #fdfcff;
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

const NavLink = styled.a`
  margin: 0px 48px;
  font-family: "Indie Flower", "Raleway", "Open Sans", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    margin: 0px 16px;
  }
`;

const NavIcon = styled(Image)`
  cursor: pointer;
`;

export const Nav = (props: { backPath?: string }) => {
  return (
    <FixedContainer>
      <Container>
        <Icon backPath={props.backPath} />
        <NavLinks>
          <NavLink href="/about-me">about me</NavLink>
          <NavLink href="/my-work">my work</NavLink>
        </NavLinks>
      </Container>
    </FixedContainer>
  );
};

const Icon = forwardRef((props: { backPath?: string }, ref) => {
  if (props.backPath) {
    return (
      <a href={props.backPath}>
        <NavIcon src={"/svg/BackArrow.svg"} height={"20px"} width={"32px"} />
      </a>
    );
  }
  return (
    <a href={"/"}>
      <NavIcon src={"/logo.svg"} height={"45px"} width={"45px"} />
    </a>
  );
});
