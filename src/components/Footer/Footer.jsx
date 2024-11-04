import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className=' bg-base-300 text-base-content p-5 mt-24'>

                    <section className=' w-full md:w-7/12 mx-auto'>
                        <div className='footer_top text-center'>
                                <h2 className='text-4xl font-bold'>Gadget Heaven</h2>
                                <p className='text-sm my-3 text-gray-600 font-semibold'>Leading the way in cutting-edge technology and innovation.</p>
                        </div>

                        <div className='footer_menu  grid grid-cols-2 md:grid-cols-3 mt-8'>
                                <div className='md:text-center mt-3'>

                                    <h2 className='text-xl font-bold mb-3'>Service</h2>
                                    <ul className='text-black text-opacity-60'>
                                        <li>Order Tracking</li>
                                        <li>Product Support</li>
                                        <li>Shipping & Delivery</li>
                                        <li>Returns</li>
                                    </ul>
           
                                </div>
                                <div className='md:text-center mt-3'>
                                <h2 className='text-xl font-bold mb-3'>Company</h2>
                                    <ul className='text-black text-opacity-60'>
                                        <li>About Us</li>
                                        <li>Careers</li>
                                        <li>Contact</li> 
                                    </ul>
                                  
                                </div>

                                <div className='md:text-center mt-3'>
                                <h2 className='text-xl font-bold mb-3'>Legal</h2>
                                    <ul className='text-black text-opacity-60'>
                                        <li>Terms of Service</li>
                                        <li>Privacy Policy</li>
                                        <li>Cookie Policy</li>

                                    </ul>
                                </div>
                        </div>
                    </section>

                <div className='text-center mt-14'>
                    <p className='text-sm md:text-xl'>All &copy;copyright are reserved by <a href="https://facebook.com/mrreja.me" target='_blank' className='text-green-600 font-bold'>Rejaul Islam</a></p>
                </div>
            </footer>

        </>
    )
}

export default Footer
