import React from 'react'

function layout({ children }) {
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
        {children}
    </div>
  )
}

export default layout