import React from 'react'
import HomeCard from '../HomeCard/HomeCard'
import { useLoaderData } from 'react-router-dom'

const HomeCards = ({products}) => {

    // const { productData } = useLoaderData()


    return (
        <>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    products.map((product, ind) => (
                        <HomeCard key={ind}
                            product={product}
                        > </HomeCard>
                    ))
                }


            </div>


        </>
    )
}

export default HomeCards
