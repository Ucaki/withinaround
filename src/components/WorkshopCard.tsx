import Link from "next/link";

type WorkshopCardProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  place: string;
  href: string;
};

export default function WorkshopCard({
  name,
  description,
  date,
  time,
  place,
  href,
}: WorkshopCardProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-4 border-yellow-800 rounded-xl p-4 shadow-md bg-white hover:bg-yellow-50 transition">
      {/* Left: Description */}
      <div className="text-gray-800 max-w-sm">
        
        <Link href={href} className="font-semibold italic text-yellow-800 hover:underline">
          {name}
        </Link>{" "}
        -<br/> {description}
      </div>

      {/* Right: Details */}
      <div className="text-left text-sm sm:text-base mt-4 sm:mt-0 text-gray-600">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Place:</strong> {place}</p>
      </div>
    </div>
  );
}