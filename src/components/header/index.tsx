import { Button, Image, Tooltip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SkipToContent from "../skip-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "../modal/SearchComponent";
import LanguageComponent from "../popoper";

const Header = () => {

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

        {/* navigation */}
        {/* <nav className="flex items-center gap-x-4 capitalize text-[16px] md:hidden">
          {data.map((nav, index) => (
            <Link
              className={`${
                pathname === nav.link
                  ? "text-gray-800 font-semibold"
                  : "text-gray-600"
              } p-2 hover:text-gray-800 tracking-wider`}
              to={nav.link}
              key={index}
            >
              {nav.name}
            </Link>
          ))}
        </nav> */}

        {/* favorite & language */}
        <div className="flex items-center gap-x-2">
          <SearchComponent />

          <Button
            as={Link}
            to="#"
            className="hover:text-rose-600 text-gray-400"
            startContent={
              <Tooltip content="Favorit saya" placement="bottom" showArrow>
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
