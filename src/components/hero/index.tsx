// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Avatar, AvatarGroup, Button, Image, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../utils/weather";
import { kelvinToCelsius } from "../../utils/changeNumber";
import { VerifycationModal } from "../modal";
import useStore from "../../utils/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// import required modules

const Hero = () => {
  // get weather
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [weatherName, setWeatherName] = useState<string>("");
  const [weatherCodeIcon, setWeatherCodeIcon] = useState<string>("");
  const { isScroll } = useStore();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const getData = await getWeatherData(
          -8.043751410682805,
          115.29991353128011
        );
        setCityName(getData.name);
        setWeatherName(getData.weather[0].description);
        setWeatherCodeIcon(
          `https://openweathermap.org/img/wn/${getData.weather[0].icon}.png`
        );
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
        className="relative h-[600px] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicjpSwM2KC7Ln684sDJwrTBieNvTtRGMllDcGy1YmAC_7Jo7yQHEtNO4dMWWc7yIT7QiUiGORMYeAUmi5lDMfg-TW_KPckFfarbeVf7rsECfN2TtM7k-DegbQEPqHWlyYnXALYExoOTLI/s1600/IMG_20161212_101915.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-30"></div>

        {/* left content */}
        <div className="absolute flex flex-col items-start xs:items-center top-50 left-8 xs:left-0 xs:px-4 xs:top-50">
          <div className="flex flex-row items-center gap-x-1 px-2 py-2  bg-gray-900/30 rounded-md">
            <span className="text-lg text-white">Desa Wisata Jatimulyo</span>
            <VerifycationModal
              link={"https://jadesta.kemenparekraf.go.id/desa/bondalem"}
              name={"desa wisata jatimulyo"}
            />
          </div>
          <p className="text-5xl xs:text-2xl xs:text-center text-left text-white font-semibold max-w-[600px] tracking-wider leading-tight xs:leading-snug py-3">
            Hilangkan penatmu dengan desa wisata kami yang hebat
          </p>

          {/* rating */}
          <div className="flex flex-row items-center gap-x-2">
            <div className="space-x-1 bg-white/20 backdrop-blur-sm  px-3 py-2 rounded-full">
              <FontAwesomeIcon
                className="text-yellow-400"
                icon={faStar}
                fontSize={16}
              />
              <span className="text-white">4.5</span>
            </div>
            <AvatarGroup
              classNames={{ count: "bg-white text-green-700 text-md" }}
              max={3}
            >
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            </AvatarGroup>
          </div>

          <div className="flex flex-row gap-x-2 mt-6">
            <Button className="min-w-[120px] bg-green-700 text-white hover:!backdrop-blur-md">
              Cek Segera
            </Button>
            <Button className="min-w-[120px] bg-white text-green-700 hover:!backdrop-blur-md">
              Hubungi
            </Button>
          </div>
        </div>

        {/* center content */}
        <div
          className={`absolute flex flex-col gap-y-4 top-5 right-50 xs:top-16 xs:right-5 ${
            isScroll ? "z-0" : "z-[999]"
          }`}
        >
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
                src={weatherCodeIcon}
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

        {/* right */}
        <div className="absolute flex flex-row gap-x-2 top-30 right-8 xs:bottom-10 xs:right-4">
          <Button
            className="bg-white/20 backdrop-blur-sm text-gray-600"
            startContent={<FontAwesomeIcon icon={faArrowLeft} fontSize={16} />}
            disabled
            isIconOnly
          />
          <Button
            className="bg-white/20 backdrop-blur-sm text-white hover:text-green-300"
            startContent={<FontAwesomeIcon icon={faArrowRight} fontSize={16} />}
            isIconOnly
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
