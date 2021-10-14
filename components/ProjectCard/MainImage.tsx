import { urlFor } from "sanity";
import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 1px;
  margin: 4px 0px;
  width: 100%;
`;

export const MainImage = ({ src, alt }: { src: any; alt: string }) => {
  return <StyledImage src={urlFor(src)} alt={alt} />;
};
