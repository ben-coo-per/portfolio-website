import styled from "styled-components";

interface TextProps {
	italic?: boolean;
	bold?: boolean;
}

export const PageTitle = styled.h1`
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 72px;
	line-height: 100px;
	display: flex;
	margin: 0px;
	margin-bottom: 20px;
	height: min-content;
	width: 100%;
	padding-top: 20px;

	grid-column: 1 / span 12;

	color: ${(props) => props.theme.subtleText};
	@media (max-width: ${(props) => props.theme.breakpoints.xs}) {
		text-align: left;
		font-size: 4rem;
	}
`;

export const BodyText = styled.p<TextProps>`
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	font-style: ${(props) => (props.italic ? "italic" : "normal")};
	font-weight: ${(props) => (props.bold ? "bold" : "normal")};
	font-size: 18px;
	line-height: 180%;
	margin: 0;

	color: ${(props) => props.theme.text};
`;

export const Header1 = styled.h1<TextProps>`
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	font-style: ${(props) => (props.italic ? "italic" : "normal")};
	font-weight: ${(props) => (props.bold ? "bold" : "normal")};
	font-size: 48px;
	line-height: 180%;
	margin: 0;

	color: ${(props) => props.theme.text};
`;

export const Header2 = styled.h2<TextProps>`
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	margin: 0;
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	font-style: ${(props) => (props.italic ? "italic" : "normal")};
	font-weight: bold;
	font-size: 24px;
	line-height: 150%;

	color: ${(props) => props.theme.text};
`;

export const Quote = styled.p<TextProps>`
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	font-style: ${(props) => (props.italic ? "italic" : "normal")};
	font-weight: ${(props) => (props.bold ? "bold" : "normal")};

	font-size: 18px;
	line-height: 180%;
	margin: 0;

	color: ${(props) => props.theme.text};
`;
