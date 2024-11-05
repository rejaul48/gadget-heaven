import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <Helmet >
        <title>Error | Gadget E-commerce website</title>
      </Helmet>
      
      <section className='flex justify-center items-center w-full h-[100vh]'>
        <div className='erro_page text-center'>

          <h2 className='text-5xl lg:text-[120px] font-bold text-opacity-35 text-black'>404</h2>
          <h3 className='text-2xl lg:text-4xl font-semibold text-black text-opacity-30 mb-4'>Page Not Found</h3>
          <Link to='/' className='text-primary font-semibold underline'>Go To Home Page</Link>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
