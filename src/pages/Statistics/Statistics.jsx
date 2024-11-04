import React from 'react'
import useTitleHook from '../../components/useTitleHook/useTitleHook'

const Statistics = () => {
  // dynamic title
  useTitleHook('Statistics')
  return (
    <>
     
     <section className='container mx-auto'>
          <h2>This is Statistics page</h2>
     </section>

    </>
  )
}

export default Statistics
