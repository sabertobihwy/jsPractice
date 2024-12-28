import React from 'react'
import Layout from './Layout'
import Header from './Header'
import Menu from './Menu'
import { Route, Routes  } from "react-router-dom"
import Welcome from "./Welcome.js"
import Welcome1 from './Welcome1'
import Welcome2 from './Welcome2'
import Movies from '../Movies'
import withRouteTracker from '../hoc/withRouteTracker.js'

export default function Admin() {
    // const WelcomeT = withRouteTracker(Welcome)
    // const MoviesT = withRouteTracker(Movies)
    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="movies" element={<Movies/>} />
                <Route path="2" element={<Welcome2/>} />
            </Routes>
        </Layout>
    )
}

