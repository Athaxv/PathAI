import { SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div>
        <SignUp signInUrl="/onboarding"/>
    </div>
  )
}

export default page