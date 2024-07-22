import { DesaCard } from "../card";

// Import Swiper styles
import "swiper/css";
import { DesaWisataData } from "../../utils/data";
import {
  getHours,
  getToday,
  timeStringToMinutes,
} from "../../utils/changeDate";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DewiPopularSection = () => {
  const localStorageKey = "selectedLanguage";
  const storedLanguage = localStorage.getItem(localStorageKey) || "en";

  const data = DesaWisataData();

  // jam buka dan tutup operasional
  const filterOpenHoursByDay = (data: any, day: string) => {
    const desa = data[0]; // assuming you have only one object in the array, adjust if necessary
    const openHours = desa.openHours.id;
    return openHours.find((hour: any) =>
      hour.day.toLowerCase().includes(day.toLowerCase())
    );
  };

  const day = filterOpenHoursByDay(data, getToday()).day;
  const opened = filterOpenHoursByDay(data, getToday()).open;
  const closed = filterOpenHoursByDay(data, getToday()).close;

  const isOpen = (): boolean => {
    const timeNow = timeStringToMinutes(getHours());
    const openedHours = timeStringToMinutes(opened);
    const closedHours = timeStringToMinutes(closed);
    return day === getToday().toLocaleLowerCase() &&
      timeNow >= openedHours &&
      timeNow <= closedHours
      ? true
      : false;
  };

  return (
    <div className="space-y-2 px-6 xs:px-2 pt-[80px]">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold tracking-wider">
          Desa Wisata Populer Untuk Anda
        </span>

        <Button
          as={Link}
          className="hover:text-green-700"
          to={"/desa-wisata-populer"}
          endContent={
            <>
              <FontAwesomeIcon icon={faArrowRight} fontSize={14} />
            </>
          }
          variant="light"
          color="default"
          size="md"
          radius="full"
        >
          Lihat Semua
        </Button>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((desa: any, index: number) => (
          <DesaCard
            key={index}
            name={desa.name}
            location={desa.location.city}
            weather={desa.weatherLocation}
            like={desa.like}
            visitors={desa.visitors}
            hours={desa.openHours}
            imgUrl={desa.imgUrl}
            testimony={desa.testimony.length}
            openhours={isOpen()}
            schedule={desa.openHours[storedLanguage]}
          />
        ))}
      </div>
    </div>
  );
};

export default DewiPopularSection;
