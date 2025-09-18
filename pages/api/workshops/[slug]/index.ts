import { workshopController } from '@/lib/controllers/workshopController';
import { NextResponse } from 'next/server';

interface Params{
    params: { slug: string };
}

export async function GET( request: Request , { params }: Params ){
    try { 
        const workshop= await workshopController.getBySlug(params.slug);
        if(!workshop) {
            return NextResponse.json({ error: 'Workshop not found' }, { status: 404 });
        }
        return NextResponse.json(workshop, { status: 200 });
    } catch (error) {
        console.error('Error fetching workshop:', error);
        return NextResponse.json({ error: 'Failed to fetch workshop' }, { status: 500 });
    }
}