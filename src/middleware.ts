import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decrypt } from '@/lib/session'

const protectedRoutes = ['/', '/project']
const publicRoutes = ['/login']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
  const cookieStore = await cookies()
  const cookie = cookieStore.get('session')?.value
  const session = await decrypt(cookie)

  console.log('Middleware - Path:', path)
  console.log('Middleware - Raw session cookie:', cookie)
  console.log('Middleware - Decrypted session:', session)
  if (isProtectedRoute && !session) {
    console.log('Redirecting to login')
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (isPublicRoute && session) {
    console.log('Redirecting to home')
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}
