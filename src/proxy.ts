import { jwtDecode } from 'jwt-decode';
import { NextResponse, NextRequest } from 'next/server';

interface JWTPayload {
    sub?: string,
    role?: string,
    exp?: number,
}

export function proxy(request: NextRequest) {
    const token = request.cookies.get("admin_token")?.value;

    const urlPath = request.nextUrl.pathname;

    if((urlPath.startsWith("/dashboard")) && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if(token) {
        try {
            const payload = jwtDecode<JWTPayload>(token);

            if(payload.role !== "ADMIN") {
                return NextResponse.redirect(new URL("/login", request.url));
            }
        } catch (error) {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('admin_token');
            return response;
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*"
    ]
}