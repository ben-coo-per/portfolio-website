import styled from "styled-components";
import { urlFor } from "sanity";
import Link from "next/link";
import { selectFilteredProjects } from "features/workSlice";
import { useSelector } from "react-redux";

interface NextProjectButtonProps {
  id: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  flex: none;
  order: 14;
  flex-grow: 0;
  margin: 32px 0px;
`;

const Title = styled.p<{ isBack?: boolean }>`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;

  margin-left: 6px;
  margin-right: ${(props) => (props.isBack ? "0px" : "6px")};
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  background: #ffffff;
  border: none;

  /* Card Shadow */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
`;

const StyledImage = styled.img`
  border-radius: 1px;
  background-color: #fff;
  width: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ActionsBox = styled.div`
  border-top: 1px solid ${(props) => props.theme.subtleText};
  margin: 32px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NextProjectButton = ({ id }: NextProjectButtonProps) => {
  const projects = useSelector(selectFilteredProjects);
  const nextProjectIndex = projects.map((proj) => proj._id).indexOf(id) + 1;

  if (projects[nextProjectIndex] != undefined) {
    const image = projects[nextProjectIndex].mainImage;
    const title = projects[nextProjectIndex].title;
    const slug = projects[nextProjectIndex].slug;
    return (
      <ActionsBox>
        <BackButton />

        <Wrapper>
          <Link href={`${slug}`} passHref>
            <a style={{ textDecoration: "none" }}>
              <StyledButton>
                <StyledImage
                  src={urlFor(image)}
                  alt={`${title} display image`}
                />
                <Title>{title}</Title>
                <img
                  src="/svg/forwardArrow.svg"
                  height="15px"
                  width="24px"
                  alt="forward arrow"
                />
              </StyledButton>
            </a>
          </Link>
        </Wrapper>
      </ActionsBox>
    );
  }

  return (
    <ActionsBox>
      <BackButton />
    </ActionsBox>
  );
};

const BackButton = () => {
  return (
    <Wrapper>
      <Link href="/#my-work" passHref>
        <a style={{ textDecoration: "none" }}>
          <StyledButton>
            <img
              src="/svg/BackArrow.svg"
              height="15px"
              width="24px"
              alt="backwards arrow"
            />
            <Title isBack>Back to projects</Title>
          </StyledButton>
        </a>
      </Link>
    </Wrapper>
  );
};
