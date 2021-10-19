export function getBrooklynTemperature() {
  fetchWeatherData();

  return;
}

async function fetchWeatherData() {
  const lat = 40.692532;
  const lon = -73.990997;
  const part = "minutely, hourly, daily, alerts";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`
  );

  console.log(res);
}
