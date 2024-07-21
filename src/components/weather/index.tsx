// src/App.tsx
import { useState, useEffect } from 'react';
import { getWeather } from '../../utils/weather';

const Weather = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cityName, setCityName] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(35.7796, -78.6382); // Example coordinates
        setTemperature(data.data[0].temp);
        setCityName(data.data[0].city_name);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {temperature !== null ? (
        <p>The temperature in {cityName} is {temperature}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
