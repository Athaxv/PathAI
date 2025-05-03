import { getCoverLetters } from '@/actions/CoverLetter'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CoverLetterList from './_components/CoverLetterList'

async function AIcoverLetter() {
  const coverLetters = await getCoverLetters()

  return (
    <div className='pr-3 pl-3'>
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between mb-5'>
        <h1 className='text-6xl font-bold gradient-title'>My Cover Letters</h1>
        <Link href={'/ai-cover-letter/new'}>
        <Button>
          <Plus className='w-4 h-4 mr-2'/>
          Create New
        </Button>
        </Link>
      </div>
      <CoverLetterList coverLetters={coverLetters}/>
    </div>
  )
}

export default AIcoverLetter