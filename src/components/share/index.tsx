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
      >
        <FontAwesomeIcon
          className="text-blue-700"
          fontSize={24}
          icon={faFacebook}
        />
      </FacebookShareButton>
    </>
  );
};

const ShareXTwitter = (getData: Props) => {
  return (
    <TwitterShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      hashtags={getData.hashtag}
      aria-label="bagikan ke twitter"
    >
      <FontAwesomeIcon
        className="text-gray-800"
        fontSize={24}
        icon={faXTwitter}
      />
    </TwitterShareButton>
  );
};

const ShareWhatsapp = (getData: Props) => {
  return (
    <WhatsappShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      aria-label="bagikan ke whatsapp"
    >
      <FontAwesomeIcon
        className="text-green-500"
        fontSize={24}
        icon={faWhatsapp}
      />
    </WhatsappShareButton>
  );
};

const ShareTelegram = (getData: Props) => {
  return (
    <TelegramShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      aria-label="bagikan ke telegram"
    >
      <FontAwesomeIcon
        className="text-blue-500"
        fontSize={24}
        icon={faTelegram}
      />
    </TelegramShareButton>
  );
};

const ShareLine = (getData: Props) => {
  return (
    <LineShareButton
      url={`https://www.dewiku.netlify.app${getData.url}`}
      aria-label="bagikan ke telegram"
    >
      <FontAwesomeIcon className="text-green-700" fontSize={24} icon={faLine} />
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
