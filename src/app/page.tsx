// src/app/page.tsx
import Image from "next/image";

export default function AboutPage() {
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

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  Why do we use it?

  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

            </p>
            <p>

  Where does it come from?

  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

            </p>
          </div>
          <div max-w-sm>
          <Image
            src="https://cdn.yogajournal.com/wp-content/uploads/2022/06/Upward-Facing-Dog-Mod-1_Andrew-Clark-e1670972827524.jpg?crop=535:301&width=1070&enable=upscale"
            alt="some picture"
            width={500}
            height={500}
          />
        </div>
        </div>
      </section>
      <section id="workshop-section" className="scroll-mt-20 p-4 mr-28">
        <hr className="rounded border-t-4 border-gray-600" />
        <h1 className="text-center font-bold text-4xl mt-10 mb-6" style={{textDecoration: 'underline'}}>Upcoming workshops </h1>
        <ul className="text-left p-2 mr-20 pl-10 list-disc border-8 rounded-xl border-yellow-800" >

          <li className="">Event <a href="workshop-page-id" className="font-semibold italic text-yellow-800">NAME</a> and short description goes here. <br/>Event date: <strong>25.04.2025</strong><br/>Event time: <strong>12:25</strong><br/> <br/></li>
          <hr className="border-t-4 border-opacity-30 "/>
          <li>Event <a href="workshop-page-id" className="font-semibold italic text-yellow-800">NAME</a> and short description goes here. <br/>Event date: <strong>25.04.2025</strong><br/>Event time: <strong>12:25</strong><br/> <br/></li>
           <hr className="border-t-4 border-opacity-30 "/>
          <li>Event <a href="workshop-page-id" className="font-semibold italic text-yellow-800">NAME</a> and short description goes here. <br/>Event date: <strong>25.04.2025</strong><br/>Event time: <strong>12:25</strong><br/> <br/></li>
           <hr className="border-t-4 border-opacity-30 "/>
          <li>Event <a href="workshop-page-id" className="font-semibold italic text-yellow-800">NAME</a> and short description goes here. <br/>Event date: <strong>25.04.2025</strong><br/>Event time: <strong>12:25</strong><br/> <br/></li>
           <hr className="border-t-4 border-opacity-30 "/>
          <li>Event <a href="workshop-page-id" className="font-semibold italic text-yellow-800">NAME</a> and short description goes here. <br/>Event date: <strong>25.04.2025</strong><br/>Event time: <strong>12:25</strong><br/> <br/></li>
        </ul>
      </section>
    </div>
  );
}
