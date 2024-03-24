//hooks & modules
import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'
//lib
import router from './lib/router'
//css
import './assets/css/app.css'
import './assets/css/common-styles.css'

function App() {
   const theme = useSelector(state => state.themeSlice.theme)
  useEffect(() => {
    document.body.className = theme 
  },[theme])
  return (
    <div className="app" >
       <RouterProvider router={router} />
   </div>
  )
}

export default App
