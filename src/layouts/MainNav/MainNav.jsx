//css
import '../../assets/css/main-nav.css'
//hooks
import React , {useCallback, useEffect,useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import useDebounce from '../../hooks/useDebounce'
import { useSelector} from 'react-redux'

//components
import Primary from './Primary'
import Secondary from './Secondary'
import ChallengesSectionNav from '../../components/ChallengesSectionNav'

function MainNav() {
  const location = useLocation()
  const {isChallengesSectionNavInvisible} = useSelector(state => state.challengesSectionNavSlice)
  const [navbarHalfTransparent,setNavbarHalfTransparent] = useState(false)
 const removeNavbarHalfTransparent = useDebounce(()=> {
    setNavbarHalfTransparent(false)
 }, 1000)

  const navbarTransparentHandler = useCallback(()=> {
    setNavbarHalfTransparent(true)
    removeNavbarHalfTransparent()
  },[setNavbarHalfTransparent,removeNavbarHalfTransparent])

useEffect(()=>{
  if (location.pathname !== '/challenges')
  window.addEventListener('scroll', navbarTransparentHandler)
 return ()=>{
  window.removeEventListener('scroll',navbarTransparentHandler)
 }
},[location])
 
  return (
   <>
<nav className={`main-nav  ${(location.pathname ==="/" || navbarHalfTransparent) ? 'half-transparent':''} `} >
      <Primary />

     {
      location.pathname === '/' 
      ? <button className='signin-button positive button'><Link to='/signin'  >Sign in</Link></button>

      : location.pathname !== '/signin' && location.pathname !== '/signup' 
        &&
      <Secondary />
      }
     {
      isChallengesSectionNavInvisible &&  <ChallengesSectionNav />
     }
    
    </nav>
   </>
  )
}
export default MainNav
