import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupLogin from '../../pages/Signup-login'
import Splash from '../../pages/Splash'

const Layout = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/signup-login" element={<SignupLogin />} />
            </Routes>
        </React.Fragment>
    )
}

export default Layout