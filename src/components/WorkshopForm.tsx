'use client';

import { useCreateWorkshop } from '@/hooks/workshops/useCreateWorkshop';
import { useState } from 'react';
import { WorkshopFormData } from '@/hooks/useWorkshopForm';

export default function WorkshopForm() {
  //const form = useWorkshopForm();
  //const createWorkshop = useCreateWorkshop();
  const { mutate, isPending, isSuccess, isError, error } = useCreateWorkshop();

  const [formData, setFormData] = useState<WorkshopFormData>({
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({...formData, [event.target.name]: event.target.value} );
  }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        mutate(formData);   //send form data to the mutation function (to the API backend)

    }
  {/*const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (data: WorkshopFormData) => {
    try {
      await createWorkshop.mutateAsync(data);
      reset(); // clear form
    } catch (error) {
      console.error('Failed to create workshop:', error);
    }
  }; */}

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded w-2/4 mb-50 ">
      <div >
        <label className="block">Workshop Title</label>
        <input
            type="text"
            name="name"
            className="border px-2 py-1 w-3/4"
        placeholder="Workshop Title"
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <div> 
      <textarea
      className="border px-2 py-1 w-3/4"
        name="description"
        placeholder="Workshop Description"
        value={formData.description}
        onChange={handleChange}
      />
    </div>
      <div>
        <label className="block">Date</label>
        <input
            type="date"
            name="date"
            className="border px-2 py-1 w-3/4"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
        />
        </div>

        <div>
          <label className="block">Time</label>
          <input
            type="time"
            name="time"
            className="border px-2 py-1 w-3/4"
            placeholder="Time"
            value={formData.time}
            onChange={handleChange}
        />
        </div>
        <div>
          <label className="block">Location</label>
          <input
            type="text"
            name="location"
            className="border px-2 py-1 w-3/4"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
        />  
        </div>
        <button type="submit" disabled={isPending} className=' justify-center items-center w-32 min-h-[40px] rounded-full mt-[20px] px-[20px] py-[5px] shadow-[3px_3px_0px_1px_rgba(0,0,0,0.25)] hover:opacity-90' style={{backgroundColor: '#F8E16C' , color : '#363636'}}>{isPending ? "Creating..." : "Create Workshop"}</button>

        {isSuccess && <p>Workshop created!</p>}
      {isError && <p>Error: {(error as Error).message}</p>}
    </form>
  );
}