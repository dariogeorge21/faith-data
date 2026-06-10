"use client"


import Sidebar from './components/ui/sidebar';
import Kpi from './components/ui/kpi';
import Navigation from './components/ui/navigation';
import { useEffect } from 'react';

const AdminDashboard = () => {

  // Verify session using getsession API route and redirect to login page if not authenticated. This will be done in a useEffect hook that runs on component mount.
  const verifySession = async () => {
    try {
      const response = await fetch('/api/auth/session');
      if (!response.ok) {
        throw new Error('No active session');
      }
    } catch (error) {
      console.error('Error verifying session:', error);
      window.location.href = '/login';
    }
  }

    // every time the page is loaded, verify the session

  useEffect(() => {
    verifySession();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex min-h-screen bg-gray-100 absolute">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
        <Kpi />
      </div>
      <div className="flex-1 p-6">
        <Navigation />
      </div>
    </div>
  )
}

export default AdminDashboard
