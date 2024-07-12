import { DesaCard } from "../card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { SectionButton } from "../button";

const DewiPopularSection = () => {

  return (
    <div className="space-y-2 px-8 pt-[24px]">
      <span className="text-lg font-semibold tracking-wider">
        Dewi Paling Populer
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

      <SectionButton link={"/pameran"} title={"Show More"} />
    </div>
  );
};

export default DewiPopularSection;
