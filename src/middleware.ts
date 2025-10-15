import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAdmin = token?.role === 'ADMIN';
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/register');

    // Solo redirige al dashboard si el usuario está autenticado y accede a login o register
    if (token && isAuthPage) {
      // Solo redirige si el token es válido y el usuario realmente está autenticado
      if (token.email && token.id) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }

    // Si intenta acceder a páginas protegidas sin estar autenticado
    if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Si intenta acceder a rutas de admin sin ser admin
    if (req.nextUrl.pathname.startsWith('/admin') && !isAdmin) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/login', '/register']
};