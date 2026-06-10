// This is a component for displaying key performance indicators (KPIs) on the admin dashboard. It can be used to show metrics such as total records, ministries, members.
// fetch from the API route /api/kpi to get the counts of each KPI and display them in the cards.
import { useEffect, useState } from 'react';
import axios from 'axios';

const Kpi = () => {

  const [kpiData, setKpiData] = useState({
    totalRecords: 0,
    ministriesCount: 0,
    membersCount: 0,
    eventsCount: 0,
  });

  useEffect(() => {
    const fetchKpiData = async () => {
      try {
        const response = await axios.get('/api/kpi');
        setKpiData(response.data);
      } catch (error) {
        console.error('Error fetching KPI data:', error);
      }
    };

    fetchKpiData();
  }, []);



  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* 4 cards inside one large width card */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Records</h3>
          <p className="text-2xl font-bold text-gray-900">{kpiData.totalRecords.toLocaleString()}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Ministries</h3>
          <p className="text-2xl font-bold text-gray-900">{kpiData.ministriesCount}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Members</h3>
          <p className="text-2xl font-bold text-gray-900">{kpiData.membersCount}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Events</h3>
          <p className="text-2xl font-bold text-gray-900">{kpiData.eventsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Kpi
