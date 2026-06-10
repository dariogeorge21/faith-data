// Navigation component for the admin dashboard. This will be below the KPI's for easy navigation to different sections of the dashboard such as records, ministries, members, events. It will be a simple 2*2 navigation section with links to each section.

import Link from 'next/link';

import React from 'react'

const Navigation = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <div className="grid grid-cols-2 gap-4">
        <Link href="/admin/records" className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
          Records
        </Link>
        <Link href="/admin/ministries" className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">
          Ministries
        </Link>
        <Link href="/admin/members" className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600">
          Members
        </Link>
        <Link href="/admin/events" className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600">
          Events
        </Link>
      </div>
    </div>
  )
}

export default Navigation
