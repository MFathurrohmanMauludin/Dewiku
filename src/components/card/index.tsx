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
import {
  formatNumberViewer,
} from "../../utils/changeNumber";
import { formatShortIndonesiaDate } from "../../utils/changeDate";

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

interface RatingProps {
  name: string;
  imgUrl: string;
  nominal: number;
  comment: string;
  like: number;
  date: string;
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

const RatingCard = (data: RatingProps) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <>
      <Card className="hover:shadow-md" shadow="none">
        <CardHeader className="justify-between">
          <div className="flex gap-3">
            <Avatar
              radius="full"
              size="md"
              src={data.imgUrl}
              classNames={{ img: "object-top" }}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <div className="flex flex-row gap-x-2">
                <span className="text-small font-semibold leading-none text-default-600 capitalize">
                  {data.name}
                </span>
                <h5 className="text-xs tracking-tight text-default-400">
                  {formatShortIndonesiaDate(data.date)}
                </h5>
              </div>

              <Chip
                className="bg-yellow-500 text-white"
                size="sm"
                variant="solid"
              >
              l
              </Chip>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="line-clamp-4 text-gray-600">{data.comment}</p>
        </CardBody>
        <CardFooter className="flex justify-end gap-2">
          <Button
            className={`hover:!bg-white ${
              isLike ? "text-rose-600" : "text-gray-600"
            }  hover:text-rose-500`}
            startContent={
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={isLike ? faHeartSolid : faHeart}
                  fontSize={14}
                />
                <span>{isLike ? data.like + 1 : data.like}</span>
              </div>
            }
            onClick={() => setIsLike(!isLike)}
            variant="light"
            size="sm"
            radius="full"
          />
          <Button
            className="hover:!bg-white hover:text-gray-950 text-gray-600 hover:border-gray-600 capitalize text-[12px]"
            variant="light"
            size="sm"
            radius="full"
          >
            baca selengkapnya
          </Button>
        </CardFooter>
      </Card>
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
  RatingCard,
  DesaCard,
};
