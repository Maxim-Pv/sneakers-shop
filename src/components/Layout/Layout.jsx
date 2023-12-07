import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <div className='container'>
        <Navbar />
        <Outlet />
        <footer className='footer'>
            Coded by 
            <Link className='autor' to='https://www.linkedin.com/in/maksim-pavlov-12b22528b/?locale=en_US'>
                Maxim Pavlov
            </Link>.
        </footer>
    </div>
  )
}

export default Layout