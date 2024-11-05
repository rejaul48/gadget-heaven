import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home'
import Statistics from '../pages/Statistics/Statistics'
import Dashboard from '../pages/Dashboard/Dashboard'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Details from '../pages/Details/Details'
import { dataLoadFromApi } from '../utilities/FetchDataFromApi'
import CategoryProduct from '../components/CategoryProduct/CategoryProduct'
import AddToCart from '../components/AddToCart/AddToCart'
import AddToWishList from '../components/AddtoWishList/AddToWishList'
import Faq from '../pages/Faq/Faq'



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                path: '/',

                element: <Home ></Home>,
                loader: dataLoadFromApi,
                children: [
                    {
                        path: '/category/:category',
                        element: <CategoryProduct ></CategoryProduct>,
                        loader: dataLoadFromApi
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics ></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard ></Dashboard>,
                loader: dataLoadFromApi,
                children: [
                    {
                        index: true,
                        element: <Navigate to='cart' ></Navigate>
                    },
                    {
                        path: 'cart',
                        element: <AddToCart ></AddToCart>,
                        loader: dataLoadFromApi

                    },
                    {
                        path: 'wishlist',
                        element: <AddToWishList ></AddToWishList>,
                        loader: dataLoadFromApi
                    }
                ]
            }, {
                path: '/details/:productId',
                element: <Details ></Details>,
                loader: dataLoadFromApi
            },
            {
                path: '/faq',
                element : <Faq ></Faq>
            }

        ]

    }
])

export default routes
