import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminlogin from '../components/Adminlogin'
import Adminsignup from '../components/Adminsignup'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
function Allroutes() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/adminsignup' element={<Adminsignup />} />
            <Route path='/adminlogin' element={<Adminlogin />} />
            </Routes></>
    )
}

export default Allroutes
