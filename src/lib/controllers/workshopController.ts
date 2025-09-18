import { workshopService } from "../services/backend/workshops/workshopService";
class WorkshopController{
    async getAll(){
        return workshopService.findMany({
            orderBy: { date: 'asc' }
        });
    }
    async getBySlug(slug: string){
        return workshopService.findUnique({
            where: { slug }
        })
    }

}
export const workshopController = new WorkshopController();