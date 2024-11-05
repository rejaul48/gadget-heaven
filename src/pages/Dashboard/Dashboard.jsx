import React, { useEffect, useState, useContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useTitleHook from '../../components/useTitleHook/useTitleHook';
import { ProductContext } from './../../ContextApi/ConextApi';

const Dashboard = () => {
    // Dynamic title show here
    useTitleHook('Dashboard');

    // This is purchase button state
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSortedAscending, setIsSortedAscending] = useState(true); // State for sorting order

    const location = useLocation();
    const isCartPage = location.pathname === '/dashboard/cart';

    const { cart } = useContext(ProductContext);

    // Calculate total price for cart
    const totalPrice = isCartPage
        ? cart.reduce((acu, item) => Math.round(acu + item.price), 0)
        : 0;

    // Check total price and set button visible condition
    useEffect(() => {
        setIsDisabled(totalPrice <= 0);
    }, [totalPrice]);

    // Toggle sort order when button is clicked
    const toggleSortOrder = () => {
        setIsSortedAscending(prev => !prev);
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
                            onClick={toggleSortOrder} // Call the sorting function on click
                            className='flex items-center gap-1 border-2 border-primary text-primary font-bold px-5 py-2 rounded-full'>
                            Sorted By Price <span><img className='w-[15px]' src="https://img.icons8.com/?size=24&id=100608&format=png" alt="" /></span>
                        </button>
                        <button disabled={isDisabled} className={`purchase_btn bg-primary text-white px-8 py-3 rounded-full ${isDisabled ? "bg-opacity-30" : "bg-opacity-100"}`}>Purchase</button>
                    </div>
                </div>
            ) : (
                <div className='mt-4'>
                    <h2 className='text-2xl font-bold'>Wish List</h2>
                </div>
            )}

            {/* Render child components based on route */}
            <Outlet context={{ isSortedAscending }} /> {/* Pass sorting state to Outlet */}
        </main>
    );
};

export default Dashboard;
