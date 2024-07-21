import { Button, Image, Tooltip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SkipToContent from "../skip-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "../modal/SearchComponent";
import { useTranslation } from "react-i18next";
import LanguageComponent from "../popoper";

const Header = () => {
  // translate
  const { t } = useTranslation(["language"]);

  return (
    <>
      <header className="flex items-center justify-between py-3 px-6 w-full bg-white fixed z-[999] rounded-b-lg">
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
            className="hover:text-rose-600 text-gray-400"
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
