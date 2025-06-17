// src/app/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image 
        <div>
          <Image
            src="/withinaroundLogo.png"
            alt="Yoga practice"
            width={200}
            height={200}
            
            
          />
        </div>
*/}
        {/* Text content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Welcome to WithinAround</h1>
          <p className="text-lg mb-4 text-gray-700">
            We offer yoga workshops, somatic practices, and contact improvisation events to help you explore movement and connect more deeply with yourself.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to help you grow — within and around — through body awareness, breath, and creative exploration.
          </p>
        </div>
      </div>
    </section>
  );
}
