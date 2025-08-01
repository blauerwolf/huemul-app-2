import { apiErrors } from '@/lib/apiErrors';

export async function GET(request: Request) { 
  return apiErrors.notFound();
}