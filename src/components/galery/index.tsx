import { SectionButton } from "../button";
import { GaleryCard } from "../card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const GalerySection = () => {
  const data = [
    {
      title: "Nusantaraku",
      imgUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-143123318/tidak_ada_merk_lukisan_pemandangan_nuansa_tradisional_yang_asri_dan_indah_full10_j9v21gf.jpg",
      author: "Andi Permana",
      like: 450,
      category: "lukisan",
    },
    {
      title: "Semangat membara dari sabang sampai meraoke",
      imgUrl:
        "https://cdn.rri.co.id/gallery/1/images/1677948602248-asmatt3/1677948602248-asmatt3.jpg",
      author: "Rafael Helio",
      like: 450,
      category: "hand made",
    },
  ];

  return (
    <div className="space-y-4 px-8 py-[24px]">
      <span className="text-lg font-semibold tracking-wider">Galeri</span>
      <Swiper slidesPerView={"auto"} spaceBetween={-86} className="mySwiper">
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <GaleryCard
              key={index}
              title={data.title}
              imgUrl={data.imgUrl}
              author={data.author}
              like={data.like}
              category={data.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SectionButton link={"/galeri"} title={"Show More"} />
    </div>
  );
};

export default GalerySection;
