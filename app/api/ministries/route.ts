// CRUD operations for ministries table

import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createServerClient()

  // Fetch all ministries
  const { data: ministries, error } = await supabase
    .from('ministries')
    .select('*')

  if (error) {
    console.error('Error fetching ministries:', error)
    return NextResponse.json({ error: 'Failed to fetch ministries' }, { status: 500 })
  }

  return NextResponse.json({ ministries })
}

export async function POST(request: Request) {
  const supabase = createServerClient()
  const { name } = await request.json()

  // Create a new ministry
  const { data: newMinistry, error } = await supabase
    .from('ministries')
    .insert({ name })
    .select('*')
    .single()

  if (error) {
    console.error('Error creating ministry:', error)
    return NextResponse.json({ error: 'Failed to create ministry' }, { status: 500 })
  }

  return NextResponse.json({ ministry: newMinistry })
}

export async function DELETE(request: Request) {
  const supabase = createServerClient()
  const { id } = await request.json()

  // Delete a ministry by ID
  const { error } = await supabase
    .from('ministries')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting ministry:', error)
    return NextResponse.json({ error: 'Failed to delete ministry' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Ministry deleted successfully' })
}

export async function PUT(request: Request) {
  const supabase = createServerClient()
  const { id, name } = await request.json()

  // Update a ministry by ID
  const { data: updatedMinistry, error } = await supabase
    .from('ministries')
    .update({ name })
    .eq('id', id)
    .select('*')
    .single()

  if (error) {
    console.error('Error updating ministry:', error)
    return NextResponse.json({ error: 'Failed to update ministry' }, { status: 500 })
  }

  return NextResponse.json({ ministry: updatedMinistry })
}