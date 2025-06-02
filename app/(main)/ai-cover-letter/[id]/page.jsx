import React from 'react'

const page = async ({params}) => {
  const id = await params.id;
  return (
    <div className='m-20'>
      CoverLetter: {id}
    </div>
  )
}

export default page
