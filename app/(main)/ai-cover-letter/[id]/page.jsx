import React from 'react'

async function CoverLetter({ params }) {
    const {id} = await params;
  return (
    <div>CoverLetter: {id}</div>
  )
}

export default CoverLetter