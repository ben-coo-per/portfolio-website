import styled from "styled-components";
import { BodyText } from "../TextComponents";
import { PageTitle, Container } from "components";

const AboutMeBodyText = styled(BodyText)`
	font-family: "PPAgrandir-wide-regular", "PPAgrandir", "Raleway", "Open Sans",
		sans-serif;
	width: 100%;
	float: left;
	font-size: 32px;

	@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
		font-size: 20px;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.xs}) {
		font-size: 24px;
		margin: 20px 0px;
	}
`;

export function AboutMeSection() {
	return (
		<Container id="about-me">
			<PageTitle>
				About <br /> Me
			</PageTitle>
			<AboutMeBodyText>
				I am an engineer by training but a designer & developer by practice.
				<br />
				<br />
				My dream job is to build everything from furniture to climate solutions
				alongside people that inspire me.
				<br />
				<br /> I like watching movies when it rains and riding my bike when it
				doesn’t.
			</AboutMeBodyText>
		</Container>
	);
}
