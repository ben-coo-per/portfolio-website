import styled from "styled-components";
import { urlFor } from "sanity";
import Link from "next/link";
import { selectFilteredProjects } from "features/workSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Header2 } from "components";

interface NextProjectButtonProps {
	id: string;
}

const Title = styled.p<{ isBack?: boolean }>`
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
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
	border-radius: 1px;

	cursor: pointer;

	&:hover {
		/* background-color: #264653; */
		/* color: #fff; */
		margin-top: -0px;
		box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
	}
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
	border-bottom: 1px solid ${(props) => props.theme.subtleText};
	margin-top: 32px;
	margin-bottom: 16px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 16px 0px;
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
				<Header2>Next Project</Header2>
				<Link href={`${slug}`} passHref>
					<a style={{ textDecoration: "none" }}>
						<StyledButton>
							<StyledImage src={urlFor(image)} alt={`${title} display image`} />
							<Title>{title}</Title>
							<Image
								src="/svg/forwardArrow.svg"
								height="15px"
								width="24px"
								alt="forward arrow"
							/>
						</StyledButton>
					</a>
				</Link>
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
		<Link href="/#my-work" passHref>
			<a style={{ textDecoration: "none" }}>
				<StyledButton>
					<Image
						src="/svg/BackArrow.svg"
						height="15px"
						width="24px"
						alt="backwards arrow"
					/>
					<Title isBack>Back to projects</Title>
				</StyledButton>
			</a>
		</Link>
	);
};
