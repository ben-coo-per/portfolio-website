export interface CurrentWeatherApiResponse {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface ApiResponse {
  alerts: any[];
  current: CurrentWeatherApiResponse;
  daily: any[];
  hourly: any[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
