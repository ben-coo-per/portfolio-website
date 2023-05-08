import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px 10px;
	background: ${(props) => props.theme.bg};
	border: none;

	border-radius: 1px;

	cursor: pointer;
`;

const Title = styled.p<{ isBack?: boolean }>`
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 0px;

	margin-right: 6px;
	color: ${(props) => props.theme.text};
`;

const Svg = styled.svg`
	fill: ${(props) => props.theme.text};
	width: 24px;
	height: 15px;
`;

export const GetInTouchButton = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	return (
		<a style={{ textDecoration: "none" }} href="mailto:me@bencooper.xyz">
			<StyledButton>
				<Title>{children}</Title>
				<Svg>
					<path d="M0.18335 6.23079C0.18335 7.10671 0.733417 7.71421 1.83355 8.05327C2.93369 8.36409 4.47627 8.51949 6.4613 8.51949C10.4765 8.51949 14.39 8.23454 18.4073 8.56188C19.651 8.6749 20.7989 8.74554 21.8513 8.77379C22.1143 8.77379 22.2937 8.64664 22.3894 8.39234C22.5089 8.13804 22.5687 7.86961 22.5687 7.58706C22.5687 7.24799 22.4133 6.96543 22.1024 6.73939C21.8154 6.51334 21.5164 6.40032 21.2055 6.40032C12.7811 6.0196 11.3157 6.20091 1.72593 5.72218C1.19978 5.72218 0.829082 5.72218 0.613838 5.72218C0.235768 5.66635 0.18335 5.74826 0.18335 6.23079Z" />
					<path d="M14.7951 12.8463C14.5098 13.4484 14.6029 14.1142 15.0742 14.8437C15.3339 15.2456 15.4003 15.2986 15.531 15.1422L16.0038 14.819C19.8232 11.6331 20.5438 11.3581 23.9205 8.59256C24.2484 8.36836 24.2929 7.10929 23.9205 6.8547C20.5438 4.08912 19.8232 3.8142 16.0038 0.628291L15.531 0.305067C15.4003 0.148682 15.3339 0.201662 15.0742 0.603526C14.6029 1.33302 14.5098 1.99884 14.7951 2.60097C15.0955 3.17957 15.6677 3.75734 16.5116 4.33428C18.2187 5.50129 20.0358 6.40139 21.5676 7.84164C20.0358 9.28189 18.2187 9.94598 16.5116 11.113C15.6677 11.6899 15.0955 12.2677 14.7951 12.8463Z" />
				</Svg>
			</StyledButton>
		</a>
	);
};
