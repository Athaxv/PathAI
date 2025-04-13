import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

async function Dashboard() {
  const { isOnboarded } = await getUserOnboardingStatus()
  
    if (!isOnboarded){
      redirect('/onboarding');
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard