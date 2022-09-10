interface IconProps {
	color?: string;
	size?: string;
}

export const ExternalIcon = ({ color = "black", size = "24" }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V14M14 4H20M20 4V10M20 4L10 14"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
