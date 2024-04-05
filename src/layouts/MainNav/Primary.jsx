//modules
import React , {useCallback, useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
//components
import Icon from 'react-inlinesvg'
//svg
import appLogo from '../../assets/svg/app-logo.svg'
import backSvg from '../../assets/svg/back.svg'

function Primary() {
  
  const location = useLocation()  
  const navigate = useNavigate()
  const params = useParams() 

  const {username} = useSelector(state=>state.userSlice)

 const validPathsToShowAppName = ['/', '/signin','/signup']

  const [title,setTitle] = useState('')  

  const titles = {
    '/challenges': 'Challenges',
   '/create-new-challenge': 'Create New Challenge',
   '/notifications': 'Notifications',
   '/peoples': 'Peoples',
   '/settings': 'Settings',
   '/name-and-contact-info': 'Name and Contact Info',
   '/password-and-security': 'Password and Security',
   '/notifications-preference': 'Notifications Preference',
   '/display': 'Display',

 }
 const backButtonVisiblePathList = [
   '/name-and-contact-info',
   '/password-and-security',
   '/notifications-preference',
   '/display'    
 ]

 const isBackButtonVisible = useCallback((path)=> {
   if ((path.startsWith('/profile') && params.username !== username) || backButtonVisiblePathList.includes(path))
     return true
   else
     return false
 },[params.username,username])
 
 useEffect(() => {

   if (location.pathname.startsWith('/profile'))    
     setTitle(params.username)
   else setTitle(titles[location.pathname])
 }, [location.pathname, params.username])
  
  return (
    <div className="primary flex-rw ">
    { 
    isBackButtonVisible(location.pathname) 

    ? <button className="back-button button svgCont" onClick={()=>navigate(-1)}>
       <Icon src={backSvg}  />
     </button>
    
   :<div className="site-brand" onClick={()=>navigate('/')}>
    <span className="svgCont">
      <Icon src={appLogo}  />
    </span>
   {validPathsToShowAppName.includes(location.pathname) &&
    <h1 className="app-name" >
     <em>{import.meta.env.VITE_APP_NAME.slice(1)}</em>
    </h1>
    }
   </div>
   }
   <h1 className="nav-title">
    {title}
   </h1>
   </div>
  )
}

export default Primary
