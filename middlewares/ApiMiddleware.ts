import { NextRequest, NextResponse } from 'next/server';
import { VALID_API_ROUTES } from '@/lib/apiRoutes';


export function apiMiddleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/api')) {

        const isValidRoute = VALID_API_ROUTES.some((validPath) => pathname === validPath || pathname.startsWith(validPath + '/'));

        if (!isValidRoute) {

            const fallback = request.nextUrl.clone();
            fallback.pathname = '/api/not-found';
            return NextResponse.rewrite(fallback);
        }
    }

    return NextResponse.next();
}