import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { BannerCard } from "../card";

const Hero = () => {
  return (
    <>
      <div className="px-8 pt-[80px]">
        <Swiper
          className="mySwiper"
          loop={true}
          speed={500}
          autoplay={{delay: 3000}}
          effect={"coverflow"}
          spaceBetween={266}
          scrollbar={{hide: true}}
          centeredSlides={false}
          pagination={{clickable: true}}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          }}
          slidesPerView={"auto"}
          modules={[Autoplay, EffectCoverflow, Pagination]}
        >
          <SwiperSlide key={1}>
            <BannerCard imgUrl={"https://sman2grabag.sch.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-19-at-11.03.11.jpeg"} title={"kewirauhsaan dan gaya hidup berkelanjutan"} />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <BannerCard imgUrl={"https://sdialazhar28.sch.id/wp-content/uploads/2023/02/Meme-Gelar-Karya-Kelas-IV.jpg"} title={"cerdik kelola sampah plastik hidup lebih asyik"} />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <BannerCard imgUrl={"https://smp.yasin.sch.id/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-25-at-09.17.41.jpeg"} title={"festival kuliner dan kesenian daerah"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
