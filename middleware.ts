import { NextResponse, type NextRequest } from 'next/server';

const PORTAL_REDIRECT_URL = 'https://elitecard.iriscrm.com/v2/login?ref=/v2';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';

  if (host === 'portal.elitecardprocessing.com') {
    return NextResponse.redirect(PORTAL_REDIRECT_URL, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Run on every path so portal subdomain redirect runs for all requests
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
