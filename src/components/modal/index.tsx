import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Checkbox,
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

interface FormProps {
  photo: string;
  fullname: string;
  email: string;
  comment: string;
  like: number;
  rating: number;
  control: {
    validateEmail: any;
    validateFullName: any;
    inputChange: any;
    ratingChange: any;
  };
  status: {
    email: boolean;
    fullName: boolean;
  };
}

interface verification {
  link: string;
}

interface share {
  link: string;
}

const TestimonyForm = (data: FormProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isCheck, setCheck] = useState(true);

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-white capitalize"
        size="sm"
        color="success"
      >
        buat testimoni
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
              <ModalHeader className="flex flex-col gap-1">
                Berikan Testimoni Anda
              </ModalHeader>

              {/* form */}
              <ModalBody>
                {/* rating */}
                <div className="flex flex-col items-center gap-y-4 pb-4">
                  <span>Berapa penilaian anda untuk desa wisata ini?</span>
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
                    initialRating={0}
                    onChange={(rate) => data.control.ratingChange(rate)}
                  />
                </div>

                {/* full name */}
                <Input
                  type="text"
                  label="Nama Lengkap"
                  variant="bordered"
                  value={data.fullname}
                  onValueChange={data.control.validateFullName}
                  isInvalid={data.status.fullName}
                  errorMessage="Mohon masukan nama lengkap lebih dari 1 huruf"
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
                  errorMessage="Mohon masukan email yang valid"
                  isRequired
                />

                {/* comment */}
                <Textarea
                  className="mt-2"
                  variant="bordered"
                  value={data.comment}
                  placeholder="Apa hal menarik yang anda rasakan di desa ini?"
                  classNames={{
                    base: "w-full",
                    input: "resize-y min-h-[100px]",
                  }}
                  disableAutosize
                  disableAnimation
                />

                <span className="flex justify-end text-tiny">
                  Karakter Tersisa: 500
                </span>

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
                      Saya setuju dengan{" "}
                      <Link href="/syarat-&-ketentuan" size="sm">
                        Syarat & Ketentuan
                      </Link>{" "}
                      yang berlaku
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
                  Cancel
                </Button>

                <Button
                  className="bg-gray-900 text-white"
                  onPress={onClose}
                  isDisabled={isCheck}
                  radius="full"
                >
                  Submit
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

  return (
    <>
      <Button
        className="hover:!bg-white"
        onPress={onOpen}
        size="sm"
        startContent={
          <Tooltip content="Terverifikasi">
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
              <ModalHeader className="flex flex-col gap-1">
                Desa Wisata Jatimulyo
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
                  Desa ini telah tervefikasi oleh <br />
                  <strong>Kementerian Pariwisata dan Ekonomi Kreatif</strong>
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

  return (
    <>
      <Button
        className="hover:!bg-green-700 hover:text-white bg-white/10 backdrop-blur-sm text-white text-md"
        onPress={onOpen}
        size="md"
        startContent={
          <Tooltip content="bagikan">
            <FontAwesomeIcon icon={faShareFromSquare} fontSize={18} />
          </Tooltip>
        }
        variant="light"
        radius="full"
      >
        Bagikan
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
              <ModalHeader className="flex flex-col gap-1">
                Bagikan Informasi ini
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

export { TestimonyForm, VerifycationModal, ShareModal };
