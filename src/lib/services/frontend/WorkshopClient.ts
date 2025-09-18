import { WorkshopFormData } from "@/hooks/useWorkshopForm";

export const workshopClient = {
  async getAll(){
    const res = await fetch("api/workshops");
    if(!res.ok) throw new Error("Failed to fetch workshops");
    return res.json();
  },
  async getBySlug(slug: string) {
    const res = await fetch(`api/workshops/${slug}`);
    if(!res.ok) throw new Error("Failed to fetch workshop");
    return res.json();
  },
  
}

export async function createWorkshop(payload: WorkshopFormData) {
  const res = await fetch("/api/workshops", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create workshop");
  }

  return res.json();
}