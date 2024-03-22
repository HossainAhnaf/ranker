//modules
import React from 'react'
import { Outlet } from 'react-router'
//layouts
import MainNav from '../layouts/MainNav'
import SideNavigationBar from "../layouts/SideNavigationBar";
function index() {
  return (
   <>
   <header>
   <MainNav /> 
   <SideNavigationBar />
   </header>
   <main>
    <Outlet />
   </main>
   </>
  )
}

export default index
