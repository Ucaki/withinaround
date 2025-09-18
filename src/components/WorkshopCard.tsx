import Link from "next/link";
import React from "react";
import { Workshop } from "../lib/types"; 


{/*type WorkshopCardProps = {
                  This was before i mde types.ts globaly so i can import it and use from there
  name: string;
  description: string;
  date: string;
  time: string;     
  place: string;
  href: string;
};*/}
export type WorkshopCardProps = { workshop: Workshop   };

export default function WorkshopCard({
  workshop
}: WorkshopCardProps
) {
  const { name, description, date, time, location, slug } = workshop;
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-4 border-[#1A5F7A] rounded-xl p-4 shadow-md bg-white hover:bg-yellow-50 transition">
      {/* Left: Description */}
      <div className="text-black max-w-md">
        
        <Link href={`/workshops/${slug}`} className="font-semibold italic text-black hover:underline">
          {name}
        </Link>{" "}
        -<br/> {description}
      </div>

      {/* Right: Details */}
      <div className="text-left text-sm sm:text-base mt-4 sm:mt-0 text-gray-600">
        <p><strong>Date:</strong> {new Date(date).toISOString().split('T')[0]}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
    </div>
  );
}