import { NextRequest } from "next/server";
import { apiMiddleware } from "./middlewares/ApiMiddleware";

export function middleware( request: NextRequest) {
    return apiMiddleware(request);
}

export const config = {
    matcher: ['/api/:path*'],
}