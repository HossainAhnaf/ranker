//css
import '../assets/css/main-nav.css'
//hooks
import React , {useCallback, useEffect,useState } from 'react'
import { showSideNavigationBar } from '../store/slices/sideNavigationBarSlice'
import useDebounce from '../hooks/useDebounce'
import { useSelector , useDispatch  } from 'react-redux'
import { useLocation, useParams } from 'react-router'

//components
import UserLogo from '../components/UserLogo'
import ChallengesSectionNav from '../components/ChallengesSectionNav'
import Icon from 'react-inlinesvg'

//svg
import notificationSvg from '../assets/svg/notification.svg'



function MainNav() {

  const dispatch = useDispatch()
  const location = useLocation()  
  const params = useParams() 
  const [title,setTitle] = useState('Samer Rank') 
  
  const {logoSrc,status,level} = useSelector(state=>state.userSlice)
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
    if (location.pathname.startsWith('/profile')) 
      setTitle(params.username)
    else if (location.pathname === '/challenges')
      setTitle('Challenges')
    else if (location.pathname === '/create-new-challenge')
      setTitle('Create New Challenge')
    else if (location.pathname === '/notifications')
      setTitle('Notifications') 
    else if (location.pathname === '/peoples')
      setTitle('Peoples')
    else if (location.pathname === '/settings')
      setTitle('Settings')
      else if (location.pathname === '/signin')      
      setTitle('Signin')
    else if (location.pathname === '/signup')
      setTitle('Signup')
    else
      setTitle('Samer Rank')
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
