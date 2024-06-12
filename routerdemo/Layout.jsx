import React from 'react'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
