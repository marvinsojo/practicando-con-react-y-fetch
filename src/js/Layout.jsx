import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Home from './views/Home'
import About from './views/About'
import Profile from './views/Profile'
import Navbar from './component/Navbar'

const Layout = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/about'
                    element={<About/>}
                />
                <Route
                    path='/profile'
                    element={<Profile/>}
                />

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Layout