import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = () => {
    return (
        <>

            <section className='mt-2'>
                <div>
                    <img className='' src="https://i.imgur.com/ysRx88u.png" alt="img" />
                </div>
                <h2 className='text-2xl font-bold mt-2'>Dell XPS 13</h2>
                <p className='text-gray-500 my-1 pb-3'>price: <span>99.99K</span></p>
                <Link className='border-2 border-primary py-2 px-4 rounded-full'>View Details</Link>
            </section>

        </>
    )
}

export default HomeCard
