//modules
import React , {useRef,useEffect,useState} from "react"
import {useSelector, useDispatch } from "react-redux"
import { hideSideNavigationBar,sideNavigationBarAutoHideHandler} from "../store/slices/sideNavigationBarSlice"
import { NavLink } from "react-router-dom"
import useActiveClassName from "../hooks/useActiveClassName"

//components
import Icon from 'react-inlinesvg'
import UserProfileShortView from "../components/UserProfileShortView"

//svg
import profileSvg from '../assets/svg/profile.svg'
import achievementChallengeSvg from '../assets/svg/achievement-challenge.svg'
import plusSvg from '../assets/svg/plus(1).svg'
import notificationSvg from '../assets/svg/notification.svg'
import peopleSvg from '../assets/svg/people.svg'
import settingsSvg from '../assets/svg/settings.svg'
import logoutSvg from '../assets/svg/logout.svg'
import closeSvg from '../assets/svg/close(1).svg'

//css
import '../assets/css/side-navigation-bar.css'

function SideNavigationBar() {
  
 
  const sideNavigationBarRef = useRef(null)
  
  const dispatch = useDispatch()
  const isActive = useSelector(state=>state.sideNavigationBarSlice.isActive)
  const theme = useSelector(state=>state.themeSlice.theme)
 
 const sideNavigationBarBlurHandler = ({relatedTarget})=>{
    if (relatedTarget === null)
    dispatch(hideSideNavigationBar())
    
  }
  const AutoHideHandler = ()=>{
    dispatch(sideNavigationBarAutoHideHandler())
  }

   
useEffect(()=>{
  if (isActive){
    sideNavigationBarRef.current.focus()
  }
},[isActive])
  useEffect(()=>{
   window.addEventListener('scroll', AutoHideHandler)
   return ()=>{
    window.removeEventListener('scroll',AutoHideHandler)
   }
  },[])


 
  return (
    <>
     <div className={`side-navigation-bar theme-${theme} flex-cm ${isActive ? 'active' : ''}`} tabIndex='0' onBlur={sideNavigationBarBlurHandler}  ref={sideNavigationBarRef} >
        <div className="primary flex-rw">
          <UserProfileShortView />
          <button className="hide-button svgCont"  onClick={()=>dispatch(hideSideNavigationBar())}>
              <Icon src={closeSvg}/>
          </button>
        </div>
        <div className="navigation-button-wrapper">
          <NavLink className={useActiveClassName}  to="/">
            <button className="profile-button">
              <span className="svgCont">
               <Icon src={profileSvg}/>
              </span>
              <span className="name">Profile</span>
            </button>
          </NavLink>
          <NavLink className={useActiveClassName}  to='/challenges'>
            <button>
              <span className="svgCont">
              <Icon src={achievementChallengeSvg}/>
             </span>
                <span className="name">Challenges</span>
            </button>
          </NavLink>
          <NavLink className={useActiveClassName}  to='/create-new-challenge'>
            <button className="create-new-challenge-button">
              <span className="svgCont">
                <Icon src={plusSvg}/>
              </span> <span className="name">Create new challenge</span>
            </button>
          </NavLink>
          <NavLink className={useActiveClassName}  to='/notifications'>
            <button className="notifications-button">
              <span className="svgCont badge-wrapper">
                <Icon src={notificationSvg} onError={console.log}/>
                <small className="badge">4</small>
              </span> 
              <span className="name">Notifications</span>
            </button>
          </NavLink>
          <NavLink className={useActiveClassName}  to='/Peoples'>
            <button>
              <span className="svgCont">
                <Icon src={peopleSvg}/>
              </span> <span className="name">Peoples</span>
            </button>
          </NavLink>
          
          <NavLink className={useActiveClassName}  to='/settings'>
            <button>
              <span className="svgCont">
                <Icon src={settingsSvg}/>
              </span> <span className="name">Settings</span>
            </button>
          </NavLink>
            <button className="logout-button">
              <span className="svgCont">
                <Icon src={logoutSvg}/>
              </span>
              <span className="name">Log out</span>
            </button>
        </div>
      </div>
    
    </>
  )
}

export default SideNavigationBar;
