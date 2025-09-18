import { useQuery } from "@tanstack/react-query";
import { workshopClient } from "@/lib/services/frontend/WorkshopClient";

export function useGetWorkshop(slug: string) {
    return useQuery({
        queryKey: ['workshop', slug],
        queryFn: () => workshopClient.getBySlug(slug),
    })

}