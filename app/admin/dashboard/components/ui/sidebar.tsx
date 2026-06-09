import React from 'react'

// Sidebar component for the admin dashboard 
// This will contain navigation links. Can be expanded and collapsed for better UX.
const Sidebar = () => {

    const navigationLinks = [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Prayers", href: "/admin/prayers" },
        { name: "Ministries", href: "/admin/ministries" },
        { name: "Members", href: "/admin/members" },
        { name: "Records", href: "/admin/records" },
    ];

  return (
    // Sidebar container with fixed width and full height. Responsive across multiple devices
    <div className="w-64 bg-white shadow-md h-screen p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                    {link.name}
                </a>
            ))}
        </nav>
        {/* Signout Button */}
        <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-200">
            Sign Out
        </button>
    </div>
  )
}

export default Sidebar
