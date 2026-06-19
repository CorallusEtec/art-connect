import { jwtDecode } from 'jwt-decode';
import { NextResponse, NextRequest } from 'next/server';

interface JWTPayload {
    sub?: string,
    roles?: string,
    exp?: number,
}

export function proxy(request: NextRequest) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
        const loginUrl = new URL('/login', request.url);
        // Redireciona para o login
        return NextResponse.redirect(loginUrl);
      }

    if(token) {
        try {
            const payload = jwtDecode<JWTPayload>(token);

            if(payload.roles !== "ADMIN") {
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