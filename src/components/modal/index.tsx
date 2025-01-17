import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Checkbox,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Snippet,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";

import {
  faCheck,
  faSearch,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare, faStar } from "@fortawesome/free-regular-svg-icons";
import Rating from "react-rating";
import { useState } from "react";
import {
  ShareFacebook,
  ShareLine,
  ShareTelegram,
  ShareWhatsapp,
  ShareXTwitter,
} from "../share";
import QRCode from "react-qr-code";
import { SearchCard } from "../card";
import { useTranslation } from "react-i18next";
import useStore from "../../utils/store";
import { useLocation } from "react-router-dom";
import searchNowImg from "../../assets/search-now.png";

interface FormProps {
  photo: string;
  fullname: string;
  email: string;
  comment: string;
  like: number;
  rating: number;
  control: {
    validateEmail: any;
    validateComment: any;
    validatePhoto: any;
    validateFullName: any;
    validateRating: any;
    submitForm: any;
  };
  status: {
    email: boolean;
    fullName: boolean;
  };
}

interface verification {
  link: string;
  name: string;
}

interface share {
  link: string;
}

interface searchProps {
  searchData: any;
  control: any;
}

const TestimonyForm = (data: FormProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isCheck, setCheck] = useState(true);
  const limitText = 500 - data.comment.length;
  const [isSendData, setSendData] = useState(false);
  const { t } = useTranslation();

  const sendData = (onClose: () => void) => {
    setSendData(true);
    setTimeout(() => {
      data.control.submitForm();
      setSendData(false);
      setCheck(true);
      onClose(); // Close the modal
    }, 3000);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-white capitalize"
        size="sm"
        color="success"
      >
        {t("createTestimony")}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="md"
        backdrop="blur"
        classNames={{
          backdrop: "backdrop-blur-md z-[1000]",
          wrapper: "z-[1000]",
        }}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 capitalize">
                {t("testimonyFormHeader")}
              </ModalHeader>

              {/* form */}
              <ModalBody>
                {/* rating */}
                <div className="flex flex-col items-center gap-y-4 pb-4">
                  <span className="capitalize">{t("questionForm")}</span>
                  <Rating
                    className="space-x-2"
                    emptySymbol={
                      <FontAwesomeIcon
                        icon={faStar}
                        fontSize={36}
                        className="text-yellow-400"
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        icon={faStarSolid}
                        fontSize={36}
                        className="text-yellow-400"
                      />
                    }
                    initialRating={data.rating}
                    onChange={(rate) => data.control.validateRating(rate)}
                  />
                </div>

                {/* photo */}
                <Input
                  type="text"
                  label={
                    <span className="capitalize">{`${t("photo")} (${t(
                      "optional"
                    )})`}</span>
                  }
                  placeholder="example: https://example.com/japan-flag.jpg"
                  variant="bordered"
                  value={data.photo}
                  onValueChange={data.control.validatePhoto}
                />

                {/* full name */}
                <Input
                  type="text"
                  label={
                    <span className="capitalize">{`${t("fullname")}`}</span>
                  }
                  variant="bordered"
                  value={data.fullname}
                  onValueChange={data.control.validateFullName}
                  isInvalid={data.status.fullName}
                  errorMessage={t("alertFullname")}
                  isRequired
                />

                {/* validate Email */}
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  value={data.email}
                  onValueChange={data.control.validateEmail}
                  isInvalid={data.status.email}
                  errorMessage={t("alertEmail")}
                  isRequired
                />

                {/* comment */}
                <Textarea
                  className="mt-2"
                  variant="bordered"
                  value={data.comment}
                  placeholder={t("questionTextArea")}
                  classNames={{
                    base: "w-full",
                    input: "resize-y min-h-[100px]",
                  }}
                  onValueChange={data.control.validateComment}
                  disableAutosize
                  disableAnimation
                />

                <div className="flex justify-end items-center gap-x-1 text-sm">
                  <span>{t("characterLimit")}:</span>
                  {limitText <= 10 ? (
                    <span className="text-red-600">{limitText}</span>
                  ) : (
                    <span className="text-green-700">{limitText}</span>
                  )}
                </div>

                {/* term of service & privacy policy */}
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    className="flex items-start"
                    classNames={{
                      label: "text-small",
                    }}
                    onChange={() => setCheck(!isCheck)}
                  >
                    <p className="text-sm">
                      {t("term")}{" "}
                      <Link href="/syarat-&-ketentuan" size="sm">
                        {t("term&condition")}
                      </Link>{" "}
                      {t("applicable")}
                    </p>
                  </Checkbox>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button
                  className="text-gray-900 border border-gray-900 hover:text-rose-600 hover:border-rose-600 hover:!bg-white"
                  variant="light"
                  onPress={onClose}
                  radius="full"
                >
                  {t("cancel")}
                </Button>

                <Button
                  className="bg-gray-900 text-white"
                  isDisabled={isCheck}
                  isLoading={isSendData}
                  onPress={() => sendData(onClose)}
                  radius="full"
                >
                  {t("submit")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const VerifycationModal = (data: verification) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Button
        className="hover:!bg-white"
        onPress={onOpen}
        size="sm"
        startContent={
          <Tooltip content={t("verified")}>
            <FontAwesomeIcon
              className="py-[4px] px-[4.8px] text-white bg-green-600 rounded-full"
              icon={faCheck}
              fontSize={12}
            />
          </Tooltip>
        }
        variant="light"
        radius="full"
        isIconOnly
      />

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="md"
        backdrop="blur"
        classNames={{
          backdrop: "backdrop-blur-md z-[1000]",
          wrapper: "z-[1000]",
        }}
        scrollBehavior="inside"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 capitalize">
                {data.name}
              </ModalHeader>

              {/* verifikasi */}
              <ModalBody className="flex items-center justify-center">
                <div
                  style={{
                    height: "auto",
                    margin: "0 auto",
                    maxWidth: 300,
                    width: "100%",
                  }}
                >
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={data.link}
                    viewBox={`0 0 256 256`}
                  />
                </div>

                <p className="mt-3">
                  {t("verifiedBy")} <br />
                  <strong>{t("ministry")}</strong>
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const ShareModal = (data: share) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Button
        className="hover:!bg-green-700 hover:text-white bg-white/10 backdrop-blur-sm text-white text-md capitalize text-sm"
        onPress={onOpen}
        size="md"
        startContent={
          <FontAwesomeIcon icon={faShareFromSquare} fontSize={16} />
        }
        variant="light"
        radius="full"
      >
        {t("share")}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="md"
        backdrop="transparent"
        classNames={{
          wrapper: "z-[1000]",
        }}
        scrollBehavior="inside"
      >
        <ModalContent className="pb-3">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 capitalize">
                {t("shareHeaderModal")}
              </ModalHeader>

              {/* verifikasi */}
              <ModalBody className="flex items-center justify-center">
                {/* share */}
                <div className="flex flex-row gap-x-4 py-2">
                  <ShareFacebook
                    url={data.link}
                    hashtag={["Desa_Wisata_Indonesiaku", "Wonderful_Indonesia"]}
                  />

                  <ShareTelegram
                    url={data.link}
                    hashtag={["Desa_Wisata_Indonesiaku", "Wonderful_Indonesia"]}
                  />

                  <ShareLine
                    url={data.link}
                    hashtag={["Desa_Wisata_Indonesiaku", "Wonderful_Indonesia"]}
                  />

                  <ShareXTwitter
                    url={data.link}
                    hashtag={["Desa_Wisata_Indonesiaku", "Wonderful_Indonesia"]}
                  />

                  <ShareWhatsapp
                    url={data.link}
                    hashtag={["Desa_Wisata_Indonesiaku", "Wonderful_Indonesia"]}
                  />
                </div>

                {/* copy link */}
                <Snippet className="w-full" symbol="" variant="bordered">
                  <span className="line-clamp-1 max-w-[38ch]">
                    {`https://dewiku.netlify.app${data.link}`}
                  </span>
                </Snippet>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const SearchModal = (data: searchProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { pathname } = useLocation();

  // translate
  const { t } = useTranslation(["language"]);
  const { isScroll } = useStore();

  return (
    <>
      <Button
        className={`${
          isScroll || pathname !== "/"
            ? "hover:text-gray-800 text-gray-600"
            : "text-white"
        } `}
        size="md"
        onPress={onOpen}
        radius="sm"
        variant="light"
        isIconOnly
      >
        <Tooltip content={t("search")} placement="bottom" showArrow>
          <FontAwesomeIcon icon={faSearch} fontSize={16} />
        </Tooltip>
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        size="3xl"
        classNames={{
          backdrop: "backdrop-blur-md z-[1000]",
          wrapper: "z-[1000]",
          base: "mt-[80px]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  type="text"
                  variant="bordered"
                  placeholder={`${t("searchPlaceHolder")}...`}
                  onValueChange={data.control}
                  onClear={() => console.log("input cleared")}
                />

                {data.searchData.length === 0 ? (
                  <div className="flex flex-col gap-y-2 justify-center items-center h-[300px] overflow-y-auto">
                    <Image
                      className="max-w-[260px]"
                      src={searchNowImg}
                      width={300}
                      alt="search-desa"
                    />
                    <span>{t("searchNotice")}</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-4 mt-2">
                    {data.searchData.map((desa: any, index: number) => (
                      <SearchCard
                        key={index}
                        imgUrl={desa.imgUrl}
                        name={desa.name}
                        visitors={desa.visitors}
                        testimony={desa.testimony.length}
                        control={() => onClose}
                        location={desa.location.city}
                      />
                    ))}
                  </div>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export { TestimonyForm, VerifycationModal, ShareModal, SearchModal };
