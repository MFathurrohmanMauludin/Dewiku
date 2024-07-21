import axios from 'axios';

const API_KEY = '05ecbee2f30477e2d907534538a7b570'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const getWeatherData = async (lat: number, lon: number): Promise<WeatherData> => {
  const localStorageKey = "selectedLanguage";
  const storedLanguage = localStorage.getItem(localStorageKey) || "en";

  try {
    const response = await axios.get<WeatherData>(BASE_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        lang: storedLanguage === 'jp' ? 'ja' : storedLanguage
      },
    });  
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
