import { DesaCard } from "../card";

// Import Swiper styles
import "swiper/css";
import { DesaWisataData } from "../../utils/data";
import {
  getHours,
  getToday,
  timeStringToMinutes,
} from "../../utils/changeDate";

const DewiPopularSection = () => {
  const data = DesaWisataData();

  // jam buka dan tutup operasional
  const filterOpenHoursByDay = (data: any, day: string) => {
    const desa = data[0]; // assuming you have only one object in the array, adjust if necessary
    const openHours = desa.openHours;
    return openHours.find(
      (hour: any) => hour.day.toLowerCase() === day.toLowerCase()
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
    <div className="space-y-2 px-6 xs:px-2 py-[80px]">
      {/* <span className="text-lg font-semibold tracking-wider">
        Desa Wisata Populer
      </span> */}

      <div className="grid grid-cols-4 lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((desa, index) => (
          <DesaCard
            key={index}
            name={desa.name}
            location={desa.location.city}
            weather={25}
            like={desa.like}
            visitors={desa.visitors}
            hours={desa.openHours}
            imgUrl={desa.imgUrl}
            testimony={desa.testimony.length}
            openhours={isOpen()}
            schedule={desa.openHours}
          />
        ))}
      </div>
    </div>
  );
};

export default DewiPopularSection;
