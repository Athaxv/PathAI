
import { getIndustryInsights } from '@/actions/dashboard';
import React from 'react'
import DashboardView from './_components/DashboardView';

async function Dashboard() {
  const insights = await getIndustryInsights()
  return (
    <div className='container mx-auto'>
      <DashboardView insights={insights}/>
    </div>
  )
}

export default Dashboard
