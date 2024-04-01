//modules
import React , {useCallback, useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
//components
import Icon from 'react-inlinesvg'
//svg
import backSvg from '../../assets/svg/back.svg'

function Primary() {
  
  const location = useLocation()  
  const navigate = useNavigate()
  const params = useParams() 

  const {username} = useSelector(state=>state.userSlice)


  const [title,setTitle] = useState('Samer Rank') 

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
   '/signin': 'Signin',
   '/signup': 'Signup',
   'default': 'Samer Rank'
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
   else setTitle(titles[location.pathname] || titles.default)
 }, [location.pathname, params.username])
  
  return (
    <div className="primary flex-rw ">
    { 
    isBackButtonVisible(location.pathname) &&
     <button className="back-button button svgCont" onClick={()=>navigate(-1)}>
       <Icon src={backSvg}  />
     </button>
    }
   <h3 className="app-name" >
       <em>{title}</em>
     </h3>
   </div>
  )
}

export default Primary
