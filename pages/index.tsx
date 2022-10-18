import Head from "next/head";
import styled from "styled-components";
import {
	Footer,
	Nav,
	AboutMeSection,
	MyWorkSection,
	Landing,
} from "components";
import { sanityClient } from "sanity";
import { Category, Project } from "features/projects";
import { MyWorkProps } from "components/Sections/MyWork";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
`;

interface HomeProps extends MyWorkProps {}

export default function Home({ projects }: HomeProps) {
	return (
		<>
			<Head>
				<title>Ben Cooper</title>
				<meta name="description" content="Welcome to my website" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<Main>
				<Landing />
				<AboutMeSection />
				<MyWorkSection projects={projects} />
			</Main>
			<Footer />
		</>
	);
}

export async function getServerSideProps() {
	const projects: Project[] =
		await sanityClient.fetch(`*[_type  == "project" ]{    
    title, 
    role,
    mainImage,
    categories[]->{
      _id,
      title,
    }, 
    "slug": slug.current,
    years,
    priority,
    _id, 
  }| order(years desc, priority desc)`);

	const props: MyWorkProps = { projects };

	return { props };
}
