// src/weatherService.ts
import axios from 'axios';

const API_KEY = 'f5bf017bb2574a29b0c454b89d7e72fb'; // Replace with your actual API key
const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

interface WeatherResponse {
  data: [
    {
      temp: number;
      city_name: string;
      weather: {
        description: string;
        icon: string;
      }
      // Add other properties you need
    }
  ];
  // Add other properties you need
}

export const getWeather = async (lat: number, lon: number): Promise<WeatherResponse> => {
  const response = await axios.get<WeatherResponse>(BASE_URL, {
    params: {
      lat,
      lon,
      key: API_KEY,
      include: 'minutely',
    },
  });
  return response.data;
};
