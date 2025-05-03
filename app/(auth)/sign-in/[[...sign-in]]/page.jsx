import { SignIn } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div>
        <SignIn signInUrl="/onboarding"/>
    </div>
  )
}

export default page