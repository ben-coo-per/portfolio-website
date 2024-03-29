import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "styles/theme";
import { GetInTouchButton } from "components/buttons";
import { SocialLinks } from "./SocialLinks";
import Image from "next/image";
import {
	getWeather,
	useGetCurrentBrooklynWeatherQuery,
} from "features/weather/weatherSlice";
import { useSelector } from "react-redux";

const Container = styled.footer`
	background: linear-gradient(
		69deg,
		${(props) => props.theme.bgGradient[0]},
		${(props) => props.theme.bgGradient[1]},
		${(props) => props.theme.bgGradient[2]},
		${(props) => props.theme.bgGradient[3]},
		${(props) => props.theme.bgGradient[4]}
	);
	background-size: 300% 300%;
	animation: gradient-animation 20s ease infinite;
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

	padding: 20px 100px;
	display: flex;
	@media (max-width: 768px) {
		padding: 65px 10px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 825px;
`;

const MainText = styled.h1`
	margin: 15px 0px;
	font-family: "PPAgrandir", "Raleway", "Open Sans", sans-serif;
	font-style: normal;
	font-size: 48px;

	color: ${(props) => props.theme.subtleText};
`;

const SecondaryText = styled.h2`
	margin: 15px 0px;
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;

	color: ${(props) => props.theme.subtleText};
`;

const BuiltWithText = styled.p`
	font-family: "PPRadar", "Raleway", "Open Sans", sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;

	color: ${(props) => props.theme.subtleText};
`;

function weatherMapper(weatherInput: string) {
	if (weatherInput === "thunderstorm" || weatherInput === "rain") {
		return "stormy";
	}
	if (weatherInput === "drizzle") {
		return "drizzling";
	}
	if (weatherInput === "snow") {
		return "snowing";
	}
	if (weatherInput === "clouds") {
		return "cloudy";
	}
	if (weatherInput === "mist") {
		return "misty";
	}
	if (weatherInput === "fog") {
		return "foggy";
	}
	if (weatherInput === "haze") {
		return "hazy";
	}

	if (
		weatherInput === "smoke" ||
		weatherInput === "dust" ||
		weatherInput === "sand" ||
		weatherInput === "ash" ||
		weatherInput === "squall" ||
		weatherInput === "tornado"
	) {
		return `the world might be ending (${weatherInput})`;
	}

	return weatherInput;
}

export const Footer = () => {
	const location = { lat: 40.692532, lon: -73.990997 };
	const weather = useSelector(getWeather);
	const { isSuccess, isLoading } = useGetCurrentBrooklynWeatherQuery(location);

	if (isSuccess) {
		return (
			<ThemeProvider theme={darkTheme}>
				<Container>
					<Wrapper>
						<Image
							height={100}
							width={100}
							src={`http://openweathermap.org/img/wn/${weather.weather.icon}@4x.png`}
						/>

						<MainText>
							{`It’s ${weather.temperature}˚F and ${weatherMapper(
								weather.weather.main.toLowerCase()
							)} here in Brooklyn, NY`}
						</MainText>
						<SecondaryText>And I’m eager to meet you</SecondaryText>
						<GetInTouchButton>Get In Touch</GetInTouchButton>
						<SocialLinks />
						<BuiltWithText>
							Built with Next.js, styled-components, Sanity.io, and Redux
						</BuiltWithText>
					</Wrapper>
				</Container>
			</ThemeProvider>
		);
	}

	if (isLoading) {
		return (
			<ThemeProvider theme={darkTheme}>
				<Container>
					<Wrapper>
						<MainText>{`It’s --˚F and ------ here in Brooklyn, NY`}</MainText>
						<SecondaryText>And I’m eager to meet you</SecondaryText>
						<GetInTouchButton>Get In Touch</GetInTouchButton>
						<SocialLinks />
						<BuiltWithText>
							Built with Next.js, styled-components, Sanity.io, and Redux
						</BuiltWithText>
					</Wrapper>
				</Container>
			</ThemeProvider>
		);
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<Container>
				<Wrapper>
					<SecondaryText>I’m eager to meet you</SecondaryText>
					<GetInTouchButton>Get In Touch</GetInTouchButton>
					<SocialLinks />
					<BuiltWithText>
						Built with Next.js, styled-components, Sanity.io, and Redux
					</BuiltWithText>
				</Wrapper>
			</Container>
		</ThemeProvider>
	);
};
