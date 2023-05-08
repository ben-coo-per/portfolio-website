import styled from "styled-components";

const SVGBackground = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const ImgBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background-image: url("/images/landing-bg-gradient.png");
	background-size: clip;
`;

export const LandingBackgroundImage = () => {
	// if the user is on mobile, don't render the svg version of the background image
	if (typeof window !== "undefined" && window.innerWidth < 768) {
		return <ImgBackground></ImgBackground>;
	}

	return (
		<SVGBackground
			width="1373"
			height="1114"
			viewBox="350 300 600 700"
			fill="none"
		>
			<filter id="blur">
				<feGaussianBlur stdDeviation="50" />
			</filter>
			<filter id="noise">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="3"
					result="NOISE"
					opacity="0%"
				/>
				<feBlend
					mode="color-burn"
					in="SourceGraphic"
					in2="NOISE"
					result="NOISEBURN"
				/>
			</filter>
			<g filter="url(#blur) url(#noise)">
				<rect width="200%" height="200%" fill="#000" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M797.979 314.221C261.81 206.591 4.11545 306.132 0 594.327L24.2463 63.3721L499.895 44C770.051 74.4562 815.386 183.388 797.98 314.221L797.979 314.221Z"
					fill="#B33602"
					stroke="#000"
					strokeWidth="40"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M136 724.592C365.48 733.381 558.273 697.243 632.575 516C777.587 650.209 705.784 838.588 498.036 1010.94L138.597 973.295L136.001 724.592H136Z"
					fill="#B02F00"
					stroke="#000"
					strokeWidth="40"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M652.67 592.707C737.001 795.939 660.402 927.3 491 1017.21L904.432 1078C1245.05 1079.34 1309.24 763.618 1337 406.097L1128.5 256C1151.79 432.006 1038.33 678.556 652.669 592.707L652.67 592.707Z"
					fill="#D9A426"
					stroke="#000"
					strokeWidth="40"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M173.257 437.84L142.576 720.433C341.537 729.741 506.471 695 587.879 552.13C570.956 451.033 632.787 385.813 752.594 347.003C505.573 273.54 256.105 195.368 173.257 437.838L173.257 437.84Z"
					fill="#21A674"
					stroke="#000"
					strokeWidth="40"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1115.46 209C1016.41 293.935 912.631 367.783 746.898 296.1C529.01 371.959 526.138 454.181 565.152 586.58C970.891 625.158 1128.51 515.369 1115.46 209V209Z"
					fill="#5EBF40"
					stroke="#000"
					strokeWidth="40"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M700 0L1193.98 94.562C1073.74 249.892 946.742 371.103 780.843 295.787C798.947 196.36 793.814 97.3616 700.001 0.000472725L700 0Z"
					fill="#E6A91A"
					stroke="#000"
					strokeWidth="40"
				/>
			</g>
		</SVGBackground>
	);
};
