import { getAssessments } from '@/actions/interview'
import React from 'react'
import StatsCard from './_components/StatsCard'
import PerformanceChart from './_components/PerformanceChart'
import QuizList from './_components/QuizList'

async function Interview() {
  const assessments = await getAssessments()
  return (
    <div>
      <h1 className='text-6xl font-bold gradient-title mb-5'>
        Interview Preparation
      </h1>
      <div className='space-y-5'>
        <StatsCard  assessments={assessments}/>
        <PerformanceChart assessments={assessments}/>
        <QuizList assessments={assessments}/>
      </div>
    </div>
  )
}

export default Interview