/* eslint-disable @next/next/no-img-element */
import { Project } from "features/projects";
import { sanityClient, urlFor } from "sanity";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Main } from "../index";
import { PortableText } from "@portabletext/react";

import { BackNav, Container, PageTitle, Header1, Footer } from "components";
import styled from "styled-components";
import { useWindowSize } from "utils/customHooks";
import { NextProjectButton } from "components/buttons";
import { Fragment } from "react";
interface ProjectPageProps {
	project: Project | null;
}

interface ContainerProps {
	backgroundImageUrl?: string;
}

const ProjectContainer = styled.div<ContainerProps>`
	position: relative;

	min-height: 100vh;
	padding: 100px 150px;

	background-color: ${(props) => props.theme.bg};
	@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
		padding: 100px 80px;
		justify-items: center;
	}

	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		padding: 65px 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		align-items: center;
	}

	background: ${(props) =>
		props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : "none"};
`;

const ImageContainer = styled.div`
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FigmaContainer = styled.div`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;

	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		width: 100%;
		padding-bottom: 150%;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const ImageComponent = ({ value }: { value: any }) => {
	let imageWidth = Math.floor(useWindowSize().width * 0.75);
	return (
		<ImageContainer>
			<img
				src={urlFor(value).width(imageWidth).fit("clip").url()}
				alt={value.alt || " "}
				loading="lazy"
			/>
		</ImageContainer>
	);
};

export default function Home({ project }: ProjectPageProps) {
	if (project) {
		return (
			<>
				<Head>
					<title>{`${project.title} | Ben Cooper`}</title>
					<meta
						name="description"
						content={`${project.title} from ${project.years} `}
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<BackNav link={project.linkToProject} />
				<Main>
					<ProjectContainer
						backgroundImageUrl={urlFor(project.backgroundImage)}
					>
						<PageTitle>{project?.title}</PageTitle>
						<PortableText
							value={project.body}
							components={{
								types: {
									image: ImageComponent,
								},
							}}
						/>
						{project.figmaLink && (
							<FigmaContainer
								dangerouslySetInnerHTML={{ __html: project.figmaLink }}
							/>
						)}
						<NextProjectButton id={project._id} />
					</ProjectContainer>
				</Main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Head>
				<title>Ben Cooper</title>
				<meta name="description" content="Welcome to my website" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BackNav />
			<Main>
				<Container>
					<PageTitle> Oops!</PageTitle>

					<Header1>This project is missing</Header1>
				</Container>
			</Main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const projects: Project[] =
		await sanityClient.fetch(`*[_type  == "project" && slug.current == "${params?.slug}"]{
      title,
      role,
      mainImage,
      backgroundImage,
      body,
	  figmaLink,
      linkToProject,
      categories[]->{
        _id,
        title,
      },
      years,
      _id,
    }`);

	if (projects.length > 0) {
		return { props: { project: projects[0] } };
	}

	return { props: { project: null } };
};
