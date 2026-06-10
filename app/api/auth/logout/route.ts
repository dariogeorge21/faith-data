// API route for handling logout requests. This will be used to sign out users using lib/auth.ts SignOut function and return a success message to the client.

import { NextResponse } from 'next/server'
import { signOut } from '@/lib/auth'

export async function POST() {
  const { error } = await signOut()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Successfully logged out' })
}