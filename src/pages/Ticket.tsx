import { Image } from '@nextui-org/react';
import commingSoon from '../assets/coming-soon.svg';

const Ticket = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[100px] px-8 xs:px-4">
        <Image
          className="w-[400px]"
          src={commingSoon}
          alt="comming soon"
          width={400}
        />
      </div>
    </>
  );
};

export default Ticket;
