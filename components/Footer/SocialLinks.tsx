import styled from "styled-components";
import {
	FaDribbble,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

const Row = styled.div`
	width: 100px;
	margin: 2rem 0.25rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.2s ease-in-out;

		margin: 0 0.25rem;
		padding: 0.5rem;

		&:hover {
			transform: scale(1.2);
		}
	}
`;

export const SocialLinks = () => {
	return (
		<Row>
			<a href="https://github.com/bencooper96">
				<FaGithub color="white" />
			</a>
			<a href="https://www.instagram.com/ben.coo.per/">
				<FaInstagram color="white" />
			</a>
			<a href="https://twitter.com/cooperben83">
				<FaTwitter color="white" />
			</a>
			<a href="https://www.linkedin.com/in/ben-a-cooper/">
				<FaLinkedinIn color="white" />
			</a>
		</Row>
	);
};
