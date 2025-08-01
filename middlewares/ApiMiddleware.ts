import { NextRequest, NextResponse } from 'next/server';

export function apiMiddleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/api')) {
        const fallback = request.nextUrl.clone();
        fallback.pathname = '/api/not-found';
        return NextResponse.rewrite(fallback);
    }

    return NextResponse.next();
}