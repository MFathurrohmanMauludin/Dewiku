import { useTranslation } from "react-i18next";
import { getHours, getToday, timeStringToMinutes } from "../utils/changeDate";
import { DesaWisataData } from "../utils/data";
import { DesaCard } from "../components/card";
import { useFavoriteStore } from "../utils/saveDewi";
import favoriteEmptyImg from "../assets/favorite-empty.png";
import { Image } from "@nextui-org/react";

const SaveFavorite = () => {
  const { favorite, addFavorite, removeFavorite } = useFavoriteStore();
  const localStorageKey = "selectedLanguage";
  const storedLanguage = localStorage.getItem(localStorageKey) || "en";

  const desa = DesaWisataData();
  const filter = desa.filter((data) => favorite.includes(data.name));

  // jam buka dan tutup operasional
  const filterOpenHoursByDay = (data: any, day: string) => {
    const desa = data[0]; // assuming you have only one object in the array, adjust if necessary
    const openHours = desa.openHours.id;
    return openHours.find((hour: any) =>
      hour.day.toLowerCase().includes(day.toLowerCase())
    );
  };

  const day = filterOpenHoursByDay(
    filter.length > 0 ? filter : desa,
    getToday()
  ).day;

  const opened = filterOpenHoursByDay(
    filter.length > 0 ? filter : desa,
    getToday()
  ).open;

  const closed = filterOpenHoursByDay(
    filter.length > 0 ? filter : desa,
    getToday()
  ).close;

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
    <>
      <div className="space-y-2 px-6 xs:px-2 pt-[80px]">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold tracking-wider">
            {t("touristVillageYou")}
          </span>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-4">
          {filter.length > 0 &&
            filter.map((desa: any, index: number) => (
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
                control={{
                  save: addFavorite,
                  delete: removeFavorite,
                }}
              />
            ))}
        </div>
        {filter.length === 0 && (
          <div className="flex flex-col items-center gap-y-4 justify-center py-[80px]">
            <Image src={favoriteEmptyImg} width={300} alt="favorite-empty" />
            <span className="text-xl">{t("favoriteEmpty")}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default SaveFavorite;
