import { apiResponses } from '@/lib/apiResponses';

export async function GET(request: Request) { 
  return apiResponses.notFound();
}