import {
  faFacebookSquare,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagramIcon from "../../assets/instagram.svg";
import { Button, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const data = [
    {
      title: "bali",
    },
    {
      title: "papua",
    },
    {
      title: "yogyakarta",
    },
    {
      title: "bogor",
    },
    {
      title: "bandung",
    },
  ];

  const { t } = useTranslation();

  return (
    <footer>
      {/* logo & other */}
      <div className="flex lg:flex-wrap lg:gap-y-8 md:flex-wrap md:gap-8 gap-x-4 px-4 py-8 rounded-t-lg">
        <div className="flex flex-col grow">
          <Image
            src={logo}
            className="h-[56px] object-contain bg-cover bg-center"
            alt="sejajarku logo"
            width={127}
            height={36}
          />
        </div>
        {/* tentang perusahaan */}
        <div className="flex flex-col grow gap-y-3 capitalize">
          <span className="text-[18px] font-semibold">{t('about')}</span>
          <ul className="space-y-2">
            <li>
              <a href="#" className="capitalize">{t('logo')}</a>
            </li>
            <li>
              <a href="#">{t('sponsorus')}</a>
            </li>
            <li>
              <a href="#">{t('ourpartners')}</a>
            </li>
          </ul>
        </div>

        {/* pertanyaan yang sering ditanyakan */}
        <div className="flex flex-col grow gap-y-3 max-w-[300px] capitalize">
          <span className="text-[18px] font-semibold">{t('visitedalot')}</span>
          <ul className="flex flex-wrap gap-2">
            {data.map((karya, index) => (
              <li key={index}>
                <Button
                  as={Link}
                  to="#"
                  className="bg-green-700 text-white capitalize"
                  radius="full"
                  size="sm"
                >
                  {karya.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* dukungan untuk pengguna */}
        <div className="flex flex-col grow gap-y-3 capitalize">
          <span className="text-[18px] font-semibold">{t('support')}</span>
          <ul className="space-y-2">
            <li>
              <a href="#">{t('contactus')}</a>
            </li>
            <li>
              <a href="#">{t('terms&conditions')}</a>
            </li>
            <li>
              <a href="#">{t('privacypolicy')}</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* sosial media */}
        <div className="grow space-y-4 capitalize">
          <div className="flex flex-col gap-y-3">
            <span className="text-[18px] font-semibold">{t('followsus')}</span>
            <ul className="flex flex-row md:flex-wrap space-x-4">
              <li>
                <a href="#" aria-label="ikuti instagram kami">
                  <img
                    className="max-w-md h-[32px]"
                    src={instagramIcon}
                    alt="ikuti instagram kami"
                    width={32}
                    height={32}
                  />
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500"
                  aria-label="ikuti instagram kami"
                  href="#"
                >
                  <FontAwesomeIcon fontSize={32} icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a
                  className="text-slate-900"
                  aria-label="ikuti twitter kami"
                  href="#"
                >
                  <FontAwesomeIcon fontSize={32} icon={faXTwitter} />
                </a>
              </li>
              <li>
                <a
                  className="text-slate-900"
                  aria-label="ikuti tiktok kami"
                  href="#"
                >
                  <FontAwesomeIcon fontSize={32} icon={faTiktok} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3 capitalize">
            <span className="text-[14px] font-medium">{t('download')}</span>
            <ul className="flex flex-row space-x-4">
              <li>
                <a className="text-slate-900" href="#">
                  Google Play
                </a>
              </li>
              <li>
                <a className="text-slate-900" href="#">
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex items-center justify-between px-8 xs:px-4 py-3 text-sm">
        <span>&copy; 2024 - M Fathurrohman Mauludin</span>
        <div className="space-x-3">
          <Link to={"#"} className="text-gray-500 hover:text-gray-700">
            Term of Service
          </Link>
          <Link to={"#"} className="text-gray-500 hover:text-gray-700">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
