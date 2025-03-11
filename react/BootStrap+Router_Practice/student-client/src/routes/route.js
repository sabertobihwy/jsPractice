import React from 'react'
import { Route, useRoutes, Navigate } from 'react-router'
import Home from '../component/Home'
import About from '../component/About'

export default function CustomRoute() {
    return useRoutes([{
        path: '/home',
        element: <Home />
    }, {
        path: '/about',
        element: <About />
    }, {
        path: '/',
        element: <Navigate replace={true} to="/home" ></Navigate>
    }])
}
