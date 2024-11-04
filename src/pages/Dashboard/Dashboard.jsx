import React from 'react'
import { Link } from 'react-router-dom'
import AddedCard from '../../components/AddedCard/AddedCard'

const Dashboard = () => {
  return (
    <>
      <main className='container mx-auto mt-4 px-4 xl:px-0'>

        <div className="section_hero text-center bg-primary text-white rounded-lg h-[180px] md:h-[220px] py-4">
          <h2 className='text-3xl md:text-5xl font-semibold'>Dashboard</h2>
          <p className='px-2 text-xs lg:text-lg md:w-7/12 mx-auto mt-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

          <div className='flex justify-center items-center gap-5 mt-3'>
            <Link> <button className='py-2 px-8 rounded-full bg-white text-primary font-bold'>Cart</button></Link>
            <Link><button className='py-2 px-8 rounded-full border-2 border-white '>Wishlist</button></Link>
          </div>

        </div>

        <div className="card_added_info md:flex md:justify-between md:items-center mt-3">
          <div className='text-center md:text-left my-3 md:my-0'>
            <h2 className='text-2xl font-bold'>Cart</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 md:items-center gap-5'>
            <h2 className='text-lg font-bold'>Total Cost: $ <span>999.99</span></h2>
            <button className='flex items-center gap-1 border-2 border-primary text-primary font-bold px-5 py-2 rounded-full'>Sorted By Price <span><img className='w-[15px]' src="https://img.icons8.com/?size=24&id=100608&format=png" alt="" /></span></button>
            <button className='bg-primary text-white px-8 py-3 rounded-full'>Purchase</button>
          </div>
        </div>

        <div>
          {/* wishlist and cart show here */}
          <AddedCard ></AddedCard>
          <AddedCard ></AddedCard>
          <AddedCard ></AddedCard>
          <AddedCard ></AddedCard>
        </div>

      </main>
    </>
  )
}

export default Dashboard
