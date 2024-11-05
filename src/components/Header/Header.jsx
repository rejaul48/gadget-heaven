import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { ProductContext } from './../../ContextApi/ConextApi';

const Header = () => {
    const { cart, wishlist } = useContext(ProductContext);


    // find the location
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    const conditionalHeader = isHomepage ? "rounded-t-lg bg-primary" : " bg-white rounded-none text-black";
    const headerTextColor = isHomepage ? "text-white" : "text-black";
    const mobileWebName = isHomepage ? "text-white" : "text-black";

    const links = (
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/statistics'>Statistics</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to='/faq'>Faq</NavLink>
            </li>
        </>
    );

    return (
        <header className='container mx-auto mt-2 px-4 xl:px-0 sticky top-0 z-20 '>
            <section className={`backdrop-blur-lg ${conditionalHeader} py-2`}>
                <div className='text-center md:hidden'>
                    <Link to='/' className={` text-2xl font-bold ${mobileWebName}`}>Gadget Heaven</Link>
                </div>
                <div className={`navbar rounded-lg ${headerTextColor} px-5 lg:px-8`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
                                {links}
                            </ul>
                        </div>
                        <Link to='/' className=" text-3xl font-bold hidden md:block">Gadget Heaven</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-2">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <div className="indicator">
                            <span className="indicator-item badge bg-lime-100 text-black">
                                <span>{cart.length}</span>
                            </span>
                            <div className="grid">
                                <Link to='/dashboard/cart' className='bg-white p-2 rounded-full'>
                                    <img className='w-[23px]' src="https://img.icons8.com/?size=24&id=85080&format=png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="indicator">
                            <span className="indicator-item badge bg-lime-100 text-black">
                                <span>{wishlist.length}</span>
                            </span>
                            <div className="grid">
                                <Link to='/dashboard/wishlist' className='bg-white p-2 rounded-full'>
                                    <img className='w-[23px]' src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
