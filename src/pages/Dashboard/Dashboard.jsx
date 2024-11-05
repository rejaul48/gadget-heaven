import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { getStoreCartData } from '../../utilities/localStorage';
import useTitleHook from '../../components/useTitleHook/useTitleHook';

const Dashboard = () => {
  // Dynamic title show here
  useTitleHook('Dashboard')

  // this is purchase button state
  const [isdisabled, setIsDisabled] = useState(true)

  const location = useLocation();
  const isCartPage = location.pathname === '/dashboard/cart';

  const [sortOrder, setSortOrder] = useState('asc');

  // This data from localStorage
  const cartData = getStoreCartData();

  // This data from API 
  const { productData } = useLoaderData();

  // Calculate total price for cart
  const totalPrice = isCartPage
    ? productData.filter(product => cartData.includes(product.product_id))
      .reduce((acu, product) => Math.round(acu + product.price), 0)
    : 0;

  // check total price and set button visible condition
  useEffect(() => {
    setIsDisabled(totalPrice <= 0)
  }, [totalPrice])


  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <main className='container mx-auto mt-4 px-4 xl:px-0'>
      <div className="section_hero text-center bg-primary text-white rounded-lg h-[180px] md:h-[220px] py-4">
        <h2 className='text-3xl md:text-5xl font-semibold'>Dashboard</h2>
        <p className='px-2 text-xs lg:text-lg md:w-7/12 mx-auto mt-2'>
          Explore the latest gadgets that will take your experience to the next level.
        </p>

        {/* Navigation buttons */}
        <div className='flex justify-center items-center gap-5 mt-3'>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `py-2 px-8 rounded-full font-bold ${isActive ? 'bg-white text-primary' : 'border-white border-2 text-white'
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `py-2 px-8 rounded-full font-bold ${isActive ? 'bg-white text-primary' : 'border-white border-2 text-white'
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      {/* Conditional section heading based on route */}
      {isCartPage ? (
        <div className="card_added_info md:flex md:justify-between md:items-center mt-3">
          <div className='text-center md:text-left my-3 md:my-0'>
            <h2 className='text-2xl font-bold'>Cart</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 md:items-center gap-5'>
            <h2 className='text-lg font-bold'>Total Cost: $ <span>{totalPrice}</span></h2>
            <button
              onClick={toggleSortOrder}
              className='flex items-center gap-1 border-2 border-primary text-primary font-bold px-5 py-2 rounded-full'>
              Sorted By Price <span><img className='w-[15px]' src="https://img.icons8.com/?size=24&id=100608&format=png" alt="" /></span>
            </button>
            <button disabled={isdisabled} className={`purchase_btn bg-primary text-white px-8 py-3 rounded-full ${isdisabled ? "bg-opacity-30" : "bg-opacity-100"}`}>Purchase</button>
          </div>
        </div>
      ) : (
        <div className='mt-4'>
          <h2 className='text-2xl font-bold'>Wish List</h2>
        </div>
      )}

      {/* Render child components based on route */}
      <Outlet context={{ sortOrder }} />
    </main>
  );
};

export default Dashboard;
