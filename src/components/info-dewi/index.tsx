import { faCalendar, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faInfoCircle,
  faMasksTheater,
  faTents,
  faTree,
  faHeart as faHeartSolid,
  faUtensils,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import instagramIcon from "../../assets/instagram.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  Image,
  Link as LinkExternal,
  Select,
  SelectItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  Tooltip,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import {
  AkomodasiCard,
  AlamCard,
  BudayaCard,
  EventCard,
  KulinerCard,
  RatingCard,
} from "../card";
import { getDayOfWeekNumber } from "../../utils/changeDate";
import { ShareModal, TestimonyForm, VerifycationModal } from "../modal";
import { useLocation } from "react-router-dom";
import {
  formatNumberShort,
  formatPhoneNumber,
  kelvinToCelsius,
} from "../../utils/changeNumber";
import { useTranslation } from "react-i18next";
import { getWeatherData } from "../../utils/weather";
import { useFavoriteStore } from "../../utils/saveDewi";

interface Props {
  desa: any;
  photo: string;
  fullname: string;
  email: string;
  comment: string;
  like: number;
  rating: number;
  testimony: any;
  control: {
    validateRating: any;
    validateMail: any;
    validateFullName: any;
    validateComment: any;
    validatePhoto: any;
    submitForm: any;
  };
  status: {
    email: boolean;
    fullName: boolean;
  };
}

const InfoDewi = (info: Props) => {
  const localStorageKey = "selectedLanguage";
  const storedLanguage = localStorage.getItem(localStorageKey) || "en";

  // favorite control
  const { favorite, addFavorite, removeFavorite } = useFavoriteStore();

  // translate
  const { t } = useTranslation(["language"]);

  const data = [
    {
      key: "photo",
      label: t("photo"),
    },
    {
      key: "video",
      label: t("video"),
    },
  ];

  const getData = info.desa;
  const { search, pathname } = useLocation();

  const regex = /(?:\?|&)name=([^&]+)/;
  const match = search.match(regex);
  const nameValue = match
    ? decodeURIComponent(match[1]).replace(/\+/g, " ")
    : "";

  const detail = getData.filter((data: any) => data.name === nameValue)[0];
  const video = detail.galery.filter((item: any) => item.type === "video");
  const photo = detail.galery.filter((item: any) => item.type === "photo");

  const [isSelected, setIsSelected] = useState("acara");
  const [isLike, setIsLike] = useState(false);
  const [isType, setIsType] = useState<string>("photo");
  const [isPhoto, setIsPhoto] = useState(photo[0].url);
  const [isVideo, setIsVideo] = useState(video[0].url);

  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsType(e.target.value);
  };

  const galery = detail.galery.filter((data: any) =>
    data.type.includes(isType)
  );

  // like
  useEffect(() => {
    if (favorite.length > 0) {
      const desa: any = getData.filter((data: any) =>
        favorite.includes(data.name)
      );
      setIsLike(desa[0].name === detail.name);
    }
  }, [setIsLike]);

  // get width
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // get weather
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [weatherName, setWeatherName] = useState<string>("");
  const [weatherCodeIcon, setWeatherCodeIcon] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const getData = await getWeatherData(
          detail.weatherLocation.lat,
          detail.weatherLocation.lon
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
    <div className="px-6 sm:px-2 md:px-4 py-[80px]">
      {/* top */}
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-4">
        {/* show photo */}
        <Card className="border-1" shadow="none">
          <div className="space-y-2 max-w-[720px] w-full px-3 pt-2 pb-3">
            <div className="flex flex-row items-center">
              <span className="text-lg font-semibold tracking-wide capitalize">
                {detail.name}
              </span>
              {detail.verification.status && (
                <VerifycationModal
                  link={detail.verification.link}
                  name={detail.name}
                />
              )}
            </div>

            <div className="relative">
              {isType !== "photo" ? (
                <iframe
                  className="w-full xs:!min-h-[300px] rounded-2xl"
                  width="560"
                  height={deviceWidth <= 500 ? "300" : "500"}
                  src={`https://www.youtube.com/embed/${isVideo}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image
                  src={isPhoto}
                  className="object-cover w-full h-[500px] sm:h-[300px] md:h-[300px]"
                  width={720}
                  alt={detail.name}
                />
              )}

              {/* weather and like/share button */}
              <div className="absolute flex justify-between z-10 py-1 px-2 top-2 w-full">
                <Tooltip
                  content={
                    <span className="capitalize">
                      {weatherName} | {cityName}
                    </span>
                  }
                  placement="bottom-start"
                  showArrow
                >
                  <div className="flex flex-row items-center gap-1 px-2 bg-white/30 backdrop-blur-sm w-fit rounded-full cursor-default">
                    <Image
                      src={weatherCodeIcon}
                      width={24}
                      alt={weatherCodeIcon}
                    />

                    <span className="text-sm text-white">
                      {kelvinToCelsius(temperature || 0)}
                      <sup className="text-[10px]">o</sup>C
                    </span>
                  </div>
                </Tooltip>

                <div className="flex items-center gap-x-2">
                  <Button
                    className={`bg-white/10 backdrop-blur-sm text-white text-md z-[50] ${
                      isLike ? "text-rose-700" : "text-white"
                    } hover:text-rose-700`}
                    startContent={
                      <Tooltip
                        content={!isLike ? t("like") : t("unlike")}
                        placement="bottom"
                      >
                        <div className="flex items-center text-sm gap-x-2">
                          <FontAwesomeIcon
                            icon={isLike ? faHeartSolid : faHeart}
                            fontSize={16}
                          />
                          <span>
                            {isLike
                              ? formatNumberShort(detail.like + 1)
                              : formatNumberShort(detail.like)}
                          </span>
                        </div>
                      </Tooltip>
                    }
                    onClick={() => {
                      setIsLike(!isLike);
                      addFavorite(detail.name);
                      isLike && removeFavorite(detail.name);
                    }}
                    variant="solid"
                    size="sm"
                    radius="full"
                  />

                  <ShareModal link={pathname + search} />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* galeri foto */}
        <Card className="border-1" shadow="none">
          <div className="flex items-center justify-between">
            <span className="text-lg px-3 py-2 font-semibold tracking-wide capitalize">
              {t("gallery")}
            </span>

            <Select
              variant="bordered"
              placeholder="Filter"
              selectedKeys={[isType]}
              className="max-w-[100px] mr-1"
              classNames={{ trigger: "!border-1 capitalize" }}
              size="sm"
              radius="full"
              onChange={handleSelectionChange}
            >
              {data.map((filter) => (
                <SelectItem key={filter.key} className="capitalize">
                  {filter.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="overflow-y-auto max-h-[460px] xs:max-h-[300px] sm:max-h-[300px] md:max-h-[250px]">
            <div className="columns-3 xs:columns-2 md:columns-2 space-y-4 gap-x-4 pb-3 px-3">
              {isType === "photo" &&
                galery.flatMap((data: any, index: number) => (
                  <Image
                    key={index}
                    className={`object-cover w-[200px] h-[200px] cursor-pointer ${
                      isPhoto === data.url
                        ? "border-4 border-green-500 brightness-75"
                        : "border-4 border-white"
                    }`}
                    src={data.url}
                    width={200}
                    alt={`img-${index}`}
                    onClick={() => setIsPhoto(data.url)}
                  />
                ))}

              {isType === "video" &&
                galery.flatMap((data: any, index: number) => (
                  <Image
                    key={index}
                    className={`object-cover w-[200px] h-[200px] cursor-pointer ${
                      isVideo === data.url
                        ? "border-4 border-green-500 brightness-75"
                        : "border-4 border-white"
                    }`}
                    src={data.thumbnail}
                    width={200}
                    alt={`img-${index}`}
                    onClick={() => setIsVideo(data.url)}
                  />
                ))}
            </div>
          </div>
        </Card>
      </div>

      {/* bottom */}
      <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap gap-x-4 pt-4 pb-[80px]">
        {/* left */}
        <div className="flex-shrink flex-col w-full z-0">
          <Tabs
            aria-label="Options"
            radius="full"
            selectedKey={isSelected}
            classNames={{ base: "!max-w-[100%]" }}
            onSelectionChange={(key: any) => setIsSelected(key)}
          >
            {/* acara */}
            <Tab
              key={t("event")}
              title={
                <div
                  className={`flex items-center ${
                    isSelected === t("event") && "text-blue-500"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faCalendar} fontSize={16} />
                  <span className="capitalize">{t("event")}</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                {detail.event.flatMap((data: any, index: number) => (
                  <EventCard key={index} {...data} />
                ))}
              </div>
            </Tab>

            {/* alam */}
            <Tab
              key="alam"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "alam" && "text-green-600"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faTree} fontSize={16} />
                  <span className="capitalize">{t("nature")}</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                {detail.nature.flatMap((data: any, index: number) => (
                  <AlamCard key={index} {...data} />
                ))}
              </div>
            </Tab>

            {/* budaya */}
            <Tab
              key="budaya"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "budaya" && "text-purple-600"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faMasksTheater} fontSize={16} />
                  <span className="capitalize">{t("culture")}</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                {detail.culture.flatMap((data: any, index: number) => (
                  <BudayaCard key={index} {...data} />
                ))}
              </div>
            </Tab>

            {/* kuliner */}
            <Tab
              key="kuliner"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "kuliner" && "text-cyan-600"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faUtensils} fontSize={16} />
                  <span className="capitalize">{t("culnary")}</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                {detail.culnary.flatMap((data: any, index: number) => (
                  <KulinerCard key={index} {...data} />
                ))}
              </div>
            </Tab>

            {/* akomodasi */}
            <Tab
              key="akomodasi"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "akomodasi" && "text-amber-700"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faTents} fontSize={16} />
                  <span className="capitalize">{t("accomodation")}</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                {detail.accommodation.flatMap((data: any, index: number) => (
                  <AkomodasiCard key={index} {...data} />
                ))}
              </div>
            </Tab>

            {/* testimoni */}
            <Tab
              key="testimoni"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "testimoni" && "text-yellow-500 "
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faStar} fontSize={16} />
                  <span className="capitalize">{t("testimony")}</span>
                </div>
              }
            >
              <div className="flex justify-start">
                <TestimonyForm
                  photo={info.photo}
                  fullname={info.fullname}
                  email={info.email}
                  comment={info.comment}
                  like={info.like}
                  rating={info.rating}
                  control={{
                    validateEmail: info.control.validateMail,
                    validateFullName: info.control.validateFullName,
                    validateRating: info.control.validateRating,
                    validateComment: info.control.validateComment,
                    validatePhoto: info.control.validatePhoto,
                    submitForm: info.control.submitForm,
                  }}
                  status={{
                    email: info.status.email,
                    fullName: info.status.fullName,
                  }}
                />
              </div>

              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 mt-3 overflow-y-auto max-h-[500px]">
                {info.testimony.flatMap((data: any, index: number) => (
                  <RatingCard key={index} {...data} />
                ))}
              </div>
            </Tab>

            {/* tentang */}
            <Tab
              key="about"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "about" && "text-green-600 "
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faInfoCircle} fontSize={16} />
                  <span className="capitalize">{t("about")}</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detail.desc[storedLanguage],
                    }}
                  />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        {/* right */}
        <div className="flex-shrink flex flex-col gap-3 w-[600px] z-0 lg:w-full">
          {/* jam operasional */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide capitalize">
              {t("openHours")}
            </span>

            <Table
              removeWrapper
              aria-label="jam operasional"
              color="success"
              selectionMode="single"
              defaultSelectedKeys={[(getDayOfWeekNumber() - 1).toString()]}
            >
              <TableHeader>
                <TableColumn className="capitalize">{t("day")}</TableColumn>
                <TableColumn className="capitalize">{t("time")}</TableColumn>
              </TableHeader>
              <TableBody>
                {detail.openHours[storedLanguage].map(
                  (data: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="capitalize">{data.day}</TableCell>
                      <TableCell className="uppercase">
                        {data.open} - {data.close} {data.type}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Card>

          {/* fasilitas */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide capitalize">
              {t("facility")}
            </span>

            <ul>
              {detail.facility[storedLanguage].map((data: any) => (
                <li className="flex items-center capitalize gap-x-1">
                  <FontAwesomeIcon
                    className="text-green-600"
                    icon={faCheckSquare}
                    fontSize={14}
                  />
                  <span>{data}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* peta lokasi */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide capitalize">
              {t("locationmap")}
            </span>

            <iframe
              src={`https://www.google.com/maps/embed?pb=${detail.location.maps}`}
              className="rounded-lg h-[300px] w-full"
              width="654"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <Button
              as={LinkExternal}
              className="bg-green-700 text-white capitalize"
              href={detail.location.share}
              variant="light"
              color="success"
              radius="full"
              isExternal
            >
              {t("openMap")}
            </Button>
          </Card>

          {/* penghargaan */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide capitalize">
              {t("achievement")}
            </span>

            <div className="grid grid-cols-1 gap-y-1 capitalize">
              {detail.award.flatMap((data: any, index: number) => (
                <LinkExternal
                  className="!text-sm leading-snug text-gray-800 hover:text-green-700"
                  key={index}
                  href={`https://${data.link !== "" ? data.link : "#"}`}
                  isExternal
                >
                  {data.name[storedLanguage]}
                </LinkExternal>
              ))}
            </div>
          </Card>

          {/* kontak dan social media */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4 capitalize"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide">
              {t("contact")}
            </span>

            <div className="space-y-2 mt-2 text-[14px]">
              <div className="flex flex-col capitalize">
                <span className="font-semibold">{t("telephone")}</span>
                <LinkExternal
                  href={`https://api.whatsapp.com/send?phone=${detail.contact.telp.number}`}
                  className="!text-sm leading-snug text-gray-800 hover:text-green-700"
                  isExternal
                >
                  {detail.contact.telp.name} (
                  {formatPhoneNumber(detail.contact.telp.number)})
                </LinkExternal>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">{t("office")}</span>
                <p className="tracking-wide">{detail.contact.office}</p>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">{t("followsus")}</span>
                <div className="flex flex-row gap-x-2 mt-1">
                  <LinkExternal href={detail.contact.socmed.ig}>
                    <Image
                      className="h-[2em] w-[2em]"
                      src={instagramIcon}
                      width={50}
                      alt="instagram"
                      radius="none"
                    />
                  </LinkExternal>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoDewi;
