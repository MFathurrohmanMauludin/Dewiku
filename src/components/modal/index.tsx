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
  Select,
  SelectItem,
  SelectSection,
  Tab,
  Tabs,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { MailIcon } from "./MailIcon";

interface Props {
  fullname: string;
  email: string;
  phonenumber: string;
  nominal: string;
  payment: any;
  control: {
    validateFullName: any;
    validateEmail: any;
    validatePhoneNumber: any;
    validateNominal: any;
  };
  status: {
    email: boolean;
    nominal: boolean;
    fullName: boolean;
  };
}

const BuyTicketFormModal = (data: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const payment = data.payment;

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-gray-900 text-white"
        size="md"
        radius="full"
      >
        Donasi Sekarang
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
                Form Donasi
              </ModalHeader>
              <ModalBody>
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

                <Input
                  className="mb-2"
                  type="text"
                  label="Nomor Telepon"
                  variant="bordered"
                  value={data.phonenumber}
                  onValueChange={data.control.validatePhoneNumber}
                  isRequired
                />

                <Input
                  type="text"
                  label="Nominal Donasi"
                  variant="bordered"
                  value={data.nominal.toString()}
                  onValueChange={data.control.validateNominal}
                  isInvalid={data.status.nominal}
                  errorMessage="Mohon masukan nominal minimum Rp5.000"
                  isRequired
                />

                <Select label="Metode Pembayaran">
                  <SelectSection showDivider title="Pembayaran Instant">
                    {payment[0].instantPayment.map((instant: any) => (
                      <SelectItem
                        key={instant.key}
                        startContent={
                          <Image
                            className="object-cover p-1 bg-white h-[28px]"
                            src={instant.icon}
                            height={36}
                            radius="none"
                          />
                        }
                      >
                        {instant.name}
                      </SelectItem>
                    ))}
                  </SelectSection>

                  <SelectSection showDivider title="Transfer Bank">
                    {payment[0].transferBank.map((transfer: any) => (
                      <SelectItem
                        key={transfer.key}
                        startContent={
                          <Image
                            className="object-cover p-1 bg-white h-[28px]"
                            src={transfer.icon}
                            height={36}
                            radius="none"
                          />
                        }
                      >
                        {transfer.name}
                      </SelectItem>
                    ))}
                  </SelectSection>

                  <SelectSection showDivider title="Virtual Account">
                    {payment[0].virtualAccount.map((virtual: any) => (
                      <SelectItem
                        key={virtual.key}
                        startContent={
                          <Image
                            className="object-cover p-1 bg-white h-[28px]"
                            src={virtual.icon}
                            height={36}
                            radius="none"
                          />
                        }
                      >
                        {virtual.name}
                      </SelectItem>
                    ))}
                  </SelectSection>

                  <SelectSection title="Outlet">
                    {payment[0].outlet.map((outlet: any) => (
                      <SelectItem
                        key={outlet.key}
                        startContent={
                          <Image
                            className="object-cover p-1 bg-white h-[28px]"
                            src={outlet.icon}
                            height={36}
                            radius="none"
                          />
                        }
                      >
                        {outlet.name}
                      </SelectItem>
                    ))}
                  </SelectSection>
                </Select>

                {/* comment */}
                <Textarea
                  className="mt-2"
                  variant="bordered"
                  placeholder="Ada yang ingin anda sampaikan?"
                  disableAnimation
                  disableAutosize
                  classNames={{
                    base: "w-full",
                    input: "resize-y min-h-[100px]",
                  }}
                />

                {/* term of service & privacy policy */}
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    className="flex items-start"
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    <p className="text-sm">
                      Saya setuju dengan{" "}
                      <Link href="#" size="sm">
                        Term Of Service
                      </Link>{" "}
                      dan &nbsp;
                      <Link href="#" size="sm">
                        Privacy Policy
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

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState("login");

  return (
    <>
      <Button
        className="bg-gray-800 text-white"
        color="default"
        variant="solid"
        size="md"
        onPress={onOpen}
        radius="full"
        aria-label="login or sign up"
      >
        Login
      </Button>

      <Modal
        // className="fixed bottom-0 !m-0 rounded-b-none"
        isOpen={isOpen}
        placement="center"
        classNames={{
          backdrop: "backdrop-blur-md z-[1000]",
          wrapper: "z-[1000]",
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{selected}</ModalHeader>
          <ModalBody>
            <div className="flex flex-col w-full">
              <Tabs
                fullWidth
                size="md"
                variant="solid"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={(data: any) => setSelected(data)}
              >
                {/* login */}
                <Tab key="Login" title="Login">
                  <form className="flex flex-col gap-4">
                    <Input
                      isRequired
                      label="Email"
                      placeholder="Masukan email anda"
                      type="email"
                    />
                    <Input
                      isRequired
                      label="Password"
                      placeholder="Masukan password anda"
                      type="password"
                    />
                    <p className="text-center text-small">
                      Belum punya akun?{" "}
                      <Link size="sm" onPress={() => setSelected("Sign Up")}>
                        Sign Up
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button fullWidth color="primary">
                        Login
                      </Button>
                    </div>
                  </form>
                </Tab>

                {/* signup */}
                <Tab key="Sign Up" title="Sign Up">
                  <form className="flex flex-col gap-4 h-[300px]">
                    <Input
                      isRequired
                      label="Nama Lengkap"
                      placeholder="Masukan nama lengkap anda"
                      type="password"
                    />
                    <Input
                      isRequired
                      label="Email"
                      placeholder="Masukan email anda"
                      type="email"
                    />
                    <Input
                      isRequired
                      label="Password"
                      placeholder="Masukan password anda"
                      type="password"
                    />
                    <p className="text-center text-small">
                      Sudah memiliki akun?{" "}
                      <Link size="sm" onPress={() => setSelected("Login")}>
                        Login
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button fullWidth color="primary">
                        Sign Up
                      </Button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const SignUpModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisibleCreatePassword, setIsVisibleCreatePassword] = useState(false);
  const createPassword = () =>
    setIsVisibleCreatePassword(!isVisibleCreatePassword);

  const [mail, setMail] = useState("");
  const isValidEmail = (email: string): boolean => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        size="md"
        variant="bordered"
        radius="full"
      >
        Sign Up
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          backdrop: "backdrop-blur-md z-[1000]",
          wrapper: "z-[1000]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
              <ModalBody>
                {/* enter full name */}
                <Input
                  endContent={
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[24px] text-default-400 pointer-events-none flex-shrink-0"
                    />
                  }
                  label="Nama Lengkap"
                  placeholder="Masukan nama lengkap anda"
                  variant="bordered"
                />

                {/* enter email */}
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Masukan email anda"
                  variant="bordered"
                  isInvalid={mail.length > 0 && !isValidEmail(mail)}
                  onValueChange={setMail}
                  errorMessage={"Mohon masukan alamat email yang valid"}
                />

                {/* create password */}
                <Input
                  label="Buat Password"
                  variant="bordered"
                  placeholder="Masukan password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={createPassword}
                    >
                      {isVisibleCreatePassword ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisibleCreatePassword ? "text" : "password"}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  variant="light"
                  onPress={onClose}
                  radius="full"
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose} radius="full">
                  Create Account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const LoginAndSignUpMobileScreen = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState("login");

  return (
    <>
      <Button
        className="text-gray-500"
        color="default"
        variant="light"
        size="md"
        onPress={onOpen}
        isIconOnly
        aria-label="login or sign up"
        startContent={
          <FontAwesomeIcon fontSize={24} icon={faArrowRightFromBracket} />
        }
      />

      <Modal
        // className="fixed bottom-0 !m-0 rounded-b-none"
        isOpen={isOpen}
        placement="center"
        classNames={{
          backdrop: "backdrop-blur-md z-[1000]",
          wrapper: "z-[1000]",
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{selected}</ModalHeader>
          <ModalBody>
            <div className="flex flex-col w-full">
              <Tabs
                fullWidth
                size="md"
                variant="solid"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={(data: any) => setSelected(data)}
              >
                {/* login */}
                <Tab key="Login" title="Login">
                  <form className="flex flex-col gap-4">
                    <Input
                      isRequired
                      label="Email"
                      placeholder="Masukan email anda"
                      type="email"
                    />
                    <Input
                      isRequired
                      label="Password"
                      placeholder="Masukan password anda"
                      type="password"
                    />
                    <p className="text-center text-small">
                      Belum punya akun?{" "}
                      <Link size="sm" onPress={() => setSelected("Sign Up")}>
                        Sign Up
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button fullWidth color="primary">
                        Login
                      </Button>
                    </div>
                  </form>
                </Tab>

                {/* signup */}
                <Tab key="Sign Up" title="Sign Up">
                  <form className="flex flex-col gap-4 h-[300px]">
                    <Input
                      isRequired
                      label="Nama Lengkap"
                      placeholder="Masukan nama lengkap anda"
                      type="password"
                    />
                    <Input
                      isRequired
                      label="Email"
                      placeholder="Masukan email anda"
                      type="email"
                    />
                    <Input
                      isRequired
                      label="Password"
                      placeholder="Masukan password anda"
                      type="password"
                    />
                    <p className="text-center text-small">
                      Sudah memiliki akun?{" "}
                      <Link size="sm" onPress={() => setSelected("Login")}>
                        Login
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button fullWidth color="primary">
                        Sign Up
                      </Button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export {
  BuyTicketFormModal,
  LoginModal,
  SignUpModal,
  LoginAndSignUpMobileScreen,
};
