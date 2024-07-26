import { useTranslation } from "react-i18next";
import { getHours, getToday, timeStringToMinutes } from "../utils/changeDate";
import { DesaWisataData } from "../utils/data";
import { DesaCard } from "../components/card";

const DewiPopularAll = () => {
  const localStorageKey = "selectedLanguage";
  const storedLanguage = localStorage.getItem(localStorageKey) || "en";

  const data = DesaWisataData();
  const filterData = data.filter((desa) => desa.visitors >= 5000);

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

  // translate
  const { t } = useTranslation();

  return (
    <div className="space-y-2 px-6 xs:px-2 pt-[80px]">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold tracking-wider">
          {t("dewiAnother")}
        </span>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-4">
        {filterData.map((desa: any, index: number) => (
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

export default DewiPopularAll;
