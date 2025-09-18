

import { prisma } from "@/lib/prisma";

/*export class WorkshopService extends BaseService<typeof prisma.workshop> {
  constructor() {
    super(prisma.workshop);
  }*/
export class WorkshopService {
  async findMany(args?: Parameters<typeof prisma.workshop.findMany>[0]) {
    return prisma.workshop.findMany(args);
  }

  async findUnique(args: Parameters<typeof prisma.workshop.findUnique>[0]) {
    return prisma.workshop.findUnique(args);
  }
}

export const workshopService = new WorkshopService();


// export async function createWorkshopService(workshopData:{
//     name: string;
//     description: string;
//     date: string;
//     time: string;
//     location: string;
//     image?: string;
//     registrationUrl?: string;
//     slug: string;
// }) {
//     return await prisma.workshop.create({
//         data: {
//             name: workshopData.name,
//             description: workshopData.description,
//             date: new Date(workshopData.date),
//             time: workshopData.time,
//             location: workshopData.location,
//             image: workshopData.image || "",
//             registrationUrl: workshopData.registrationUrl || "",
//             slug: workshopData.slug,
//         },
//     });
// }