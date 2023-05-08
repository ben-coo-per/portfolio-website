import { LandingBackgroundImage } from "components/assets/LandingBackgroundImage";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

const LandingContainer = styled.div`
	overflow-x: hidden;
	height: 100%;
	flex: 1;
	background: linear-gradient(
		69deg,
		${(props) => props.theme.bgGradient[0]},
		${(props) => props.theme.bgGradient[1]},
		${(props) => props.theme.bgGradient[2]},
		${(props) => props.theme.bgGradient[3]},
		${(props) => props.theme.bgGradient[4]}
	);
	background-size: 300% 300%;
	animation: gradient-animation 20s ease infinite;
	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	@media (max-width: 768px) {
		padding: 0;
	}
	border-bottom: 1px solid #000;
`;

const CenteredDiv = styled.div`
	min-height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;

	position: relative;
	text-align: left;
	@media (max-width: 768px) {
		min-height: 100vh;
	}
	z-index: 0;

	span {
		position: relative;
		z-index: 2;
		animation: fadeIn 3.5s ease;
		font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
		font-size: 12rem;
		@media (max-width: 768px) {
			font-size: 4rem;
		}
		margin-left: 1rem;

		line-height: 90%;
		color: #fff;

		&:nth-child(1) {
			@media (max-width: 768px) {
				margin-top: 2rem;
			}
		}

		&:nth-child(2) {
			animation: fadeIn 4s ease;
		}
	}
`;

const LinksContainer = styled.div`
	z-index: 2;
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	color: #fff;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	display: flex;
	flex-direction: row;

	gap: 1.4rem;

	text-align: left;

	@media (max-width: 768px) {
		left: 0;
		width: 100%;
		text-align: center;
		justify-items: center;
	}
`;

export const LandingNavLink = styled(ScrollLink)`
	animation: fadeIn 4.5s ease;
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	font-size: 28px;
	text-decoration: none;

	cursor: pointer;
	@media (max-width: 768px) {
		margin: 0px 16px;
	}

	&:hover {
		text-decoration: underline;
	}

	transition: ease-in 0.2s;
`;

const WebsiteVersionText = styled.p`
	font-family: "PPRadar", monospace;
	position: absolute;
	top: 0;
	right: 0;
	margin: 1.5rem 3rem;
	text-align: right;
`;

export const Landing = () => {
	return (
		<LandingContainer id="landing">
			<WebsiteVersionText>v6.0</WebsiteVersionText>
			<CenteredDiv>
				<span>Ben</span>
				<span>Cooper</span>
				<LinksContainer>
					<LandingNavLink
						activeClass="active"
						to="about-me"
						spy={true}
						smooth={true}
						duration={500}
					>
						about
					</LandingNavLink>
					<LandingNavLink
						activeClass="active"
						to="my-work"
						spy={true}
						smooth={true}
						duration={500}
					>
						projects
					</LandingNavLink>
				</LinksContainer>
				<LandingBackgroundImage />
			</CenteredDiv>
		</LandingContainer>
	);
};
