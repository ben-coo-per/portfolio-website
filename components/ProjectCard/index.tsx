import styled from "styled-components";
import { Project } from "features/projects";
import Link from "next/link";
import { MainImage } from "./MainImage";
import { CategoryIndicator } from "./CategoryIndicator";
import {
	ProjectYears,
	ProjectRole,
	ProjectTitle,
	UpperDetails,
	LowerDetails,
	CategoriesRow,
} from "./Styles";

export const CardBase = styled.div`
	max-width: 350px;
	margin-top: 10px;
	border-radius: 1.5px;

	border: 2px solid #264653;
	background: #fff;
	color: ${(props) => props.theme.text};

	display: flex;
	flex-direction: column;
	align-items: stretch;

	column-count: 3;
	cursor: pointer;

	transition: ease-in 0.19s;

	.subtleText {
		color: ${(props) => props.theme.subtleText};
	}
	&:hover {
		background: linear-gradient(
			69deg,
			#1a2f38,
			#264653,
			#335e70,
			#1a2f38,
			#23526c
		);
		background-size: 300% 300%;
		animation: gradient-animation 8s ease infinite;
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
		margin-top: -0px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
		color: #fff;
	}

	&:hover .subtleText {
		color: #bfcad6;
	}
`;

export const ProjectCard = ({ project }: { project: Partial<Project> }) => {
	return (
		<Link href={`/project/${project.slug}`} passHref>
			<CardBase>
				<UpperDetails>
					<CategoriesRow>
						{project.categories?.map((category) => (
							<CategoryIndicator
								category={category.title}
								key={category.title}
							/>
						))}
					</CategoriesRow>
					<ProjectYears className="subtleText">{project.years}</ProjectYears>
				</UpperDetails>
				<MainImage
					src={project.mainImage}
					alt={`${project.title} display image`}
				/>

				<LowerDetails>
					<ProjectTitle>{project.title}</ProjectTitle>
					<ProjectRole className="subtleText">{project.role}</ProjectRole>
				</LowerDetails>
			</CardBase>
		</Link>
	);
};

export { MainImage } from "./MainImage";
export { CategoryIndicator } from "./CategoryIndicator";
