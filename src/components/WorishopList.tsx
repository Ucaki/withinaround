'use client';

import { useEffect, useState, forwardRef, useImperativeHandle} from 'react';
import WorkshopCard from './WorkshopCard';
import { Workshop } from '../lib/types'; 
export type WorkshopListRef = {
  refresh: () => void;
};

const WorkshopList = forwardRef<WorkshopListRef>(function WorkshopList(props, ref) {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  const fetchWorkshops = async () => {
    try {
      const res = await fetch('/api/workshops');
      const data = await res.json();
      setWorkshops(data);
    } catch (err) {
      console.error('Failed to fetch workshops', err);
    }
  };
  

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useImperativeHandle(ref, () => ({
    refresh: fetchWorkshops,
  }));

  return (
    
    <div className="grid gap-4">
      {workshops.map(workshop => (
        
        <WorkshopCard
          key={workshop.slug}
          workshop={workshop}
        />
      ))}
    </div>
  );
});
export default WorkshopList;


{/* This component is used to display a list of workshops.  It fetches the workshop data from the server
and maps over the data to create a list of WorkshopCard components. Each card displays the workshop
details such as name, description, date, time, and location. The component is designed to be reusable and can be
used in different parts of the application where a list of workshops is needed. The use of forwardRef and useImperativeHandle allows the parent component to control the refresh functionality
of the workshop list, making it more dynamic and interactive. This is particularly useful in scenarios where
the workshop list needs to be updated after adding a new workshop or when the data changes, without requiring a full page reload. The component is styled using Tailwind CSS classes for a responsive and modern design. The grid layout ensures that the workshops are displayed in a clean and organized manner, adapting to different screen sizes.
This component is a functional React component that uses TypeScript for type safety. It utilizes hooks such as useState and useEffect to manage state and side effects, respectively. The component is designed to be efficient and maintainable, following best practices in React development. 
export default function WorkshopList(){
    const [workshops, setWorkshops] = useState<Workshop[]>([]);

    const fetchWorkshops = async () => {
        try {
            const res= await fetch('/api/workshops');
            const data = await res.json();
            setWorkshops(data);
        } catch (error) {
            console.error('Error fetching workshops:', error);
        }
    };

    useEffect( () => {
        fetchWorkshops();
    },[] );
 

    return (
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.slug}
            name={workshop.name}
            description={workshop.description}
            date={new Date(workshop.date).toLocaleDateString()}
            time={workshop.time}
            place={workshop.location}
            href={`/workshops/${workshop.slug}`}
          />
        ))}
      </div>

  );
}
*/}