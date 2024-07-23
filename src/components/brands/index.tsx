import { Image } from "@nextui-org/react";

const Brands = () => {
  const data = [
    {
      name: "wonderful Indonesia",
      imgUrl: "https://i.ibb.co.com/txJFhM9/wonderful-indonesia.png",
    },
    {
      name: "telkomsel Indonesia",
      imgUrl: "https://i.ibb.co.com/308Fgz5/Telkomsel-Logo-1.png",
    },
    {
      name: "BRI",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/640px-BANK_BRI_logo.svg.png",
    },
    {
      name: "BNI",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/320px-BNI_logo.svg.png",
    },
  ];

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-x-16 px-6 pt-[40px]">
        {data.flatMap((logo) => (
          <Image
            className="h-[42px] bg-cover w-full grayscale !opacity-70 hover:grayscale-0 hover:!opacity-100"
            src={logo.imgUrl}
            height={64}
            radius="none"
            alt={logo.name}
          />
        ))}
      </div>
    </>
  );
};

export default Brands;
