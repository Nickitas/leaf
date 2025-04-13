import { appRoutes } from '@/kernel/routes';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;

  
  if (!token && request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL(appRoutes.signIn, request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/profile/:path*'],
};