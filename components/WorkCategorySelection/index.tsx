import styled from "styled-components";
import { CategoryTitleOptions, Categories } from "features/projects";
import { CategoryToggle } from "./CategorySelectionToggle";

const Container = styled.div`
	padding-top: 4px;
	margin-bottom: 20px;
	display: flex;
	flex-flow: row wrap;

	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		justify-content: center;
	}
`;

export const WorkCategorySelectionRow = () => {
	// @ts-ignore
	const allCategories: CategoryTitleOptions[] = Object.keys(Categories);

	return (
		<Container>
			{allCategories.map((category) => (
				<CategoryToggle category={category} key={category} />
			))}
		</Container>
	);
};
