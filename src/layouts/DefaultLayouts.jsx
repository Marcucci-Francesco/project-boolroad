import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const DefaultLayouts = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayouts