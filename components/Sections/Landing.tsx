import Image from "next/image";
import { NavLink } from "components/Nav";
import styled from "styled-components";

const LandingContainer = styled.div`
	height: 100vh;
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
`;

const CenteredDiv = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	text-align: center;
`;

const LinksContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	@media (max-width: 768px) {
		margin-top: 48px;
		flex-direction: column;
		justify-items: center;
		position: inherit;
	}
`;

const LandingNavLink = styled(NavLink)`
	margin: 0px 14px;
	@media (max-width: 768px) {
		margin: 12px;
		font-size: 40px;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const Landing = () => {
	return (
		<LandingContainer id="landing">
			<CenteredDiv>
				<Image
					src="/landingImage.png"
					width="370px"
					height="200px"
					alt="Illustation of me"
				/>
				<LinksContainer>
					<LandingNavLink
						activeClass="active"
						to="about-me"
						spy={true}
						smooth={true}
						duration={500}
					>
						about me
					</LandingNavLink>
					<LandingNavLink
						activeClass="active"
						to="my-work"
						spy={true}
						smooth={true}
						duration={500}
					>
						my work
					</LandingNavLink>
				</LinksContainer>
			</CenteredDiv>
		</LandingContainer>
	);
};
