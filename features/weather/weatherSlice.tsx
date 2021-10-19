import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentWeatherApiResponse, ApiResponse } from "./types";
import { RootState } from "features/store";

interface WeatherState {
  weather: {
    main: string;
    icon: string;
    description: string;
    id: number;
  };
  temperature: number;
  dt: number;
  sunrise: number;
  sunset: number;
}

// Define the initial state using that type
const initialState: WeatherState = {
  weather: {
    main: "",
    icon: "",
    description: "",
    id: 0,
  },
  temperature: 0,
  dt: 0,
  sunrise: 0,
  sunset: 0,
};

export const weatherSlice = createSlice({
  name: "weather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    hydrateWeather: (
      state,
      action: PayloadAction<CurrentWeatherApiResponse>
    ) => {
      console.log(action.payload);
      state = {
        weather: action.payload.weather[0],
        temperature: Math.round(action.payload.temp),
        dt: action.payload.dt,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
      };
      return state;
    },
  },
});

export const { hydrateWeather } = weatherSlice.actions;

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getCurrentBrooklynWeather: builder.query<
      ApiResponse,
      { lon: number; lat: number }
    >({
      query(location) {
        return {
          url: `onecall?lat=${location.lat}&lon=${location.lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`,
          method: "GET",
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(hydrateWeather(data.current));
        } catch (err) {
          // `onError` side-effect
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetCurrentBrooklynWeatherQuery } = weatherApi;

export const getWeather = (state: RootState) => state.weather;
