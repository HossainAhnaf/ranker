//css
import '../assets/css/main-nav.css'
//hooks
import React , { Children, useEffect, useState } from 'react'
import { showSideNavigationBar } from '../store/slices/sideNavigationBarSlice'
import useDebounce from '../hooks/useDebounce'
import UserLogo from '../components/UserLogo'
import { useDispatch } from 'react-redux'
import {logoSrc} from '../data/userData.json'

//components
import Icon from 'react-inlinesvg'
//svg
import notificationSvg from '../assets/svg/notification.svg'



function MainNav() {
  
  const dispatch = useDispatch()

  const [navbarHalfTransparent,setNavbarHalfTransparent] = useState(false)
 const removeNavbarHalfTransparent = useDebounce(()=> {
    setNavbarHalfTransparent(false)
 }, 1000)
  
  const navbarTransparentHandler = ()=> {
    if (navbarHalfTransparent === false) {
      setNavbarHalfTransparent(true)
    }
    removeNavbarHalfTransparent()
  }

useEffect(()=>{
 window.addEventListener('scroll', navbarTransparentHandler)
 return ()=>{
  window.removeEventListener('scroll',navbarTransparentHandler)
 }
})
  return (
   <>

<nav className={`main-nav ${navbarHalfTransparent ? 'half-transparent':''}`} >
      <div className="primary flex-rw left">
        <h3 className="app-name" >
          <em>Samer Rank</em>
        </h3>
      </div>

      <div className="secondery flex-rw" >
        <button className="notification-button badge-wrapper svgCont">
         <Icon src={notificationSvg}  />
          <small className="badge">4</small>
        </button>
        <button className="profile-button" onClick={()=>dispatch(showSideNavigationBar())}>
        <UserLogo logoSrc={logoSrc}/>
       </button>

      </div>
    </nav>
   </>
  )
}

export default MainNav
