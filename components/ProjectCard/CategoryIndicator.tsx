import styled from "styled-components";
import { CategoryTitleOptions } from "features/projects";
import getCategoryColor from "utils/categoryColorMapper";
import { CategoryIcon } from "components/assets/CategoryIcons";

const CircleContainer = styled.div`
	border-radius: 1px;
	margin: 0px 2px;
	padding: 3px;
	width: 20px;
	height: 20px;
	display: flex;
	// centering along main axis - X axis - Horizontal
	justify-content: center;
	// centering along cross axis - Y axis - Vertical
	align-items: center;
	background-color: ${(props) =>
		props.color && props.color !== ""
			? props.theme[props.color].normal
			: props.theme.darkGray};
`;

export const CategoryIndicator = ({
	category,
}: {
	category: CategoryTitleOptions;
}) => {
	const color = getCategoryColor(category);
	return (
		<CircleContainer color={color}>
			<CategoryIcon category={category} color={color} isSelected={true} />
		</CircleContainer>
	);
};
