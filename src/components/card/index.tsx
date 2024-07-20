import {
  faHeart as faHeartSolid,
  faPalette,
  faStar as faStarSolid,
  faSuitcaseRolling,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

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
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  formatNumberShort,
  getAverageRating,
  ThousandSeparators,
} from "../../utils/changeNumber";
import {
  formatShortIndonesiaDate,
  getDayOfWeekNumber,
} from "../../utils/changeDate";
import Rating from "react-rating";
import { DesaWisataData } from "../../utils/data";
import { useTranslation } from "react-i18next";

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
  rating: number;
  comment: string;
  like: number;
  date: string;
}

interface DesaCardProps {
  name: string;
  imgUrl: string;
  location: string;
  testimony: number;
  weather: number;
  like: number;
  visitors: number;
  openhours: boolean;
  schedule: any;
  hours: any;
}

interface EventProps {
  name: string;
  imgUrl: string;
  schedule_date: string;
  desc: any;
}

interface AnotherProps {
  name: string;
  imgUrl: string;
  price: number;
  location: string;
  desc: any;
}

interface SearchProps {
  name: string;
  imgUrl: string;
  visitors: number;
  testimony: number;
  control: any;
}

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
      <Card
        className="border-1 hover:shadow-[0_4px_30px_4px_rgba(0,0,0,0.1)]"
        shadow="none"
      >
        <CardHeader className="justify-between">
          <div className="flex gap-3">
            <Avatar
              radius="full"
              size="lg"
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

              <Rating
                emptySymbol={
                  <FontAwesomeIcon
                    icon={faStar}
                    fontSize={16}
                    className="text-yellow-400"
                  />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    icon={faStarSolid}
                    fontSize={16}
                    className="text-yellow-400"
                  />
                }
                initialRating={data.rating}
                readonly
              />
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLike, setIsLike] = useState(false);
  const { t } = useTranslation();

  const getData = DesaWisataData();
  const filteredData = getData.filter((desa) =>
    desa.name.toLowerCase().includes(data.name.toLocaleLowerCase())
  );

  return (
    <>
      <Card className="!max-w-full w-full border-1" shadow="none">
        <Image
          removeWrapper
          alt={data.name}
          className="z-0 w-full h-full object-cover"
          src={data.imgUrl}
        />

        {/* weather and like/share button */}
        <div className="absolute flex justify-between z-[50] py-1 px-2 top-2 w-full">
          <Tooltip
            content="cerah berawan | hangat"
            placement="bottom-end"
            showArrow
          >
            <div className="flex flex-row items-center gap-1 px-2 bg-black/30 backdrop-blur-sm w-fit rounded-full cursor-default">
              <FontAwesomeIcon
                className="text-yellow-400"
                icon={faSun}
                fontSize={24}
              />

              <span className="text-md text-white">
                {data.weather}
                <sup className="text-[12px]">o</sup>C
              </span>
            </div>
          </Tooltip>

          <Button
            className={`bg-white/10 backdrop-blur-sm text-white text-md z-[50] ${
              isLike ? "text-rose-700" : "text-white"
            } hover:text-rose-700`}
            startContent={
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={isLike ? faHeartSolid : faHeart}
                  fontSize={18}
                />
                <span>
                  {isLike
                    ? formatNumberShort(data.like + 1)
                    : formatNumberShort(data.like)}
                </span>
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
            to={`/info-dewi?name=${data.name}`}
            className="text-lg tracking-wide hover:text-green-600 font-semibold line-clamp-1 capitalize"
          >
            {data.name}
          </Link>
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={faMap}
              fontSize={14}
            />
            <span className="line-clamp-1 text-sm leading-tight capitalize">
              {data.location}
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
                <span>
                  {getAverageRating(filteredData)} ({data.testimony})
                </span>
              </div>

              {/* turis */}
              <div className="flex items-center gap-x-1 text-sm">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faSuitcaseRolling}
                  fontSize={15}
                />
                <span className="text-sm">
                  {formatNumberShort(data.visitors)} Turis
                </span>
              </div>
            </div>

            {/* status */}
            <Button
              className={`${
                data.openhours
                  ? "hover:!bg-green-600 text-green-600"
                  : "hover:!bg-rose-600 text-rose-600"
              } hover:!text-white capitalize`}
              size="sm"
              variant="light"
              radius="full"
              onPress={onOpen}
            >
              {data.openhours ? t("opened") : t("closed")}
            </Button>

            <Modal
              isOpen={isOpen}
              placement="center"
              onOpenChange={onOpenChange}
              classNames={{
                backdrop: "backdrop-blur-md z-[1000]",
                wrapper: "z-[1000]"
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {t("openHours")}
                    </ModalHeader>
                    <ModalBody>
                      <Table
                        removeWrapper
                        aria-label="jam operasional"
                        color="success"
                        selectionMode="single"
                        defaultSelectedKeys={[getDayOfWeekNumber().toString()]}
                      >
                        <TableHeader>
                          <TableColumn className="capitalize">
                            {t("day")}
                          </TableColumn>
                          <TableColumn className="capitalize">
                            {t("time")}
                          </TableColumn>
                        </TableHeader>
                        <TableBody>
                          {data.schedule.map((data: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell className="capitalize">
                                {data.day}
                              </TableCell>
                              <TableCell className="uppercase">
                                {data.open} - {data.close} {data.type}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </Card>
    </>
  );
};

const KulinerCard = (data: AnotherProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        className="!max-w-full w-full border-1"
        shadow="none"
        isPressable
        onPress={onOpen}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={data.name}
            className="w-full object-cover h-[200px]"
            src={data.imgUrl}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b className="capitalize">{data.name}</b>
          <p className="text-default-500 text-sm">
            Rp{ThousandSeparators(data.price)} /Porsi
          </p>
        </CardFooter>
      </Card>

      {/* sejarah */}
      <Modal
        size="lg"
        isOpen={isOpen}
        placement="center"
        onClose={onClose}
        scrollBehavior="inside"
        classNames={{
          backdrop: "z-[1000]",
          wrapper: "z-[1000]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex flex-row items-stretch gap-x-2">
                  <Image
                    className="w-[50px] h-[50px]"
                    src={data.imgUrl}
                    alt={data.name}
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b className="capitalize">{data.name}</b>
                    <p className="text-default-500 text-sm">
                      Rp{ThousandSeparators(data.price)} /Porsi
                    </p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-y-3">
                <div dangerouslySetInnerHTML={{ __html: data.desc }} />

                {data.location !== "" && (
                  <div className="space-y-2">
                    <strong>Lokasi</strong>
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=${data.location}`}
                      className="rounded-lg h-[300px] w-full"
                      width="654"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const BudayaCard = (data: AnotherProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        className="!max-w-full w-full border-1"
        shadow="none"
        isPressable
        onPress={onOpen}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={data.name}
            className="w-full object-cover h-[200px]"
            src={data.imgUrl}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b className="capitalize">{data.name}</b>
          <p className="text-default-500 text-sm">
            Rp{ThousandSeparators(data.price)} /Tiket
          </p>
        </CardFooter>
      </Card>

      {/* sejarah */}
      <Modal
        size="lg"
        isOpen={isOpen}
        placement="center"
        onClose={onClose}
        scrollBehavior="inside"
        classNames={{
          backdrop: "z-[1000]",
          wrapper: "z-[1000]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex flex-row items-stretch gap-x-2">
                  <Image
                    className="w-[50px] h-[50px]"
                    src={data.imgUrl}
                    alt={data.name}
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b className="capitalize">{data.name}</b>
                    <p className="text-default-500 text-sm">
                      Rp{ThousandSeparators(data.price)} /Porsi
                    </p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-y-3">
                <div dangerouslySetInnerHTML={{ __html: data.desc }} />

                {data.location !== "" && (
                  <div className="space-y-2">
                    <strong>Lokasi</strong>
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=${data.location}`}
                      className="rounded-lg h-[300px] w-full"
                      width="654"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const AlamCard = (data: AnotherProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        className="!max-w-full w-full border-1"
        shadow="none"
        isPressable
        onPress={onOpen}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={data.name}
            className="w-full object-cover h-[200px]"
            src={data.imgUrl}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b className="capitalize">{data.name}</b>
          <span className="text-default-500 text-sm">
            Rp{ThousandSeparators(data.price)} /Tiket
          </span>
        </CardFooter>
      </Card>

      {/* history */}
      <Modal
        size="lg"
        isOpen={isOpen}
        placement="center"
        onClose={onClose}
        scrollBehavior="inside"
        classNames={{
          backdrop: "z-[1000]",
          wrapper: "z-[1000]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex flex-row items-stretch gap-x-2">
                  <Image
                    className="w-[50px] h-[50px]"
                    src={data.imgUrl}
                    alt={data.name}
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b className="capitalize">{data.name}</b>
                    <span className="text-default-500 text-sm">
                      Rp{ThousandSeparators(data.price)} /Tiket
                    </span>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-y-3">
                <div dangerouslySetInnerHTML={{ __html: data.desc }} />

                <div className="space-y-2">
                  <strong>Lokasi</strong>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=${data.location}`}
                    className="rounded-lg h-[300px] w-full"
                    width="654"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const EventCard = (data: EventProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        className="!max-w-full w-full border-1"
        shadow="none"
        isPressable
        onPress={onOpen}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt=""
            className="w-full object-cover h-[200px]"
            src={
              "https://www.desawisatajatimulyo.com/wp-content/uploads/2022/09/IMG_5128-1024x683.jpg"
            }
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b className="capitalize">{data.name}</b>
          <p className="text-default-500 text-sm">
            Dilaksanakan: {formatShortIndonesiaDate(data.schedule_date)}{" "}
          </p>
        </CardFooter>
      </Card>

      {/* sejarah makanan */}
      <Modal
        size="lg"
        isOpen={isOpen}
        placement="center"
        onClose={onClose}
        scrollBehavior="inside"
        classNames={{
          backdrop: "z-[1000]",
          wrapper: "z-[1000]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex flex-row items-stretch gap-x-2">
                  <Image
                    className="w-[50px] h-[50px]"
                    src={data.imgUrl}
                    alt={data.name}
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b className="capitalize">{data.name}</b>
                    <p className="text-default-500 text-sm">
                      Dilaksanakan:{" "}
                      {formatShortIndonesiaDate(data.schedule_date)}
                    </p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div
                  className="flex flex-col items-center gap-y-2 text-[14px]"
                  dangerouslySetInnerHTML={{ __html: data.desc }}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const AkomodasiCard = (data: AnotherProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        className="!max-w-full w-full border-1"
        shadow="none"
        isPressable
        onPress={onOpen}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={data.name}
            className="w-full object-cover h-[200px]"
            src={data.imgUrl}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b className="capitalize">{data.name}</b>
          <p className="text-default-500 text-sm">
            Rp{ThousandSeparators(data.price)} /Malam
          </p>
        </CardFooter>
      </Card>

      {/* sejarah */}
      <Modal
        size="lg"
        isOpen={isOpen}
        placement="center"
        onClose={onClose}
        scrollBehavior="inside"
        classNames={{
          backdrop: "z-[1000]",
          wrapper: "z-[1000]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex flex-row items-stretch gap-x-2">
                  <Image
                    className="w-[50px] h-[50px]"
                    src={data.imgUrl}
                    alt={data.name}
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b className="capitalize">{data.name}</b>
                    <p className="text-default-500 text-sm">
                      Rp{ThousandSeparators(data.price)} /Malam
                    </p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-y-3">
                <div dangerouslySetInnerHTML={{ __html: data.desc }} />

                {data.location !== "" && (
                  <div className="space-y-2">
                    <strong>Lokasi</strong>
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=${data.location}`}
                      className="rounded-lg h-[300px] w-full"
                      width="654"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const SearchCard = (data: SearchProps) => {
  const getData = DesaWisataData();

  const filteredData = getData.filter((desa) =>
    desa.name.toLowerCase().includes(data.name.toLocaleLowerCase())
  );

  return (
    <>
      <Link to={`/info-dewi?name=${data.name}`} onClick={data.control}>
        <Card className="border-1 !w-full" shadow="none" isPressable>
          <CardHeader className="flex items-start gap-3">
            <Image
              className="w-full max-h-[56px]"
              alt={data.name}
              height={56}
              radius="md"
              src={data.imgUrl}
            />
            <div className="flex flex-col gap-y-1">
              <span className="text-sm text-left capitalize">{data.name}</span>
              <div className="flex items-center gap-x-6">
                {/* rating */}
                <div className="flex items-center gap-x-1 text-sm">
                  <FontAwesomeIcon
                    className="text-yellow-500"
                    icon={faStar}
                    fontSize={15}
                  />
                  <span>
                    {getAverageRating(filteredData)} ({data.testimony})
                  </span>
                </div>

                {/* turis */}
                <div className="flex items-center gap-x-1 text-sm">
                  <FontAwesomeIcon
                    className="text-gray-600"
                    icon={faSuitcaseRolling}
                    fontSize={15}
                  />
                  <span className="text-sm">
                    {formatNumberShort(data.visitors)} Turis
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
};

export {
  BannerCard,
  GaleryCard,
  KulinerCard,
  RatingCard,
  DesaCard,
  AlamCard,
  EventCard,
  BudayaCard,
  AkomodasiCard,
  SearchCard,
};
