//modules
import React, { useEffect,useRef,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useDebounce from '../hooks/useDebounce'
import useIsMobile from '../hooks/useIsMobile'
//components
import Icon from 'react-inlinesvg'
//svg
import plusSvg from '../assets/svg/plus(1).svg'
//css
import '../assets/css/create-new-challenge-side-button.css'
function CreateNewChallengeSideButton() {
  const location = useLocation()
  const navigate = useNavigate()
  const [hidden, setHidden] = useState(false)
  const createNewChallengeSideButtonRef = useRef(null)
 
  const showFullButton = useDebounce((currentTarget,type) => {
    if (type === 'mouseenter'){
    createNewChallengeSideButtonRef.current.onmouseenter = null
    createNewChallengeSideButtonRef.current.focus()
     }
     if (currentTarget.classList.contains('active'))
      navigate('/create-new-challenge')
    else 
      currentTarget.classList.add('active')
  },100)
  const hideFullButton = () => {
    createNewChallengeSideButtonRef.current.classList.remove('active')
    if (!createNewChallengeSideButtonRef.current.onmouseenter) 
    createNewChallengeSideButtonRef.current.onmouseenter = ({currentTarget,type}) => showFullButton(currentTarget,type)
  }


  const hideShowFullButtonAnimation = () => {
    setInterval(() => {
    showFullButton(createNewChallengeSideButtonRef.current,'mouseenter')
      setTimeout(() => {
        hideFullButton()
        },6000)
    },1000 * 60 * 2.5)
   }



  useEffect(() => {
    if (location.pathname.startsWith('/create-new-challenge') || location.pathname === '/')
      setHidden(true)
    else
      setHidden(false)
  }, [location])


  
  useEffect(() => {
    createNewChallengeSideButtonRef.current.onmouseenter = ({currentTarget,type}) =>{
       showFullButton(currentTarget,type)
    }
    if (!useIsMobile() && document.cookie.includes('isUserAlreadyChallengesPageVisited'))
    hideShowFullButtonAnimation()
    
  },[])
  return (
   <button className={`create-new-challenge-side-button  ${hidden ? 'hidden' : ''} flex-rw`}
    onClick={({currentTarget,type})=>showFullButton(currentTarget,type)}
    onMouseLeave={hideFullButton}
     onBlur={hideFullButton}
     ref={createNewChallengeSideButtonRef}
     >
    <div className="background"></div>
    <span className="svgCont">
     <Icon src={plusSvg} />
     </span>
     <span className='text'>Create New Challenge</span>

   </button>
  )
}

export default CreateNewChallengeSideButton
