import { DesaCard } from "../card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { DesaWisataData } from "../../utils/data";

const DewiPopularSection = () => {
  const data = DesaWisataData();

  return (
    <div className="space-y-2 px-6 py-[80px]">
      <span className="text-lg font-semibold tracking-wider">
        Desa Wisata Populer
      </span>

      <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DesaCard />  
        <DesaCard />  
        <DesaCard />  
        <DesaCard />  
      </div>
    </div>
  );
};

export default DewiPopularSection;
