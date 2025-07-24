import Image from "next/image";
//import { workshopData } from "@/lib/workshopData";
import { prisma } from "@/lib/prisma";
type Props = {
  params: { slug: string };
};



export default async function WorkshopPage({ params }: Props) {
 // const workshop = workshopData[params.slug as keyof typeof workshopData];
  const workshop = await prisma.workshop.findUnique({
    where: { slug: params.slug },
  });
  if (!workshop) return <p className="text-center mt-32 text-red-600">Workshop not found</p>;

  return (
    <section className="max-w-3xl mx-auto py-12 px-6 mt-24 h-[calc(100vh-160px)] text-black">
      <h1 className="text-3xl font-bold mb-2">{workshop.name}</h1>
      <p className=" mb-2">
        <strong>Date:</strong> {workshop.date.toISOString().slice(0, 10)} - <strong>Time:</strong> {workshop.time}
      </p>
      <img src={workshop.image || "/fallback.jpg"} alt={workshop.name+" picture goes here"} className="rounded-lg shadow mb-6 w-full" />
      <p className="mb-6 text-lg">{workshop.description}</p>
      <a
        href={workshop.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#F8E16C] hover:bg-yellow-600 text-gray-800 rounded-md text-center"
      >
        Register Now
      </a>
    </section>
  );
}