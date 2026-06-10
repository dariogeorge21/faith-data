// API route for checking the current user session. This will be used to check if the user is authenticated and return the session data to the client.

import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: 'No active session' }, { status: 401 })
  }

  return NextResponse.json({ session })
}