import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'
import { privateRoutes } from '@/routes'

export async function middleware(req: NextRequest) {
	// console.log(req)
	const token = await getToken({ secret: process.env.AUTH_SECRET, req })
	const isLoggedIn = !!token
	const { nextUrl } = req

	const isPrivateRoute = privateRoutes.includes(nextUrl.pathname)
	const isAuthRoute = nextUrl.pathname.includes('/login')
	const isApiRoute = nextUrl.pathname.startsWith('/api')

	// console.log('nextUrl', nextUrl)
	// console.log('isLoggedIn', isLoggedIn)
	// console.log('isPrivateRoute', isPrivateRoute)
	// console.log('isAuthRoute', isAuthRoute)
	// console.log('isApiRoute', isApiRoute)

	if (isApiRoute) {
		return NextResponse.next()
	}

	if (isPrivateRoute && !isLoggedIn) {
		return NextResponse.redirect('http://localhost:3000')
	}

	if (isAuthRoute && isLoggedIn) {
		return NextResponse.redirect('http://localhost:3000/home')
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
}
