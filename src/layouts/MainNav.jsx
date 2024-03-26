//css
import '../assets/css/main-nav.css'
//hooks
import React , {useCallback, useEffect,useState } from 'react'
import { showSideNavigationBar } from '../store/slices/sideNavigationBarSlice'
import useDebounce from '../hooks/useDebounce'
import UserLogo from '../components/UserLogo'
import { useSelector , useDispatch  } from 'react-redux'
import {logoSrc} from '../data/userData.json'
import { useLocation } from 'react-router'

//components
import Icon from 'react-inlinesvg'
import ChallengesSectionNav from '../components/ChallengesSectionNav'
//svg
import notificationSvg from '../assets/svg/notification.svg'



function MainNav() {
  
  const dispatch = useDispatch()
  const location = useLocation()  
  const {isChallengesSectionNavInvisible} = useSelector(state => state.challengesSectionNavSlice)
  

  const [navbarHalfTransparent,setNavbarHalfTransparent] = useState(true)
 const removeNavbarHalfTransparent = useDebounce(()=> {
    setNavbarHalfTransparent(false)
 }, 1000)
  
  const navbarTransparentHandler = useCallback(()=> {
    if ( navbarHalfTransparent === false) {
      setNavbarHalfTransparent(true)
    }
    removeNavbarHalfTransparent()
  },[setNavbarHalfTransparent,removeNavbarHalfTransparent])
  
useEffect(()=>{
  if (location.pathname === '/challenges')
  window.removeEventListener('scroll',navbarTransparentHandler)
  else
  window.addEventListener('scroll', navbarTransparentHandler)
 
},[location])


useEffect(()=>{
  window.addEventListener('scroll', navbarTransparentHandler)
 return ()=>{
  window.removeEventListener('scroll',navbarTransparentHandler)
 }
},[])

  return (
   <>

<nav className={`main-nav  ${navbarHalfTransparent ? 'half-transparent':''} `} >
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

     {
      isChallengesSectionNavInvisible &&  <ChallengesSectionNav />
     }
    </nav>
   </>
  )
}
export default MainNav
