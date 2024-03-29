import { useEffect } from "react";
import {
	PageTitle,
	WorkCategorySelectionRow,
	Container,
	ProjectCard,
	DisplayGrid,
} from "components";

import { Project } from "features/projects";
import { useDispatch, useSelector } from "react-redux";
import { hydrateProjects, selectSelectedCategories } from "features/workSlice";

export interface MyWorkProps {
	projects: Project[];
}

export function MyWorkSection({ projects }: MyWorkProps) {
	const dispatch = useDispatch();
	const selectedCategories = useSelector(selectSelectedCategories);

	// Filter out any projects that are not in the selected categories
	let projectsToRender: Project[] =
		selectedCategories.length == 0
			? projects
			: // selectedCategories.length > 1?
			  projects.filter((project) => {
					return project.categories.some((category) =>
						selectedCategories.includes(category.title)
					);
			  });

	useEffect(() => {
		dispatch(hydrateProjects(projectsToRender));
	}, [dispatch, projectsToRender]);

	return (
		<>
			<Container id="my-work">
				<PageTitle>
					My <br></br> Work
				</PageTitle>
				<WorkCategorySelectionRow />
				<DisplayGrid>
					{projectsToRender.map((project) => (
						<ProjectCard project={project} key={project._id} />
					))}
				</DisplayGrid>
			</Container>
		</>
	);
}
