// API route for handling user login. This will be used to authenticate users using lib/auth.ts SignIn function and return the session data to the client.

import { NextResponse } from 'next/server'
import { signIn } from '@/lib/auth'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  const { data, error } = await signIn(email, password)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }

  return NextResponse.json({ session: data.session })
}