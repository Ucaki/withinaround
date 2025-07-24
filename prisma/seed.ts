import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main() {
    await prisma.workshop.deleteMany();

    await prisma.workshop.createMany({
        data: [
        {
            name : "Intro to Somatics30",
            description : "Explore mindful movement and inner awareness",
            date : new Date("2025-06-25"),
            time: "12:25",
            location: "Belgrade",
            slug: "intro-to-somatics",
            image: "/somatics.jpg",
            registrationUrl: "https://docs.google.com/forms/u/0/"
        },
        {
            name: "Advanced Somatics",
            description: "Deepen your practice with advanced techniques",
            date: new Date("2025-06-26"),
            time: "14:00",
            location: "Belgrade",
            slug: "advanced-somatics",
            image: "/advanced-somatics.jpg",
            registrationUrl: "https://docs.google.com/forms/u/0/"
        },
        {
            name: "Yoga & Breath",
            description: "A deep dive into breath-guided asanas",
            date: new Date("2025-07-12"),
            time: "10:00",
            location: "Novi Sad",
            slug: "yoga-breath",
            image: "/yoga.jpg",
            registrationUrl: "https://docs.google.com/forms/u/0/"
        },
        {
            name: "Contact Improvisation Basics",
            description: "Learn the fundamentals of contact improvisation",
            date: new Date("2025-07-15"),
            time: "3:00",
            location: "Novi Sad",
            slug: "contact-impro-basics",
            image: "/contact-impro.jpg",
            registrationUrl: "https://docs.google.com/forms/u/0/"
        },
    ],
    });
};
main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
        // Exit with failure
        process.exit(1);
    });
    
