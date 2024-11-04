import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {


    const location = useLocation();

    const isHomepage = location.pathname === '/';

    const conditionalHeader = isHomepage ? "rounded-t-lg bg-primary" : "rounded-full bg-white text-black";
    const headerTextColor = isHomepage ? "text-white" : "text-black";

    const links = <>
        <li><NavLink to='/' >Home</NavLink> </li>
        <li><NavLink to='/statistics' >Statistics</NavLink> </li>
        <li><NavLink to='/dashboard' >Dashboard</NavLink> </li>
       
    </>

    return (

        <>
            <header className='container mx-auto mt-2 
            
            '>
                <section className={`backdrop-blur-lg rounded-t-lg 
                ${conditionalHeader}
          
                `}>
                    <div className={`navbar  rounded-lg ${headerTextColor} lg:px-8`}>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {
                                        links
                                    }
                                </ul>
                            </div>
                            <Link to='/' className=" text-xl">Gadget Heaven</Link >
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-2">
                                {
                                    links
                                }

                            </ul>
                        </div>
                        <div className="navbar-end gap-2">
                            <Link className='bg-white p-2 rounded-full'><img className='w-[15px]' src="https://img.icons8.com/?size=24&id=85080&format=png" alt="" /></Link>
                            <Link className='bg-white p-2 rounded-full'><img className='w-[15px]' src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" /></Link>
                        </div>
                    </div>
                </section>
            </header>


        </>
    )
}

export default Header
