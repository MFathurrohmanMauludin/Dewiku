import { faCalendar, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faInfoCircle,
  faMasksTheater,
  faSun,
  faTents,
  faTree,
  faHeart as faHeartSolid,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  Image,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";
import {
  AkomodasiCard,
  AlamCard,
  BudayaCard,
  EventCard,
  KulinerCard,
  RatingCard,
} from "../card";
import { getDayOfWeekNumber } from "../../utils/changeDate";

const InfoDewi = () => {
  const [isSelected, setIsSelected] = useState("acara");
  const [isLike, setIsLike] = useState(false);
  const description = `<p style="margin-left:0px;">Kalurahan Jatimulyo Kapanewon Girimulyo Kabupaten Kulon Progo merupakan penggabungan dua kalurahan, yaitu Kalurahan Jonggrangan dan Kalurahan Sokomoyo, yang mana penggabungan menjadi satu kalurahan tersebut terjadi pada tanggal 16 Maret 1947. Pada waktu itu Kalurahan Jonggrangan dipimpin oleh Lurah Pawiro Sentono dan Kalurahan Sokomoyo dipimpin oleh Lurah Djogo Diharjo.</p><br/>
<p style="margin-left:0px;">Nama Jatimulyo adalah pemberian KRT. Noto Projo, ditandai dengan pemberian dan penanaman lima pohon jati oleh KRT. Noto Projo di Pedukuhan Sokomoyo. Penanaman lima pohon jati itu mengandung maksud setelah penggabungan dua kelurahan wilayah tersebut akan benar-benar menjadi “mulyo” apabila digarap dengan benar, sesuai dengan tujuan awal penggabungan dua kelurahan tersebut.<br>Setelah penggabungan dua kelurahan menjadi Kelurahan Jatimulyo, yang sekarang menjadi Desa Jatimulyo dipimpin oleh seorang Lurah<br><br>Desa wisata Jatimulyo terletak di ketinggian 500-800 mdpl di kawasan Pegunungan Menoreh, tepatnya di Kecamatan Girimulyo, Kabupaten Kulon Progo. Desa Wisata Jatimulyo merupakan salah satu desa yang masih menganut kebudayaan jawa yang kuat. Setiap bulan Sapar diadakan Merti Dusun Jatimulyo suatu upacara adat yang sarat dengan kearifan lokal. Untuk menuju Desa Wisata Jatimulyo dibutuhkan waktu 45 menit dari pusat kota Wates. Wisatawan dapat menggunakan kendaraan pribadi maupun kendaraan rental untuk menuju ke Desa Wisata Jatimulyo.</p>`;

  const hours = [
    {
      day: "senin",
      hour: "10.00 AM – 3.00 PM",
    },
    {
      day: "selasa",
      hour: "10.00 AM – 3.00 PM",
    },
    {
      day: "rabu",
      hour: "10.00 AM – 3.00 PM",
    },
    {
      day: "kamis",
      hour: "10.00 AM – 3.00 PM",
    },
    {
      day: "jumat",
      hour: "10.00 AM – 3.00 PM",
    },
    {
      day: "sabtu",
      hour: "8.00 am – 3.00 pm",
    },
    {
      day: "minggu",
      hour: "	8.00 am – 3.00 pm",
    },
  ];

  return (
    <div className="px-6 sm:px-2 md:px-4 py-[80px]">
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-4">
        
        {/* show photo */}
        <Card className="border-1" shadow="none">
          <div className="space-y-2 max-w-[720px] w-full px-3 pt-2 pb-3">
            <span className="text-lg font-semibold tracking-wide">
              Desa Wisata Jatimulyo
            </span>
            <div className="relative">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicjpSwM2KC7Ln684sDJwrTBieNvTtRGMllDcGy1YmAC_7Jo7yQHEtNO4dMWWc7yIT7QiUiGORMYeAUmi5lDMfg-TW_KPckFfarbeVf7rsECfN2TtM7k-DegbQEPqHWlyYnXALYExoOTLI/s1600/IMG_20161212_101915.jpg"
                className="object-cover w-full"
                width={720}
                alt="hello world"
              />

              {/* weather and like/share button */}
              <div className="absolute flex justify-between z-10 py-1 px-2 top-2 w-full">
                <Tooltip content="cerah berawan | hangat" showArrow>
                  <div className="flex flex-row items-center gap-1 px-2 bg-black/30 backdrop-blur-sm w-fit rounded-full cursor-default">
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faSun}
                      fontSize={24}
                    />

                    <span className="text-md text-white">
                      20<sup className="text-[12px]">o</sup>C
                    </span>
                  </div>
                </Tooltip>

                <Button
                  className={`bg-white/10 backdrop-blur-sm text-white text-md ${
                    isLike ? "text-rose-700" : "text-white"
                  } hover:text-rose-700`}
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
                  size="md"
                  radius="full"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* galery photo */}
        <Card className="border-1" shadow="none">
          <span className="text-lg px-3 py-2 font-semibold tracking-wide">
            Galeri
          </span>
          <div className="overflow-y-auto max-h-[460px] xs:max-h-[300px] sm:max-h-[300px] md:max-h-[250px]">
            <div className="columns-3 xs:columns-2 md:columns-2 space-y-4 gap-x-4 pb-3 px-3">
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
              <Image
                className="object-cover w-[200px] h-[200px]"
                src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                alt="image-1"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap gap-x-4 pt-4 pb-[80px]">
        {/* left */}
        <div className="flex-shrink flex-col w-full z-0">
          <Tabs
            aria-label="Options"
            radius="full"
            selectedKey={isSelected}
            classNames={{base: '!max-w-[100%]'}}
            onSelectionChange={setIsSelected}
          >
            {/* acara */}
            <Tab
              key="acara"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "acara" && "text-blue-500"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faCalendar} fontSize={16} />
                  <span>Event</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                <EventCard />
              </div>
            </Tab>

            {/* alam */}
            <Tab
              key="alam"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "alam" && "text-green-600"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faTree} fontSize={16} />
                  <span>Alam</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                <AlamCard />
              </div>
            </Tab>

            {/* budaya */}
            <Tab
              key="budaya"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "budaya" && "text-purple-600"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faMasksTheater} fontSize={16} />
                  <span>Budaya</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                <BudayaCard />
              </div>
            </Tab>

            {/* kuliner */}
            <Tab
              key="kuliner"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "kuliner" && "text-cyan-600"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faUtensils} fontSize={16} />
                  <span>Kuliner</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                <KulinerCard />
                <KulinerCard />
                <KulinerCard />
              </div>
            </Tab>

            {/* akomodasi */}
            <Tab
              key="akomodasi"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "akomodasi" && "text-amber-700"
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faTents} fontSize={16} />
                  <span>Akomodasi</span>
                </div>
              }
            >
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
                <AkomodasiCard />
              </div>
            </Tab>

            {/* testimoni */}
            <Tab
              key="testimoni"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "testimoni" && "text-yellow-500 "
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faStar} fontSize={16} />
                  <span>Testimoni</span>
                </div>
              }
            >
              <div className="flex justify-end">
                <Button className="text-white" color="success" size="md">Berikan Testimoni</Button>
              </div>
              <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 mt-3 overflow-y-auto max-h-[500px]">
                <RatingCard
                  name={"Hatsune Miku"}
                  imgUrl={
                    "https://i.pinimg.com/736x/5f/03/5f/5f035fab60d92fa74c6f9546da140497.jpg"
                  }
                  nominal={4}
                  comment={"Sangat enak"}
                  like={495}
                  date={"7/10/2024"}
                />
                <RatingCard
                  name={"Hatsune Miku"}
                  imgUrl={
                    "https://i.pinimg.com/736x/5f/03/5f/5f035fab60d92fa74c6f9546da140497.jpg"
                  }
                  nominal={4}
                  comment={"Sangat enak"}
                  like={495}
                  date={"7/10/2024"}
                />
                <RatingCard
                  name={"Hatsune Miku"}
                  imgUrl={
                    "https://i.pinimg.com/736x/5f/03/5f/5f035fab60d92fa74c6f9546da140497.jpg"
                  }
                  nominal={4}
                  comment={"Sangat enak"}
                  like={495}
                  date={"7/10/2024"}
                />
              </div>
            </Tab>

            {/* tentang */}
            <Tab
              key="about"
              title={
                <div
                  className={`flex items-center ${
                    isSelected === "about" && "text-green-600 "
                  } space-x-2`}
                >
                  <FontAwesomeIcon icon={faInfoCircle} fontSize={16} />
                  <span>Tentang</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        {/* right */}
        <div className="flex-shrink flex flex-col gap-3 w-[600px] z-0 lg:w-full xl:w-[400px]">
          {/* jam operasional */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide">
              Jam Operasional
            </span>
            <Table
              removeWrapper
              aria-label="jam operasional"
              color="success"
              selectionMode="single"
              defaultSelectedKeys={[getDayOfWeekNumber().toString()]}
            >
              <TableHeader>
                <TableColumn>Hari</TableColumn>
                <TableColumn>Waktu</TableColumn>
              </TableHeader>
              <TableBody>
                {hours.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="capitalize">{data.day}</TableCell>
                    <TableCell className="uppercase">{data.hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* kontak dan alamat */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide">
              Jam Operasional
            </span>
            <Table
              removeWrapper
              aria-label="jam operasional"
              color="success"
              selectionMode="single"
              defaultSelectedKeys={[getDayOfWeekNumber().toString()]}
            >
              <TableHeader>
                <TableColumn>Hari</TableColumn>
                <TableColumn>Waktu</TableColumn>
              </TableHeader>
              <TableBody>
                {hours.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="capitalize">{data.day}</TableCell>
                    <TableCell className="uppercase">{data.hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* peta lokasi */}
          <Card
            className="relative border-1 space-y-2 px-3 pt-2 pb-4"
            shadow="none"
          >
            <span className="text-lg font-semibold tracking-wide">
              Peta Lokasi
            </span>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3503402489273!2d110.12818867404908!3d-7.752616076869493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aee2f7077f711%3A0x930b72080bcaff27!2sDesa%20Wisata%20Jatimulyo%20-%20Kulon%20Progo!5e0!3m2!1sen!2sid!4v1720793257450!5m2!1sen!2sid"
              className="rounded-lg h-[300px] w-full"
              width="654"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoDewi;
