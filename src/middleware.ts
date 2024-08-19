import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('Authorization', 'Bearer ******');

    // Extract product id from pathname
    request.nextUrl.href = `http://localhost:3001/rewrite`;
    const response = NextResponse.redirect(request.nextUrl,)
    response.headers.set('Authorization', 'Bearer ******');
    response.cookies.set('token', 'Bearer ******');
    return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/rewrite',
}