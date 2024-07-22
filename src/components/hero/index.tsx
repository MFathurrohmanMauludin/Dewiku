// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Button, Image, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../utils/weather";
import { kelvinToCelsius } from "../../utils/changeNumber";
import { VerifycationModal } from "../modal";

// import required modules

const Hero = () => {
  // get weather
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [weatherName, setWeatherName] = useState<string>("");
  const [weatherCodeIcon, setWeatherCodeIcon] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const getData = await getWeatherData(
          -8.043751410682805,
          115.29991353128011
        );
        setCityName(getData.name);
        setWeatherName(getData.weather[0].description);
        setWeatherCodeIcon(getData.weather[0].icon);
        setTemperature(getData.main.temp);
      } catch (err) {
        console.log("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <div
        className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center rounded-b-2xl"
        style={{
          backgroundImage:
            "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicjpSwM2KC7Ln684sDJwrTBieNvTtRGMllDcGy1YmAC_7Jo7yQHEtNO4dMWWc7yIT7QiUiGORMYeAUmi5lDMfg-TW_KPckFfarbeVf7rsECfN2TtM7k-DegbQEPqHWlyYnXALYExoOTLI/s1600/IMG_20161212_101915.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-40"></div>

        {/* left content */}
        <div className="absolute flex flex-col items-start top-50 left-10">
          <div className="flex flex-row items-center gap-x-1  px-2 py-2  bg-gray-900/30">
            <span className="text-lg text-white">Desa Wisata Jatimulyo</span>
            <VerifycationModal
              link={"https://jadesta.kemenparekraf.go.id/desa/bondalem"}
              name={"desa wisata jatimulyo"}
            />
          </div>
          <p className="text-5xl text-left text-white font-semibold max-w-[600px] tracking-wider leading-tight">
            Hilangkan penatmu dengan desa wisata kami yang hebat
          </p>

          <div className="flex flex-row gap-x-2 mt-4">
            <Button className="min-w-[120px] bg-green-700 text-white hover:!backdrop-blur-md">
              Cek Segera
            </Button>
            <Button className="min-w-[120px] bg-white text-green-700 hover:!backdrop-blur-md">
              Hubungi
            </Button>
          </div>
        </div>

        {/* right content */}
        <div className="absolute flex flex-col gap-y-4 top-5 right-50 z-[999]">
          <Tooltip
            content={
              <span className="capitalize">
                {weatherName} | {cityName}
              </span>
            }
            placement="bottom"
            showArrow
          >
            <div className="flex flex-row items-center gap-1 px-2 bg-white/20 backdrop-blur-sm w-fit rounded-full cursor-default">
              <Image
                className="h-[36px] w-[36px]"
                src={`https://openweathermap.org/img/wn/${weatherCodeIcon}.png`}
                width={56}
                alt={weatherCodeIcon}
              />

              <span className="text-sm text-white">
                {kelvinToCelsius(temperature || 0)}
                <sup className="text-[10px]">o</sup>C
              </span>
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Hero;
