/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FacebookShareButton,
  LineShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  faFacebook,
  faLine,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  url: string;
  hashtag: any;
}

const ShareFacebook = (getData: Props) => {
  return (
    <>
      <FacebookShareButton
        url={`https://www.dewiku.netlify.app${getData.url}`}
        hashtag={`${getData.hashtag.map((data: any) => "#" + data).join(" ")}`}
        aria-label="bagikan ke facebook"
        className="flex flex-col items-center gap-y-1"
      >
        <FontAwesomeIcon
          className="text-blue-700"
          fontSize={48}
          icon={faFacebook}
        />

        <span className="text-sm">Facebook</span>
      </FacebookShareButton>
    </>
  );
};

const ShareXTwitter = (getData: Props) => {
  return (
    <TwitterShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      hashtags={getData.hashtag}
      aria-label="bagikan ke X"
      className="flex flex-col items-center gap-y-1"
    >
      <FontAwesomeIcon
        className="text-gray-800"
        fontSize={48}
        icon={faXTwitter}
      />

      <span className="text-sm">X</span>
    </TwitterShareButton>
  );
};

const ShareWhatsapp = (getData: Props) => {
  return (
    <WhatsappShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      aria-label="bagikan ke whatsapp"
      className="flex flex-col items-center gap-y-1"
    >
      <FontAwesomeIcon
        className="text-green-500"
        fontSize={48}
        icon={faWhatsapp}
      />

      <span className="text-sm">whatsapp</span>
    </WhatsappShareButton>
  );
};

const ShareTelegram = (getData: Props) => {
  return (
    <TelegramShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      aria-label="bagikan ke telegram"
      className="flex flex-col items-center gap-y-1"
    >
      <FontAwesomeIcon
        className="text-blue-500"
        fontSize={48}
        icon={faTelegram}
      />

      <span className="text-sm">telegram</span>
    </TelegramShareButton>
  );
};

const ShareLine = (getData: Props) => {
  return (
    <LineShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      aria-label="bagikan ke line"
      className="flex flex-col items-center gap-y-1"
    >
      <FontAwesomeIcon className="text-green-700" fontSize={48} icon={faLine} />

      <span className="text-sm">Line</span>
    </LineShareButton>
  );
};

export {
  ShareFacebook,
  ShareXTwitter,
  ShareWhatsapp,
  ShareTelegram,
  ShareLine,
};
