import Header from '@/components/Header'
import React from 'react'

function layout({ children }) {
  return (
    <div>
        <Header/>
    <div className='container mx-auto mt-24 mb-20'>
        {children}
    </div>
    </div>
  )
}

export default layout