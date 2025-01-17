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
import { Link } from "react-router-dom";
import { Link as ExternalLink } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const localStorageKey = "selectedLanguage";
  const storedLanguage = localStorage.getItem(localStorageKey) || "en";

  // data
  const desa = DesaWisataData();

  // get weather
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [weatherName, setWeatherName] = useState<string>("");
  const [weatherCodeIcon, setWeatherCodeIcon] = useState<string>("");
  const [isVisible, SetIsVisible] = useState(true);
  const [isSlide, setIsSlide] = useState<number>(0);
  const { t } = useTranslation();
  const { isScroll } = useStore();
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

  // handle next slide
  const handleNextSlide = () => {
    setIsSlide(isSlide + 1);
    SetIsVisible(false);
    setTimeout(() => SetIsVisible(true), 500);
  };

  // handle prev slide
  const handlePrevSlide = () => {
    setIsSlide(isSlide - 1);
    SetIsVisible(false);
    setTimeout(() => SetIsVisible(true), 500);
  };

  useEffect(() => {
    const fetchDeviceWidth = async () => {
      // Simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update the state with the device width
      setDeviceWidth(window.innerWidth);
    };

    fetchDeviceWidth();

    // Optionally, you can add a resize event listener
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <div className="absolute flex flex-col items-start xs:items-center xs:w-full top-50 left-8 xs:left-0 xs:px-4 xs:top-50">
          <div className="flex flex-row items-center justify-between gap-x-1 px-2 py-2 bg-gray-900/30 rounded-md min-w-[246px]">
            {/* desa wisata */}
            <div className="min-w-[246px]">
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    className="text-lg text-white capitalize"
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -20 }}
                  >
                    {detail.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <VerifycationModal
              link={detail.verification.link}
              name={detail.name}
            />
          </div>

          <div className={`min-h-[212px] xs:min-h-[124px]`}>
            {/* slogan */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  className="text-5xl xs:text-2xl xs:text-center text-left text-white font-semibold max-w-[600px] tracking-wider leading-tight xs:leading-snug py-3"
                  initial={deviceWidth >= 720 ? { opacity: 1,  x: 100} : { opacity: 1,  y: 50}}
                  animate={deviceWidth >= 720 ? { opacity: 1,  x: 0} : { opacity: 1,  y: 0}}
                  exit={deviceWidth >= 720 ? { opacity: 1,  x: -100} : { opacity: 1,  y: -50}}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  {detail.slogan[storedLanguage]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                <Avatar
                  classNames={{ img: "!bg-cover !object-top" }}
                  src={data.imgUrl}
                />
              ))}
            </AvatarGroup>
          </div>

          {/* slide click */}
          <div className="flex flex-row gap-x-2 mt-6">
            <Button
              as={Link}
              to={`/info-dewi?name=${detail.name}`}
              className="min-w-[120px] bg-green-700 text-white hover:!backdrop-blur-md capitalize"
            >
              {t("checkNow")}
            </Button>
            <Button
              as={ExternalLink}
              href={`https://api.whatsapp.com/send?phone=${detail.contact.telp.number}`}
              className="min-w-[120px] bg-white text-green-700 hover:!backdrop-blur-md capitalize"
              isExternal
            >
              {t("call")}
            </Button>
          </div>
        </div>

        {/* center content */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className={`absolute flex flex-col gap-y-4 top-5 right-50 xs:top-16 xs:right-5 ${
                isScroll ? "z-0" : "z-[999]"
              }`}
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 0.5 }}
              transition={{ type: "spring", duration: 0.3 }}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* right */}
        <div className="absolute flex flex-row gap-x-2 top-30 right-8 xs:bottom-10 xs:right-4">
          <Button
            className={`bg-white/20 backdrop-blur-sm ${
              isSlide <= 0 ? "text-gray-300" : "text-white"
            }`}
            startContent={<FontAwesomeIcon icon={faArrowLeft} fontSize={16} />}
            isDisabled={isSlide <= 0}
            onPress={handlePrevSlide}
            isIconOnly
          />
          <Button
            className={`bg-white/20 backdrop-blur-sm ${
              isSlide === desa.length - 1 ? "text-gray-300" : "text-white"
            }`}
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
