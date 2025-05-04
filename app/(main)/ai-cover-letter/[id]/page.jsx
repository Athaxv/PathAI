import { getCoverLetter } from '@/actions/CoverLetter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import CoverLetterPreview from '../_components/CoverLetterPreview';

async function CoverLetter({ params }) {
    const {id} = await params;
    const coverLetter = await getCoverLetter(id);

  return (
    <div className='mx-auto container py-6 pl-3 pr-3'>
      <div className='flex flex-col space-y-2'>
        <Link href={'/ai-cover-letter'}>
          <Button variant={'link'} className={'gap-2 pl-0'}>
            <ArrowLeft className='h-4 w-4'/>
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className='text-6xl font-bold gradient-title mb-6'>
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
      </div>
      <CoverLetterPreview coverLetter={coverLetter}/>
    </div>
  )
}

export default CoverLetter