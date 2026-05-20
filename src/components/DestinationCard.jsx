import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } =
    destination;
  return (
    <div className="border">
      <Image
        className=""
        src={imageUrl}
        alt={destinationName}
        width={400}
        height={400}
      />
      <div className="p-4">
        <div className="flex items-center gap-1">
          <FiMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h1 className="text-xl font-bold">{destinationName}</h1>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCalendar />
              {duration}{" "}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">${price}</h3>
          </div>
        </div>
      </div>
      <Link href={`/destination/${_id}`}>
        <Button variant="ghost" className={"text-cyan-400 p-3 w-full"}>
          <FaArrowRightToBracket /> Book Now
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
