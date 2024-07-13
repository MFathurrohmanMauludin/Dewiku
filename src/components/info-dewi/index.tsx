import { faCalendar, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faInfoCircle,
  faMasksTheater,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";

const InfoDewi = () => {
  const [isSelected, setIsSelected] = useState("acara");
  const description = `<p style="margin-left:0px;">Kalurahan Jatimulyo Kapanewon Girimulyo Kabupaten Kulon Progo merupakan penggabungan dua kalurahan, yaitu Kalurahan Jonggrangan dan Kalurahan Sokomoyo, yang mana penggabungan menjadi satu kalurahan tersebut terjadi pada tanggal 16 Maret 1947. Pada waktu itu Kalurahan Jonggrangan dipimpin oleh Lurah Pawiro Sentono dan Kalurahan Sokomoyo dipimpin oleh Lurah Djogo Diharjo.</p><br/>
<p style="margin-left:0px;">Nama Jatimulyo adalah pemberian KRT. Noto Projo, ditandai dengan pemberian dan penanaman lima pohon jati oleh KRT. Noto Projo di Pedukuhan Sokomoyo. Penanaman lima pohon jati itu mengandung maksud setelah penggabungan dua kelurahan wilayah tersebut akan benar-benar menjadi “mulyo” apabila digarap dengan benar, sesuai dengan tujuan awal penggabungan dua kelurahan tersebut.<br>Setelah penggabungan dua kelurahan menjadi Kelurahan Jatimulyo, yang sekarang menjadi Desa Jatimulyo dipimpin oleh seorang Lurah<br><br>Desa wisata Jatimulyo terletak di ketinggian 500-800 mdpl di kawasan Pegunungan Menoreh, tepatnya di Kecamatan Girimulyo, Kabupaten Kulon Progo. Desa Wisata Jatimulyo merupakan salah satu desa yang masih menganut kebudayaan jawa yang kuat. Setiap bulan Sapar diadakan Merti Dusun Jatimulyo suatu upacara adat yang sarat dengan kearifan lokal. Untuk menuju Desa Wisata Jatimulyo dibutuhkan waktu 45 menit dari pusat kota Wates. Wisatawan dapat menggunakan kendaraan pribadi maupun kendaraan rental untuk menuju ke Desa Wisata Jatimulyo.</p>`;

  return (
    <div className="px-6 sm:px-4 py-[80px]">
      <div className="grid grid-cols-2 gap-x-4 max-h-[450px]">
        {/* left */}
        <Card className="border-1" shadow="none">
          <div className="space-y-2 max-w-[720px] w-full px-3 pt-2 pb-3">
            <span className="text-lg font-semibold tracking-wide">
              Desa Wisata Jatimulyo
            </span>
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicjpSwM2KC7Ln684sDJwrTBieNvTtRGMllDcGy1YmAC_7Jo7yQHEtNO4dMWWc7yIT7QiUiGORMYeAUmi5lDMfg-TW_KPckFfarbeVf7rsECfN2TtM7k-DegbQEPqHWlyYnXALYExoOTLI/s1600/IMG_20161212_101915.jpg"
              className="object-cover"
              width={720}
              alt="hello world"
            />
          </div>
        </Card>

        {/* right */}
        <Card className="border-1" shadow="none">
          <span className="text-lg px-3 py-2 font-semibold tracking-wide">
            Galeri
          </span>
          <div className="overflow-y-auto max-h-[450px]">
            <div className="columns-3 space-y-4 gap-x-4 pb-3 px-3">
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

      <div className="flex gap-x-4 py-[80px]">
        {/* left */}
        <div className="flex-shrink flex-col w-full z-0">
          <Tabs
            aria-label="Options"
            radius="full"
            selectedKey={isSelected}
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
                  <span>Acara</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
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
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
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
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
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
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
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
        <div className="flex-shrink flex-col w-[600px] z-0">
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
