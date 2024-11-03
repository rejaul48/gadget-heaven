import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home'
import Statistics from '../pages/Statistics/Statistics'
import Dashboard from '../pages/Dashboard/Dashboard'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Details from '../pages/Details/Details'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home ></Home>,
                loader: () => fetch('/categories-api.json')
            },
            {
                path: '/statistics',
                element: <Statistics ></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard ></Dashboard>
            }, {
                path: '/details',
                element: <Details ></Details>
            }

        ]

    }
])

export default routes
