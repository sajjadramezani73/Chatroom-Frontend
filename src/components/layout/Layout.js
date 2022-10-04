import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupLogin from '../../pages/Signup-login'
import Splash from '../../pages/Splash'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../pages/Home';

const Layout = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup-login" element={<SignupLogin />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </React.Fragment>
    )
}

export default Layout