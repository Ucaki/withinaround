
'use client';
import { useRef } from "react";
import WorkshopList, {WorkshopListRef} from "@/components/WorishopList";

import Image from "next/image";
//import WorkshopCard from "@/components/WorkshopCard";
//import { workshopList } from "@/lib/workshopData";
//import WorkshopCard from "@/components/WorkshopCard";
import { prisma } from "@/lib/prisma";

//new parts
import WorkshopForm from '@/components/WorkshopForm';
//


export default function AboutPage() {
//const workshops= await prisma.workshop.findMany();
const workshopListRef= useRef<WorkshopListRef>(null);

const postWorkshop= async () => {
  try {
    await fetch('api/workshops',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       name: 'New Workshop16',
          description: 'This is a new workshop',
          date: '2025-12-12',
          time: '10:00 AM',
          location: 'Online',
          image: 'https://example.com/image.jpg', // <--- Required!
          registrationUrl: 'https://example.com/register'
      }),
    });
    workshopListRef.current?.refresh();
  } catch (err) {
    console.error('Failed to post workshop', err); 
  }
}
  return (
    <div >
      <section id="about-section" className="max-w-4xl mx-auto py-12 px-6 pt-24 scroll-mt-20">
        <div className="grid md:grid-cols-1 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Welcome to WithinAround</h1>
            <p className="text-lg mb-4 text-gray-700">
              We offer yoga workshops, somatic practices, and contact improvisation events to help you explore movement and connect more deeply with yourself.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to help you grow — within and around — through body awareness, breath, and creative exploration.
            </p>
            <p>

  What is Lorem Ipsum?

  ...
            </p>
            <p>

  Where does it come from?

  ....

            </p>
          </div>
          <div >
          <Image
            src="https://cdn.yogajournal.com/wp-content/uploads/2022/06/Upward-Facing-Dog-Mod-1_Andrew-Clark-e1670972827524.jpg?crop=535:301&width=1070&enable=upscale"
            alt="some picture"
            width={500}
            height={500}
          />
        </div>
        </div>
      </section>
      <section id="workshop-section" className="scroll-mt-20 p-6 max-w-4xl mx-auto text-black">
        <hr className="rounded border-t-4 border-gray-600" />
        <h1 className="text-center font-bold text-4xl mt-10 mb-6 underline">
          Upcoming Workshops
        </h1>

        <div className="space-y-4">
          {/* Workshop card */}
   {/*       {workshopList.map((card)=>
          <WorkshopCard
            key={card.slug}
            name={card.name}
            description={card.description}
            date={card.date}
            time={card.time}
            place={card.place}
            href={card.href}
          />)}
        */}
        
        <WorkshopList ref={workshopListRef} />
        {/* <WorkshopList/> */} 
        </div>
      </section>
      <section id="blog-section" className="scroll-mt-20 p-6 max-w-4xl mx-auto">
        <hr className="rounded border-t-4 border-gray-600" />
        <h1 className="text-center font-bold text-4xl mt-10 mb-6 underline text-black">
          Blog
        </h1>
        <p className="break-words text-center">Blog brate Bruklin brate blog Bruklin bato</p>
      </section>
      <section>
        <div>
          <h2>Create a Workshop</h2>
          <WorkshopForm />
        </div>
      </section>
    </div>
  );
}

