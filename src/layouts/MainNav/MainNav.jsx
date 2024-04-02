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
  var ok = true
  const [navbarHalfTransparent,setNavbarHalfTransparent] = useState(false)
 const removeNavbarHalfTransparent = useDebounce(()=> {
    setNavbarHalfTransparent(false)
 }, 1000)
  
  const navbarTransparentHandler = ()=> {
    console.log(ok);
   if (ok){ 
    setNavbarHalfTransparent(true)
    removeNavbarHalfTransparent()
   }
  }
 useEffect(()=>{
   if (location.pathname === '/challenges'){
   ok = false
   console.log("aise"); 
  }
  },[location])

useEffect(()=>{
  window.addEventListener('scroll', navbarTransparentHandler)
 return ()=>{
  window.removeEventListener('scroll',navbarTransparentHandler)
 }
},[])
 
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
