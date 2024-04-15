//modules
import React from 'react'
import { Outlet } from 'react-router'
//layouts
import MainNav from './MainNav/MainNav'
import CreateNewChallengeSideButton from './CreateNewChallengeSideButton'
function index() {
  return (
   <>
  
   <header>
   <MainNav /> 
   </header>
   <main>
     <CreateNewChallengeSideButton />   
    <Outlet />
   </main>
  
   </>
  )
}

export default index
