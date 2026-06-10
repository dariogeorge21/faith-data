// CRUD for records table

import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createServerClient()

  // Fetch all records
  const { data: records, error } = await supabase
    .from('records')
    .select('*')

  if (error) {
    console.error('Error fetching records:', error)
    return NextResponse.json({ error: 'Failed to fetch records' }, { status: 500 })
  }

  return NextResponse.json({ records })
}

export async function POST(request: Request) {
  const supabase = createServerClient()
  const { title, description, ministry_id, member_id, event_id } = await request.json()

  // Create a new record
  const { data: newRecord, error } = await supabase
    .from('records')
    .insert({ title, description, ministry_id, member_id, event_id })
    .select('*')
    .single()

  if (error) {
    console.error('Error creating record:', error)
    return NextResponse.json({ error: 'Failed to create record' }, { status: 500 })
  }

  return NextResponse.json({ record: newRecord })
}

export async function DELETE(request: Request) {
  const supabase = createServerClient()
  const { id } = await request.json()

  // Delete a record by ID
  const { error } = await supabase
    .from('records')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting record:', error)
    return NextResponse.json({ error: 'Failed to delete record' }, { status: 500 })
  }
  
  return NextResponse.json({ message: 'Record deleted successfully' })
}

export async function PUT(request: Request) {
  const supabase = createServerClient()
  const { id, title, description, ministry_id, member_id, event_id } = await request.json()

  // Update a record by ID
  const { data: updatedRecord, error } = await supabase
    .from('records')
    .update({ title, description, ministry_id, member_id, event_id })
    .eq('id', id)
    .select('*')
    .single()

  if (error) {
    console.error('Error updating record:', error)
    return NextResponse.json({ error: 'Failed to update record' }, { status: 500 })
  }

  return NextResponse.json({ record: updatedRecord })
}