//css
import '../assets/css/main-nav.css'
//hooks
import React , {useCallback, useEffect,useState } from 'react'
import { showSideNavigationBar } from '../store/slices/sideNavigationBarSlice'
import useDebounce from '../hooks/useDebounce'
import { useSelector , useDispatch  } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router'

//components
import UserLogo from '../components/UserLogo'
import ChallengesSectionNav from '../components/ChallengesSectionNav'
import Icon from 'react-inlinesvg'

//svg
import backSvg from '../assets/svg/back.svg'
import notificationSvg from '../assets/svg/notification.svg'



function MainNav() {

  const dispatch = useDispatch()
  const location = useLocation()  
  const navigate = useNavigate()
  const params = useParams() 
  const [title,setTitle] = useState('Samer Rank') 
  
  const {logoSrc,status,level} = useSelector(state=>state.userSlice)
  const {isChallengesSectionNavInvisible} = useSelector(state => state.challengesSectionNavSlice)
  const {username} = useSelector(state=>state.userSlice)
  
 
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
    console.log(params.username,username);
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

useEffect(()=>{
  window.addEventListener('scroll', navbarTransparentHandler)
 return ()=>{
  window.removeEventListener('scroll',navbarTransparentHandler)
 }
},[])

  return (
   <>

<nav className={`main-nav  ${navbarHalfTransparent ? 'half-transparent':''} `} >
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
     {
      location.pathname !== '/signin' && location.pathname !== '/signup' 
        &&
      <div className="secondary flex-rw" >
        <button className="notification-button badge-wrapper svgCont">
         <Icon src={notificationSvg}  />
          <small className="badge">4</small>
        </button>
        <button className="profile-button" onClick={()=>dispatch(showSideNavigationBar())}>
        <UserLogo logoSrc={logoSrc} status={status} level={level}/>
       </button>

      </div>
      }
     {
      isChallengesSectionNavInvisible &&  <ChallengesSectionNav />
     }
    
    </nav>
   </>
  )
}
export default MainNav
