import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";
import { BodyText } from "../TextComponents";
import { PageTitle, Container } from "components";
import { darkTheme } from "styles/theme";

const Headshot = styled(Image)`
	border-radius: 10px;
`;

const ImageContainer = styled.div`
	width: 100%;
	float: left;
	padding: 10px;
	@media (max-width: 600px) {
		width: 100%;
		padding: 0px;
		margin: auto;
	}
`;

const AboutMeBodyText = styled(BodyText)`
	width: 100%;
	float: left;
	font-size: 24px;
	margin-left: 20px;

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
		<ThemeProvider theme={darkTheme}>
			<Container id="about-me">
				<PageTitle>About Me</PageTitle>
				<AboutMeBodyText>
					I am an engineer by training but a designer & developer by practice.
					<br />
					<br />
					My dream job is to build everything from furniture to climate
					solutions alongside people that inspire me.
					<br />
					<br /> I like watching movies when it rains and riding my bike when it
					doesn’t.
				</AboutMeBodyText>
			</Container>
		</ThemeProvider>
	);
}
