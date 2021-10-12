import styled from "styled-components";

export const Container = styled.div`
  /* min-height: 100vh; */
  margin: 60px 120px;

  @media (max-width: 768px) {
    margin: 65px 10px;
    justify-items: center;
  }

  /* background-color: aquamarine; */
`;

export const DisplayGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));

  justify-items: center;
`;
