import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
	position: relative;

	min-height: 100vh;
	padding: 3rem;

	@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
		padding: 100px 80px;
		justify-items: center;
	}

	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		padding: 20px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		align-items: center;
	}

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
	border-bottom: 1px solid #264653;
`;

export const DisplayGrid = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, 300px);

	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
