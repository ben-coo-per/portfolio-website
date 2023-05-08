import { ExternalIcon } from "public/svg/ExternalIcon";
import styled from "styled-components";

const HiddenOnHover = styled.div``;
const HiddenOffHover = styled.div`
	display: none;
`;

const StyledButton = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px 10px;

	background: #fff;
	color: ${(props) => props.theme.text};
	border: 1.5px solid #264653;
	border-radius: 6px;

	cursor: pointer;

	&:hover {
		background: linear-gradient(
			69deg,
			#1a2f38,
			#264653,
			#335e70,
			#1a2f38,
			#23526c
		);
		background-size: 300% 300%;
		animation: gradient-animation 8s ease infinite;
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
		margin-top: -0px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
		color: #fff;
		${HiddenOffHover} {
			display: inline;
		}
		${HiddenOnHover} {
			display: none;
		}
	}
`;

const Title = styled.p`
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	text-decoration: none;
	margin-left: 6px;
	margin-right: 6px;
`;

interface ButtonProps {
	link: string;
}
export const ExternalSiteButton = ({ link }: ButtonProps) => {
	return (
		<StyledButton href={link} target="_blank">
			<Title>Link to Project</Title>
			<HiddenOnHover>
				<ExternalIcon />
			</HiddenOnHover>
			<HiddenOffHover>
				<ExternalIcon color="white" />
			</HiddenOffHover>
		</StyledButton>
	);
};
