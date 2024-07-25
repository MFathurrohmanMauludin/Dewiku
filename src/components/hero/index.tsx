import { Avatar, AvatarGroup, Button, Image, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../utils/weather";
import { getAverageRating, kelvinToCelsius } from "../../utils/changeNumber";
import { VerifycationModal } from "../modal";
import useStore from "../../utils/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { DesaWisataData } from "../../utils/data";

const Hero = () => {
  // data
  const desa = DesaWisataData();

  // get weather
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [weatherName, setWeatherName] = useState<string>("");
  const [weatherCodeIcon, setWeatherCodeIcon] = useState<string>("");
  const [isSlide, setIsSlide] = useState<number>(0);
  const { t } = useTranslation();
  const { isScroll } = useStore();

  // handle next slide
  const handleNextSlide = () => {
    setIsSlide(isSlide + 1);
  };

  // handle prev slide
  const handlePrevSlide = () => {
    setIsSlide(isSlide - 1);
  };

  useEffect(() => {
    setIsSlide(isSlide >= desa.length ? 0 : isSlide);
  }, [isSlide]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const getData = await getWeatherData(
          desa[isSlide].weatherLocation.lat,
          desa[isSlide].weatherLocation.lon
        );
        
        setCityName(getData.name);
        setWeatherName(getData.weather[0].description);
        setWeatherCodeIcon(
          `https://openweathermap.org/img/wn/${getData.weather[0].icon}.png`
        );
        setTemperature(getData.main.temp);
      } catch (err) {
        console.log("Failed to fetch weather data", err);
      }
    };
    
    fetchWeather();
  }, [isSlide, desa]);

  const detail = desa[isSlide];

  return (
    <>
      <div
        className="relative h-[600px] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url("${detail.imgUrl}")`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-30"></div>

        {/* left content */}
        <div className="absolute flex flex-col items-start xs:items-center top-50 left-8 xs:left-0 xs:px-4 xs:top-50">
          <div className="flex flex-row items-center gap-x-1 px-2 py-2 bg-gray-900/30 rounded-md">
            <span className="text-lg text-white capitalize">{detail.name}</span>
            <VerifycationModal
              link={detail.verification.link}
              name={detail.name}
            />
          </div>
          <p className="text-5xl xs:text-2xl xs:text-center text-left text-white font-semibold max-w-[600px] tracking-wider leading-tight xs:leading-snug py-3">
            Hilangkan penatmu dengan desa wisata kami yang hebat
          </p>

          {/* rating */}
          <div className="flex flex-row items-center gap-x-2">
            <div className="space-x-1 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <FontAwesomeIcon
                className="text-yellow-400"
                icon={faStar}
                fontSize={16}
              />
              <span className="text-white">{getAverageRating([detail])}</span>
            </div>
            <AvatarGroup
              classNames={{ count: "bg-white text-green-700 text-md" }}
              max={3}
            >
              {detail.testimony.flatMap((data) => (
                <Avatar classNames={{img: "!bg-cover !object-top"}} src={data.imgUrl} />
              ))}
            </AvatarGroup>
          </div>

          {/* slide click */}
          <div className="flex flex-row gap-x-2 mt-6">
            <Button className="min-w-[120px] bg-green-700 text-white hover:!backdrop-blur-md capitalize">
              {t("checkNow")}
            </Button>
            <Button className="min-w-[120px] bg-white text-green-700 hover:!backdrop-blur-md capitalize">
              {t("call")}
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
            {/* weather */}
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
            isDisabled={isSlide <= 0}
            onPress={handlePrevSlide}
            isIconOnly
          />
          <Button
            className="bg-white/20 backdrop-blur-sm text-white hover:text-green-300"
            startContent={<FontAwesomeIcon icon={faArrowRight} fontSize={16} />}
            onPress={handleNextSlide}
            isDisabled={isSlide === desa.length - 1}
            isIconOnly
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
