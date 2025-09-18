import { useQuery } from '@tanstack/react-query';
import { workshopClient } from "@/lib/services/frontend/WorkshopClient";

export function useWorkshops() {
  return useQuery({
    queryKey: ['workshops'],
    queryFn: () => workshopClient.getAll()
  });
}