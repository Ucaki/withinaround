//import Image from "next/image";
import { workshopData } from "@/lib/workshopData";

type Props = {
  params: { slug: string };
};



export default async function WorkshopPage({ params }: Props) {
  const workshop = workshopData[params.slug as keyof typeof workshopData];

  if (!workshop) return <p className="text-center mt-32 text-red-600">Workshop not found</p>;

  return (
    <section className="max-w-3xl mx-auto py-12 px-6 mt-24">
      <h1 className="text-3xl font-bold mb-2">{workshop.name}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Date:</strong> {workshop.date} - <strong>Time:</strong> {workshop.time}
      </p>
      <img src={workshop.image} alt={workshop.name+" picture goes here"} className="rounded-lg shadow mb-6 w-full" />
      <p className="mb-6 text-lg">{workshop.description}</p>
      <a
        href={workshop.registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-yellow-700 hover:bg-yellow-600 text-white rounded-md text-center"
      >
        Register Now
      </a>
    </section>
  );
}