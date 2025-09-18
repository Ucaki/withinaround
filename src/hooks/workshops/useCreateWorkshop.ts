import { useMutation, useQueryClient } from '@tanstack/react-query';
// This hook is used to create a new workshop using the createWorkshop function
// from the WorkshopClient service. It uses React Query for managing the mutation state and caching.
// The useMutation hook is used to handle the mutation logic, including the function to call when
// the mutation is triggered, and the onSuccess callback to invalidate the 'workshops' query
// to ensure that the workshop list is updated after a new workshop is created. 
// The createWorkshop function sends a POST request to the '/api/workshops' endpoint with the workshop data.
// The payload is expected to be of type WorkshopFormData, which contains the necessary fields for
// creating a workshop. If the request is successful, it returns the created workshop data.
// If the request fails, it throws an error which can be handled in the component using this hook.
//import { WorkshopFormData } from "@/hooks/useWorkshopForm";  This was before we created lib/frontend/workshopClient.ts
import { createWorkshop } from '@/lib/services/frontend/WorkshopClient';
import { WorkshopFormData } from "@/hooks/useWorkshopForm";

export function useCreateWorkshop() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: WorkshopFormData) => createWorkshop(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workshops'] }); //optional
    },
  });
}
