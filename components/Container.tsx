import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 100px;
  background-color: ${(props) => props.theme.bg};
  @media (max-width: 768px) {
    padding: 65px 10px;
    justify-items: center;
  }
`;

export const DisplayGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));

  justify-items: center;
`;
