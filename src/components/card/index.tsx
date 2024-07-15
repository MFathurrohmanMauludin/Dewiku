import {
  faCloud,
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
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatNumberViewer } from "../../utils/changeNumber";
import { formatShortIndonesiaDate } from "../../utils/changeDate";
import Rating from "react-rating";

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
      <Card
        className="border-1 hover:shadow-[0_4px_30px_4px_rgba(0,0,0,0.1)]"
        shadow="none"
      >
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
                initialRating={4}
                readonly
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="line-clamp-4 text-gray-600">{data.comment}</p>
        </CardBody>
        <CardFooter className="flex justify-start gap-2">
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = `<p><span style="background-color:rgb(255,255,255);color:rgb(60,72,88);font-family:Montserrat;font-size:18px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Di Jatimulyolah Makanan tradisional warisan nenek moyang ini bisa ditemukan. ‘Dawet Sambel’ namanya, sekitar 60 tahun yang lalu, ketika Dawet Sambel dicetuskan oleh seorang penjual Pecel, namanya adalah ‘Dawet Pecel’, Singkat cerita, ada salah satu warga Jatimulyo namanya Simbah Wagiyem, warga Asli padukuhan Sokomoyo, Kalurahan Jatimulyo, Kapanewon Girimulyo. Mbah wagiyem yang berprofesi sebagai Penjual Pecel, Pecel adalah makanan dari sayuran yang direbus dengan di tambahkan Sambal kelapa dan nira kelapa sebagai pemanis. Mbah wagiyem selalu berjulan di pasar traditional setiap rabu dan Sabtu,Terkadang juga berjualan di setiap Even yang di adakan di desa.&nbsp;</span></span></p>
<p>&nbsp;</p>
<p><span style="background-color:rgb(255,255,255);color:rgb(60,72,88);font-family:Montserrat;font-size:18px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Jatimulyo berada di deretan Pegunungan Menoreh, tanah di Jatimulyo sangatlah subur, cocok untuk segala macam tanaman, apalagi jenis umbi umbian, tumbuhan Ganyong pada tahun 1950 an banyak ditemukan, Umbi yang kaya akan Gizi dan Berserat tinggi ini hampir setiap masyarakat di Jatimulyo menanamnya.&nbsp;</span></span></p>
<p><span style="background-color:rgb(255,255,255);color:rgb(60,72,88);font-family:Montserrat;font-size:18px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Melihat potensi tersebut mbah Wagiyem memcoba untuk membuat sesuatu dari ganyong, awalnya simbah Wagiyem ingin membuat jenang ganyong, dengan cara memarut umbi ganyong, kemudian di peras untuk diambil sari patinya, dan dimasak dengan air mendidih, percobaan yang dilakukan Mbah Wagiyem ahirnya berhasil, tetapi tidak sampai situ saja, karena Mbah Wagiyem seorang pedagang, beliau haus akan inovasi untuk Ganyong untuk bias menjadi nilai Ekonomi.</span></span></p>`;

  return (
    <>
      <Card shadow="sm" isPressable onPress={onOpen}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt=""
            className="w-full object-cover h-[200px]"
            src={
              "https://www.desawisatajatimulyo.com/wp-content/uploads/2022/08/IMG_2521-360x240.jpg"
            }
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b>Dawet Sambel Khas Jatimulyo</b>
          <p className="text-default-500 text-sm">Harga: Rp4.000 /porsi</p>
        </CardFooter>
      </Card>

      {/* sejarah makanan */}
      <Modal
        size="md"
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
                    src="https://www.desawisatajatimulyo.com/wp-content/uploads/2022/08/IMG_2521-360x240.jpg"
                    alt="image-1"
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b>Dawet Sambel Khas Jatimulyo</b>
                    <p className="text-default-500 text-sm">Rp4.000</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div dangerouslySetInnerHTML={{ __html: history }} />
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

const BudayaCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = `<p><span style="background-color:rgb(255,255,255);color:rgb(60,72,88);font-family:Montserrat;font-size:18px;">Sendratari Sugriwa Subali mengisahkan tentang pertarungan kolosal antara Mahesasura dan Lembusura yang berwujud manusia berkepala kerbau melawan Sugriwa-Subali yang merupakan kakak beradik berwujud manusia berkepala kera mirip dengan sosok Anoman di kisah Sendratari Ramayana.</span><br><br><span style="background-color:rgb(255,255,255);color:rgb(60,72,88);font-family:Montserrat;font-size:18px;">Pertunjukan Sendratari Sugriwa Subali ini bisa menjadi alternatif bagi mencari alternatif wisata budaya di Jawa Tengah dan juga Daerah Istimewa Yogyakarta.</span></p>`;

  return (
    <>
      <Card className="h-[300px]" isPressable onPress={onOpen}>
        <CardHeader className="absolute bottom-0 z-10">
          <h4 className="text-white font-medium text-large">
            Sendratari Sugriwa-Subali
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover brightness-90 hover:brightness-100 focus-within:brightness-100"
          src="https://visitingjogja.jogjaprov.go.id/wp-content/uploads/2020/04/422.jpg"
          tabIndex={0}
        />
      </Card>

         {/* sejarah makanan */}
         <Modal
        size="md"
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
                    src="https://www.desawisatajatimulyo.com/wp-content/uploads/2022/08/IMG_2521-360x240.jpg"
                    alt="image-1"
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b>Sendratari Sugriwa-Subali</b>
                    <p className="text-default-500 text-sm">Rp4.000</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div dangerouslySetInnerHTML={{ __html: history }} />
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

const AlamCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card shadow="sm" isPressable onPress={onOpen}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt=""
            className="w-full object-cover h-[200px]"
            src={
              "https://asset.kompas.com/crops/b_2bessHbE6IXIqr-6_lRssr0II=/0x0:1800x1200/750x500/data/photo/2022/11/04/6364469a947cc.jpg"
            }
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <b className="capitalize">Air Terjun Grojogan Sewu</b>
          <span className="text-default-500 text-sm">
            Harga Tiket: Rp22.000 /orang
          </span>
        </CardFooter>
      </Card>

      {/* sejarah makanan */}
      <Modal
        size="md"
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
                    src="https://www.desawisatajatimulyo.com/wp-content/uploads/2022/08/IMG_2521-360x240.jpg"
                    alt="image-1"
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b>Dawet Sambel Khas Jatimulyo</b>
                    <p className="text-default-500 text-sm">Rp4.000</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div dangerouslySetInnerHTML={{ __html: history }} />
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

const EventCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = `
<p style="margin-left:0px;"><span style="font-family:'Times New Roman', Times, serif;font-size:14px;">Grebeg sampah adalah kegiatan mengumpulkan sampah ,memilah kemudian di kreasikan menjadi suatu bentuk kreasi yang nantinya bakal diarak dalam Grebek sampah di Kalurahan Jatimulyo. dalam hal ini, di Jatimulyo sampah tersebut di jadikan bentuk gunungan dan berbentuk burung. Kemudian gunungan dan burung tersebut, di arak dari lapangan pasar cublak menuju balai kalurahan.Setelah sampai di kalurahan, sampah tersebut di serahkan ke DLH Kulon progo.</span></p>
<p style="margin-left:0px;"><span style="background-color:rgb(255,255,255);color:rgb(60,72,88);font-family:'Times New Roman', Times, serif;font-size:14px;">Grebeg Sampah ini di ikuti oleh Kepala Dinas Lingkungan Hidup &nbsp;Kulon Progo, Panewu, Kapolsek Danramil, Perangkat Kalurahan, BPKal, Linmas, Karang Taruna, dan warga masyarakat Kalurahan Jatimulyo yang dilaksanakan Sabtu, 10 September 2022, di Balai Kalurahan Jatimulyo. Tak lupa juga, untuk memeriahkan acara tersebut , ada pentas seni Jathilan Pongjur “KUDHO BUDHOYO* dari padukuhan Sonyo, kalurahan Jatimulyo, Kulon Progo.</span><br>&nbsp;</p>`;

  return (
    <>
      <Card shadow="sm" isPressable onPress={onOpen}>
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
          <b className="capitalize">grebeg sampah</b>
          <p className="text-default-500 text-sm">Dilaksanakan: 10 september 2022 </p>
        </CardFooter>
      </Card>

      {/* sejarah makanan */}
      <Modal
        size="md"
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
                    src="https://www.desawisatajatimulyo.com/wp-content/uploads/2022/09/IMG_5128-1024x683.jpg"
                    alt="image-1"
                    radius="md"
                    width={100}
                  />
                  <div className="flex flex-col">
                    <b>Grebeg Sampah</b>
                    <p className="text-default-500 text-sm">Dilaksanakan: 10 September 2022</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center gap-y-2 text-[14px]" dangerouslySetInnerHTML={{ __html: history }} />
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

export {
  BannerCard,
  GaleryCard,
  KulinerCard,
  RatingCard,
  DesaCard,
  AlamCard,
  EventCard,
  BudayaCard,
};
