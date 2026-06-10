// API for finding the count of each KPI for the dashboard from supbase tables. This will be used to display the KPIs on the admin dashboard.

import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET() {
  const supabase = createServerClient()

  // Fetch total records count
    const { data: totalRecordsData, error: totalRecordsError } = await supabase
        .from('records')
        .select('id', { count: 'exact' })
    
    if (totalRecordsError) {
        console.error('Error fetching total records:', totalRecordsError)
        return NextResponse.json({ error: 'Failed to fetch total records' }, { status: 500 })
    }

    const totalRecords = totalRecordsData?.length || 0

  // Fetch ministries count
    const { data: ministriesData, error: ministriesError } = await supabase
        .from('ministries')
        .select('id', { count: 'exact' })
    
    if (ministriesError) {
        console.error('Error fetching ministries count:', ministriesError)
        return NextResponse.json({ error: 'Failed to fetch ministries count' }, { status: 500 })
    }

    const ministriesCount = ministriesData?.length || 0

  // Fetch members count
    const { data: membersData, error: membersError } = await supabase
        .from('members')
        .select('id', { count: 'exact' })
    
    if (membersError) {
        console.error('Error fetching members count:', membersError)
        return NextResponse.json({ error: 'Failed to fetch members count' }, { status: 500 })
    }

    const membersCount = membersData?.length || 0

  // Fetch events count
    const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('id', { count: 'exact' })
    
    if (eventsError) {
        console.error('Error fetching events count:', eventsError)
        return NextResponse.json({ error: 'Failed to fetch events count' }, { status: 500 })
    }

    const eventsCount = eventsData?.length || 0

  // Return the counts as JSON response
    return NextResponse.json({
        totalRecords,
        ministriesCount,
        membersCount,
        eventsCount
    })
}