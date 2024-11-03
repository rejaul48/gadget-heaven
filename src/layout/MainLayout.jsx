import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Header ></Header>

                <main className='flex-grow'>
                    <Outlet ></Outlet>
                </main>

                <Footer ></Footer>
            </div>
        </>
    )
}

export default MainLayout
