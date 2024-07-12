import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface SectionButtonProps{
    link: string;
    title: string;
}

export const SectionButton = (data : SectionButtonProps) => {
  return (
    <>
      <div className="flex items-center gap-x-3 w-full mt-8">
        <div className="grow h-[2px] bg-slate-400/30 inline-block rounded-full" />
        <Button className="capitalize hover:!bg-gray-900 hover:text-white" as={Link} to={data.link} variant="light" radius="full" endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare}/>}>
          {data.title}
        </Button>
        <div className="grow h-[2px] bg-slate-400/30 inline-block rounded-full" />
      </div>
    </>
  );
};