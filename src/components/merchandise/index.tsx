import { SectionButton } from "../button";
import { MerchandiseCard } from "../card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const MerchandiseSection = () => {
  const data = [
    {
      title: "pot hias bunga kecil cantik",
      imgUrl: "https://i.ibb.co.com/zrFFpg9/kerajinan-botol-bekas.webp",
      price: 15000,
      sold: 2549,
      authour: "Mustika Asri",
    },
    {
      title: "tas anyaman rotan untuk wanita",
      imgUrl:
        "https://images.tokopedia.net/img/cache/700/product-1/2020/7/26/57508874/57508874_6228c0f9-ff94-41d5-ba6c-3f8ff144cb23_700_700",
      price: 300000,
      sold: 1250,
      authour: "Santi Anastasyia",
    },
    {
      title: "lukisan gunung malam",
      imgUrl:
        "https://smacendana-pekanbaru.ypcriau.or.id/wp-content/uploads/2021/02/lukisan-dhea-xii-ipa-2-300x300.jpg",
      price: 150000,
      sold: 1,
      authour: "Asep Trinato",
    },
    {
      title: "bingkai foto hias",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQ4SSP7E3_w_fTJmwccajCoDoVpQn86l-3f-XzjlwiX9H4Y3QgtOA-vpiAKI9To8qkn0&usqp=CAU",
      price: 55000,
      sold: 324,
      authour: "Ananda Fitri",
    },
    {
      title: "wadah buah & sayuran dari rotan",
      imgUrl:
        "https://www.darusysyafaah.or.id/wp-content/uploads/2018/05/Screenshot_1.png",
      price: 240000,
      sold: 3245,
      authour: "Hanifa Lestari",
    },
  ];

  return (
    <div className="space-y-4 px-8 xs:px-4 pt-[32px] pb-[100px]">
      <span className="text-lg font-semibold text-wide">
        Merchandise untuk kamu
      </span>

      <Swiper slidesPerView={"auto"} spaceBetween={-86} className="mySwiper">
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <MerchandiseCard
              key={index}
              title={data.title}
              imgUrl={data.imgUrl}
              price={data.price}
              sold={data.sold}
              author={data.authour}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SectionButton link={"/merchandise"} title={"Show More"} />
    </div>
  );
};

export default MerchandiseSection;
