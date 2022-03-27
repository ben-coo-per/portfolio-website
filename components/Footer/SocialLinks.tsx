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
	margin: 15px 4px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const SocialLinks = () => {
	return (
		<Row>
			<a href="https://www.linkedin.com/in/ben-a-cooper/">
				<FaLinkedinIn color="white" />
			</a>
			<a href="https://github.com/bencooper96">
				<FaGithub color="white" />
			</a>
			<a href="https://www.instagram.com/ben.coo.per/">
				<FaInstagram color="white" />
			</a>
			<a href="https://dribbble.com/ben-cooper/about">
				<FaDribbble color="white" />
			</a>
			<a href="https://twitter.com/cooperben83">
				<FaTwitter color="white" />
			</a>
		</Row>
	);
};
