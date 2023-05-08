import styled from "styled-components";
import { Category, CategoryTitleOptions } from "features/projects";
import getCategoryColor from "utils/categoryColorMapper";
import { CategoryIcon } from "../assets/CategoryIcons";
import {
	selectSelectedCategories,
	selectCategory,
	unSelectCategory,
} from "features/workSlice";
import { useDispatch, useSelector } from "react-redux";

export interface ToggleProps {
	isSelected: boolean;
	color: string;
}

const Toggle = styled.button<ToggleProps>`
	height: 28px;
	width: min-content;
	margin: 4px;
	padding: 4px;
	border-radius: 3px;

	display: flex;
	flex-direction: row;
	justify-content: center;

	text-align: center;
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: 600;
	align-items: center;
	cursor: pointer;

	box-shadow: ${(props) =>
		props.isSelected ? `0px 0.5px 5px rgba(0, 0, 0, 0.25)` : `none`};

	color: ${(props) =>
		props.isSelected ? "#fff" : props.theme[props.color].dark};

	background-color: ${(props) =>
		props.isSelected
			? props.theme[props.color]?.normal
			: props.theme[props.color]?.light};

	border: ${(props) => `1px solid ${props.theme[props.color].normal}`};

	transition: ease-in 0.19s;

	@media (min-width: 768px) {
		&:hover {
			box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
			transform: translateY(-1px);
		}
	}
`;

const CategoryName = styled.p`
	margin: 0px 4px;
`;

export const CategoryToggle = ({
	category,
}: {
	category: CategoryTitleOptions;
}) => {
	const selectedCategories = useSelector(selectSelectedCategories);
	const isSelected = selectedCategories.includes(category);

	const dispatch = useDispatch();
	const color = getCategoryColor(category);

	function handleToggle() {
		if (isSelected) {
			dispatch(unSelectCategory());
		} else {
			dispatch(selectCategory(category));
		}
	}

	if (color) {
		return (
			<Toggle color={color} isSelected={isSelected} onClick={handleToggle}>
				<CategoryIcon
					color={color}
					isSelected={isSelected}
					category={category}
				/>
				<CategoryName>{category}</CategoryName>
			</Toggle>
		);
	}
	return <></>;
};
