//css
import '../../assets/css/main-nav.css'
//hooks
import React , {useCallback, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import useDebounce from '../../hooks/useDebounce'
import { useSelector} from 'react-redux'

//components
import Primary from './Primary'
import Secondary from './Secondary'
import ChallengesSectionNav from '../../components/ChallengesSectionNav'

function MainNav() {
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
  window.addEventListener('scroll', navbarTransparentHandler)
 return ()=>{
  window.removeEventListener('scroll',navbarTransparentHandler)
 }
},[])

  return (
   <>

<nav className={`main-nav  ${navbarHalfTransparent ? 'half-transparent':''} `} >
      <Primary />

     {
      location.pathname === '/' 
      ? <button className='signin-button'>Sign in</button>

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
