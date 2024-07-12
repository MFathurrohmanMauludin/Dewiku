import {
  faCloud,
  faHeart as faHeartSolid,
  faPalette,
  faStar,
  faSuitcaseRolling,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Tooltip,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatShortIndonesiaDate } from "../../utils/changeDate";
import {
  formatNumberViewer,
  ThousandSeparators,
} from "../../utils/changeNumber";

interface GaleryProps {
  title: string;
  imgUrl: string;
  author: string;
  category: string;
  like: number;
}

interface BannerCardProps {
  imgUrl: string;
  title: string;
}

interface ExhibitionCardProps {
  title: string;
  imgUrl: string;
  school: {
    name: string;
    logo: string;
  };
  ticket: number;
  date: string;
}

interface LiveShowCardProps {
  title: string;
  imgUrl: string;
  viewer: number;
  like: number;
}

interface MerchandiseCardProps {
  title: string;
  imgUrl: string;
  price: number;
  sold: number;
  author: string;
}

interface DesaCardProps {}

const BannerCard = (data: BannerCardProps) => {
  return (
    <>
      <div className="w-[600px] xs:w-[300px]">
        <Link to={`#title=${data.title}`}>
          <Image
            className="object-cover object-top w-[600px] h-[300px]"
            src={data.imgUrl}
            height={400}
            alt="banner"
          />
        </Link>
      </div>
    </>
  );
};

const LiveShowCard = (data: LiveShowCardProps) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      <Card className="max-w-[200px] w-full h-[300px]">
        <Image
          removeWrapper
          alt={data.title}
          className="z-0 w-full h-full object-cover"
          src={data.imgUrl}
        />

        <div className="absolute z-10 right-0 top-2">
          <Button
            className={`bg-gray-950/10 backdrop-blur-sm text-white ${
              isLike ? "text-rose-500" : "text-white"
            } hover:text-rose-500`}
            startContent={
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={isLike ? faHeartSolid : faHeart}
                  fontSize={18}
                />
                <span>{isLike ? data.like + 1 : data.like}</span>
              </div>
            }
            onClick={() => setIsLike(!isLike)}
            variant="solid"
            size="sm"
            radius="full"
          />
        </div>
      </Card>

      <div className="flex flex-col max-w-[200px]">
        <span className="text-md line-clamp-1">{data.title}</span>
        <span className="text-tiny">
          {formatNumberViewer(data.viewer)} Watching Now
        </span>
      </div>
    </>
  );
};

const GaleryCard = (data: GaleryProps) => {
  const [isLike, setIsLike] = useState(false);
  const [showLike, setShowLike] = useState(false);

  const handleMouseEnterCard = () => {
    setShowLike(true);
  };

  const handleMouseOutCard = () => {
    setShowLike(false);
  };

  const handleMouseEnterButton = () => {
    setShowLike(true);
  };

  const handleMouseOutButton = () => {
    setShowLike(false);
  };

  const handleFocusCard = () => {
    setShowLike(!showLike);
  };

  return (
    <>
      <Card
        className="max-w-[246px] w-full h-[300px]"
        onMouseEnter={handleMouseEnterCard}
        onMouseLeave={handleMouseOutCard}
        onFocus={handleFocusCard}
        shadow="sm"
      >
        <CardHeader
          className={`absolute z-10 flex-col !items-start bg-black/30 backdrop-blur-sm ${
            showLike ? "translate-y-0" : "-translate-y-[300px]"
          } transition-all ease-in duration-200`}
        >
          <Chip
            className="text-tiny text-white uppercase tracking-wider bg-gray-950/10 backdrop-blur-sm"
            size="sm"
            variant="solid"
          >
            {data.author}
          </Chip>
          <span className="text-white font-medium text-large">
            {data.title}
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt={data.title}
          className="z-0 w-full h-full object-cover"
          src={data.imgUrl}
        />

        <div
          className={`absolute z-[100px] right-2 space-x-2 ${
            showLike ? "bottom-2" : "bottom-[-100px]"
          } transition-all ease-in duration-200`}
          onMouseEnter={handleMouseEnterButton}
          onMouseLeave={handleMouseOutButton}
        >
          <Button
            className={`bg-gray-950/30 backdrop-blur-sm text-white ${
              isLike ? "text-rose-600" : "text-white"
            } hover:text-rose-500`}
            startContent={
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={isLike ? faHeartSolid : faHeart}
                  fontSize={18}
                />
                <span>{isLike ? data.like + 1 : data.like}</span>
              </div>
            }
            onClick={() => setIsLike(!isLike)}
            variant="solid"
            size="sm"
            radius="full"
          />

          <Button
            className="bg-gray-950/30 backdrop-blur-sm text-gray-300 capitalize tracking-wide"
            as={Link}
            to="#"
            size="sm"
            startContent={<FontAwesomeIcon icon={faPalette} fontSize={16} />}
            variant="solid"
            radius="full"
          >
            {data.category}
          </Button>
        </div>
      </Card>
    </>
  );
};

