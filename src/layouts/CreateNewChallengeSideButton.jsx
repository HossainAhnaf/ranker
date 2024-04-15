//modules
import React, { useEffect,useRef,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useDebounce from '../hooks/useDebounce'

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
    if (type === 'mouseenter')
    createNewChallengeSideButtonRef.current.onmouseenter = null


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
  useEffect(() => {
    if (location.pathname === '/create-new-challenge')
      setHidden(true)
    else
      setHidden(false)
  }, [location])
  useEffect(() => {
    createNewChallengeSideButtonRef.current.onmouseenter = ({currentTarget,type}) =>{
       showFullButton(currentTarget,type)
    }
  },[])
  return (
   <button className={`create-new-challenge-side-button ${hidden ? 'hidden' : ''} flex-rw`}
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
