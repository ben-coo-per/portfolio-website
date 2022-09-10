import { CategoryTitleOptions } from "features/projects";
import styled from "styled-components";
import { ToggleProps } from "../WorkCategorySelection/CategorySelectionToggle";

const Svg = styled.svg<ToggleProps>`
	stroke: ${(props) =>
		props.isSelected ? "#fff" : props.theme[props.color].dark};
	fill: none;
	width: 17px;
	height: 17px;
`;

export interface IconProps extends ToggleProps {
	category: CategoryTitleOptions;
}

export const CategoryIcon = (props: IconProps) => {
	if (props.category == "Product") {
		return <Product {...props} />;
	}
	if (props.category == "Digital") {
		return <Digital {...props} />;
	}
	if (props.category == "Furniture") {
		return <Furniture {...props} />;
	}
	if (props.category == "Experimental") {
		return <Experimental {...props} />;
	}
	return <></>;
};

const Product = ({ color, isSelected }: IconProps) => {
	return (
		<Svg color={color} isSelected={isSelected}>
			<path
				d="M10.7071 0.674866H5.29318C5.21863 0.674866 5.1582 0.735297 5.1582 0.809843V6.22377C5.1582 6.29832 5.21863 6.35875 5.29318 6.35875H10.7071C10.7817 6.35875 10.8421 6.29832 10.8421 6.22377V0.809844C10.8421 0.735297 10.7817 0.674866 10.7071 0.674866Z"
				stroke-width="1.34978"
			/>
			<path
				d="M6.39424 11.8293C6.39424 13.4185 5.10598 14.7067 3.51683 14.7067C1.92768 14.7067 0.639424 13.4185 0.639424 11.8293C0.639424 10.2402 1.92768 8.95192 3.51683 8.95192C5.10598 8.95192 6.39424 10.2402 6.39424 11.8293Z"
				stroke-width="1.27885"
			/>
			<path
				d="M9.0057 14.4679L12.3047 9.05062C12.3576 8.96376 12.484 8.96457 12.5358 9.0521L15.7406 14.4694C15.7937 14.5592 15.7289 14.6726 15.6246 14.6726H9.12081C9.01568 14.6726 8.95104 14.5577 9.0057 14.4679Z"
				stroke-width="1.34698"
			/>
		</Svg>
	);
};

const Digital = ({ color, isSelected }: IconProps) => {
	return (
		<Svg color={color} isSelected={isSelected}>
			<path
				d="M5.32399 2.85228C5.32399 4.00695 4.38794 4.943 3.23326 4.943C2.07858 4.943 1.14253 4.00695 1.14253 2.85228C1.14253 1.6976 2.07858 0.761548 3.23326 0.761548C4.38794 0.761548 5.32399 1.6976 5.32399 2.85228ZM5.32399 13.3208C5.32399 14.4755 4.38794 15.4115 3.23326 15.4115C2.07858 15.4115 1.14253 14.4755 1.14253 13.3208C1.14253 12.1661 2.07858 11.2301 3.23326 11.2301C4.38794 11.2301 5.32399 12.1661 5.32399 13.3208ZM14.9151 7.24249C14.9151 8.39717 13.9791 9.33322 12.8244 9.33322C11.6697 9.33322 10.7337 8.39717 10.7337 7.24249C10.7337 6.08781 11.6697 5.15176 12.8244 5.15176C13.9791 5.15176 14.9151 6.08781 14.9151 7.24249Z"
				stroke-width="1.35"
			/>
			<path
				d="M5.64331 13.2598H10.2895C10.3838 13.2598 10.4686 13.2023 10.5035 13.1146L12.0726 9.16919"
				stroke-width="1.35"
			/>
			<path d="M3.2334 10.8146V5.35846" stroke-width="1.35" />
		</Svg>
	);
};

const Furniture = ({ color, isSelected }: IconProps) => {
	return (
		<Svg color={color} isSelected={isSelected}>
			<path
				d="M8.96763 6.4204V0.901468C8.96763 0.826258 8.89478 0.772555 8.82294 0.7948L4.37307 2.17258C4.32631 2.18706 4.29443 2.2303 4.29443 2.27925V8.35616M8.96763 6.4204L13.6772 8.18291M8.96763 6.4204L4.29443 8.35616M13.6772 8.18291L8.68275 10.7919M13.6772 8.18291V12.5851M8.68275 10.7919L4.29443 8.35616M8.68275 10.7919V15.25M4.29443 8.35616V12.2863"
				stroke-width="1.35"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

const Experimental = ({ color, isSelected }: IconProps) => {
	return (
		<Svg color={color} isSelected={isSelected}>
			<path
				d="M11.3298 5.20178H10.5966M6.70898 5.20178H7.47982M7.47982 5.20178V8.06916C7.47982 8.12997 7.46651 8.19005 7.44083 8.24517L6.6561 9.92934M7.47982 5.20178H10.5966M10.5966 5.20178V8.07203C10.5966 8.13099 10.6091 8.18929 10.6333 8.24305L11.3922 9.92934M11.3922 9.92934L13.0374 13.5851C13.2856 14.1366 12.8822 14.7606 12.2774 14.7606H5.71286C5.1033 14.7606 4.69994 14.1276 4.95739 13.5751L6.6561 9.92934M11.3922 9.92934H6.6561"
				stroke-width="1.35"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<ellipse
				cx="10.4305"
				cy="12.9639"
				rx="0.656363"
				ry="0.656871"
				stroke-width="0.416728"
			/>
			<circle cx="9.68491" cy="3.28452" r="0.514746" stroke-width="0.416728" />
			<circle cx="8.24435" cy="1.82229" r="0.408902" stroke-width="0.416728" />
			<ellipse
				cx="8.1472"
				cy="11.7327"
				rx="0.573957"
				ry="0.574401"
				stroke-width="0.416728"
			/>
		</Svg>
	);
};
