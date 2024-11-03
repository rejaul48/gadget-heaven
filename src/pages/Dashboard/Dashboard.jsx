import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <main className='container mx-auto mt-4'>
        <div className="section_hero text-center bg-primary text-white rounded-lg h-[250px] py-4">
          <h2 className='text-3xl font-semibold'>Dashboard</h2>
          <p className='w-7/12 mx-auto mt-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

          <div>
            <Link> <button>Cart</button></Link>
            <Link><button>Wishlist</button></Link>
          </div>

        </div>
      </main>
    </>
  )
}

export default Dashboard
