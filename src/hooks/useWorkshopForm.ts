import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const workshopSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(5),
  date: z.string().min(1, 'Date is required'),
  time: z.string().max(5, 'Time must be in HH:MM format'),
  location: z.string().min(2),
});

export type WorkshopFormData = z.infer<typeof workshopSchema>;

export function useWorkshopForm(defaultValues?: Partial<WorkshopFormData>) {
  const form = useForm<WorkshopFormData>({
    resolver: zodResolver(workshopSchema),
    defaultValues: defaultValues ?? {
      name: '',
      description: '',
      date: '',
      time: '',
      location: '',
      
    },
  });

  return form;
}