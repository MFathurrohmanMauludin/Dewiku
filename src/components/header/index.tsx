import { Button, Image, Tooltip } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import SkipToContent from "../skip-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "../modal/SearchComponent";
import { useTranslation } from "react-i18next";
import LanguageComponent from "../popoper";
import { useEffect } from "react";
import useStore from "../../utils/store";

const Header = () => {
  // translate
  const { t } = useTranslation(["language"]);
  const { isScroll, setScroll } = useStore();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex items-center justify-between py-3 px-6 w-full ${
          isScroll ? "bg-white/20 backdrop-blur-sm" : "bg-transparent"
        } fixed z-[999] rounded-b-lg`}
      >
        <SkipToContent />
        {/* logo */}
        <Link to={"/"}>
          <Image
            className="h-[36px]"
            src={logo}
            height={36}
            loading="lazy"
            alt="sejajarku logo"
          />
        </Link>

        {/* favorite & language */}
        <div className="flex items-center gap-x-2">
          <SearchComponent />

          <Button
            as={Link}
            to="/favorit"
            className={`${
              isScroll || pathname !== "/"
                ? "text-gray-500"
                : "text-white"
            } `}
            startContent={
              <Tooltip content={t("favorite")} placement="bottom" showArrow>
                <FontAwesomeIcon icon={faHeart} fontSize={18} />
              </Tooltip>
            }
            size="md"
            variant="light"
            radius="full"
            isIconOnly
          />

          <LanguageComponent />
        </div>
      </header>
    </>
  );
};

export default Header;
