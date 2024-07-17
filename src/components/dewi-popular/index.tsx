import { DesaCard } from "../card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const DewiPopularSection = () => {

  return (
    <div className="space-y-2 px-8 pt-[24px]">
      <span className="text-lg font-semibold tracking-wider">
        Desa Wisata Populer
      </span>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        className="mySwiper"
      >
          <SwiperSlide>
            <DesaCard />
          </SwiperSlide>
          <SwiperSlide>
            <DesaCard />
          </SwiperSlide>
          <SwiperSlide>
            <DesaCard />
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DewiPopularSection;
