import { workshopController } from "@/lib/controllers/workshopController";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const workshops = await workshopController.getAll();
        if(!workshops) {
            return NextResponse.json({ error: 'Workshop not found' }, { status: 404 });
        }
        return NextResponse.json(workshops, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to fetch workshops" },
            { status: 500 }
        );
    }
}

  // if(req.method === 'POST'){
    //     try {
    //         const { name, description, date, time, location, image, registrationUrl } = req.body;
    //         if (!name || !date || !time || !location ) {
    //             return res.status(400).json({ error: 'Missing required fields' });
    //         }
            
    //         const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    //         const newworkshop = await createWorkshopService({
    //             name,
    //             description,
    //             date,
    //             time,
    //             location,
    //             image,
    //             registrationUrl,
    //             slug
    //         });
            
    //         return res.status(201).json(newworkshop);
    //     } catch (error) {
    //         console.error('Error creating workshop:', error);
    //         return res.status(500).json({ error: 'Internal server error' });
    //     }
    // }


 