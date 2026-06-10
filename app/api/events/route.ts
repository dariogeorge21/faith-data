// API fetching from supabase to get the events data and send it to the frontend
import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET() {
  const supabase = createServerClient()

  // CRUD operations for events table
  // Fetch all events
  const { data: events, error } = await supabase
    .from('events')
    .select('*')

  if (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }

  return NextResponse.json({ events })
}

export async function POST(request: Request) {
  const supabase = createServerClient()
  const { name, date, ministry_id } = await request.json()

  // Create a new event
  const { data: newEvent, error } = await supabase
    .from('events')
    .insert({ name, date, ministry_id })
    .select('*')
    .single()

  if (error) {
    console.error('Error creating event:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }

  return NextResponse.json({ event: newEvent })
}

export async function DELETE(request: Request) {
  const supabase = createServerClient()
  const { id } = await request.json()

  // Delete an event by ID
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Event deleted successfully' })
}

export async function PUT(request: Request) {
  const supabase = createServerClient()
  const { id, name, date, ministry_id } = await request.json()

  // Update an event by ID
  const { data: updatedEvent, error } = await supabase
    .from('events')
    .update({ name, date, ministry_id })
    .eq('id', id)
    .select('*')
    .single()

  if (error) {
    console.error('Error updating event:', error)
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 })
  }

  return NextResponse.json({ event: updatedEvent })
}