const MerchandiseCard = (data: MerchandiseCardProps) => {
  return (
    <>
      <Card className="w-full max-w-[246px]" shadow="sm" isPressable>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={data.title}
            className="w-full object-cover h-[200px]"
            src={data.imgUrl}
          />
        </CardBody>
        <CardFooter className="flex flex-col">
          <span className="text-left self-start capitalize line-clamp-1 font-semibold">
            {data.title}
          </span>

          <div className="flex flex-row justify-between w-full text-sm">
            <span>Rp{ThousandSeparators(data.price)}</span>
            <span className="text-default-500">
              {formatNumberViewer(data.sold)} Terjual
            </span>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

const ExhibitionCard = (data: ExhibitionCardProps) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnterCard = () => {
    setShowInfo(true);
  };

  const handleMouseOutCard = () => {
    setShowInfo(false);
  };

  const handleFocusCard = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <Card
        isFooterBlurred
        className="w-full max-w-[300px] h-[300px] relative"
        shadow="sm"
        onMouseEnter={handleMouseEnterCard}
        onMouseLeave={handleMouseOutCard}
        onFocus={handleFocusCard}
      >
        <CardHeader
          className={`absolute z-10 flex-col items-start bg-black/40 backdrop-blur-sm ${
            showInfo ? "translate-y-0" : "-translate-y-[100px]"
          } transition-all ease-in duration-300`}
        >
          <Chip
            className="!text-[10px] bg-gray-950/30 backdrop-blur-sm text-white uppercase tracking-wide"
            variant="solid"
            size="sm"
          >
            {formatShortIndonesiaDate(data.date)}
          </Chip>
          <p className="text-white font-medium text-md line-clamp-1">
            {data.title}
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt={data.title}
          className="z-0 w-full h-full object-cover object-top"
          src={data.imgUrl}
        />
        <CardFooter
          className={`absolute bg-black/40 bottom-0 z-10 ${
            showInfo ? "translate-y-0" : "translate-y-[100px]"
          } transition-all ease-in duration-300`}
        >
          <div className="flex flex-grow gap-2 items-center">
            <Avatar
              className="p-1 bg-gray-950/30 backdrop-blur-md"
              src={data.school.logo}
              alt={`logo-${data.school.name}`}
            />
            <div className="flex flex-col">
              <span className="text-sm text-white">{data.school.name}</span>
              <span className="text-xs text-white">
                {ThousandSeparators(data.ticket)} Tiket Tersedia
              </span>
            </div>
          </div>
          <Button
            className="bg-gray-950/30 backdrop-blur-md text-white"
            radius="full"
            size="sm"
          >
            Get Now
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

const DesaCard = (data: DesaCardProps) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <>
      <Card className="max-w-[340px] w-full" shadow="sm">
        <Image
          removeWrapper
          alt={"image-1"}
          className="z-0 w-full h-full object-cover"
          src={
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicjpSwM2KC7Ln684sDJwrTBieNvTtRGMllDcGy1YmAC_7Jo7yQHEtNO4dMWWc7yIT7QiUiGORMYeAUmi5lDMfg-TW_KPckFfarbeVf7rsECfN2TtM7k-DegbQEPqHWlyYnXALYExoOTLI/s1600/IMG_20161212_101915.jpg"
          }
        />

        {/* weather and like/share button */}
        <div className="absolute flex justify-between z-10 py-1 px-2 top-2 w-full">
          <Tooltip content="cerah berawan | hangat" showArrow>
            <div className="relative bg-white/10 backdrop-blur-sm w-[84px] rounded-full cursor-default">
              <FontAwesomeIcon
                className="absolute left-3 top-[2px] text-yellow-400"
                icon={faSun}
                fontSize={18}
              />
              <FontAwesomeIcon
                className="absolute left-4 top-2 text-white z-0"
                icon={faCloud}
                fontSize={20}
              />

              <span className="absolute left-10 top-[6px] text-sm text-white">
                20<sup className="text-[8px]">o</sup>C
              </span>
            </div>
          </Tooltip>

          <Button
            className={`bg-white/30 backdrop-blur-sm text-white ${
              isLike ? "text-rose-600" : "text-white"
            } hover:text-rose-600`}
            startContent={
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={isLike ? faHeartSolid : faHeart}
                  fontSize={18}
                />
                <span>{isLike ? 101 : 100}</span>
              </div>
            }
            onClick={() => setIsLike(!isLike)}
            variant="solid"
            size="sm"
            radius="full"
          />
        </div>

        {/* name & info penting */}
        <div className="flex flex-col px-2 mt-2 pb-3">
          <Link
            to={"/info-dewi?name="}
            className="text-lg tracking-wide hover:text-green-600 font-semibold line-clamp-1"
          >
            Desa Wisata Jatimulyo
          </Link>
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={faMap}
              fontSize={14}
            />
            <span className="line-clamp-1 text-sm leading-tight">
              Kab. Kulon Progo, Daerah Istimewa Yogyakarta
            </span>
          </div>

          <div className="flex items-center justify-between mt-1">
            <div className="flex flex-row gap-x-4">
              {/* rating */}
              <div className="flex items-center gap-x-1 text-sm">
                <FontAwesomeIcon
                  className="text-yellow-500"
                  icon={faStar}
                  fontSize={15}
                />
                <span>4.5 (1.5rb)</span>
              </div>

              {/* turis */}
              <div className="flex items-center gap-x-1 text-sm">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faSuitcaseRolling}
                  fontSize={15}
                />
                <span className="text-sm">
                  {formatNumberViewer(9485)} Turis
                </span>
              </div>
            </div>

            {/* status */}
            <Button
              className="hover:!bg-green-600 hover:!text-white text-green-600"
              size="sm"
              variant="light"
              radius="full"
            >
              Buka
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

const KulinerCard = () => {
  
}

const BudayaCard = () => {

}

export {
  BannerCard,
  GaleryCard,
  ExhibitionCard,
  LiveShowCard,
  MerchandiseCard,
  DesaCard,
};
