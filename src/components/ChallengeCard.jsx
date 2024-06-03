//modules
import React from 'react'
import PropTypes from 'prop-types'
//components
import Icon from 'react-inlinesvg'
//svg
import pinSvg from '../assets/svg/pin.svg'
import tickSvg from '../assets/svg/tick.svg'
import closeSvg from '../assets/svg/close.svg'
//css
import '../assets/css/challenge-card.css'
import '../assets/css/mobile-large/challenge-card.css'

function ChallengeCard({ title, description, difficulty, pinned, id }) {
  const [isDetailsActive,setIsDetailsActive] = React.useState(false)
  const [progress,setProgress] = React.useState(0)

  const taskDivisitionClickHandler = ({currentTarget:checkbox})=>{
    checkbox.disabled = true
    checkbox.parentElement.classList.add("done")
    setProgress(progress + parseInt(checkbox.value))
  
  }
  const detailsToggleButtonClickHandler = ({currentTarget})=>{
  setIsDetailsActive(prev=> !prev)
  }
  return (
    <div className="challenge-card " datapinned={pinned.toString()}>
     <div className="header">
     <h4 className="title">{id}. {title}</h4>
     <div className="tags-wrapper flex-rw center">
        <small className={`difficulty ${difficulty}`}>{difficulty[0].toUpperCase() + difficulty.slice(1)}</small>
        {
          pinned &&
          <span className="pin-icon svgCont">
            <Icon src={pinSvg} />
          </span>
        }
      </div>
     </div>
    <div className={`main ${isDetailsActive ? 'active' : ''}`}>
      <div className="task-divisitions-wrapper">

      <label  className="task-divisition ">
          <input type="checkbox" onChange={taskDivisitionClickHandler} value="50"/>
          <small className="title">Lorem, ipsum dolor.</small>
          <small className="value-percentage" >+ 20%</small>
        </label>
          
        <label  className="task-divisition">
          <input type="checkbox" onChange={taskDivisitionClickHandler} value="50"/>
          <small className="title">Lorem, ipsum dolor.</small>
          <small className="value-percentage" >+ 20%</small>
        </label>

      </div>
    </div> 
    <div className="footer">
      <div className="left">
        <button className={`details-toggle-button button"  ${isDetailsActive ? 'active' : ''}`} onClick={detailsToggleButtonClickHandler}>
        <svg fill="currentColor"  viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>details-solid</title> <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM19,22H9a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Zm8-4H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Zm0-4H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z" class="clr-i-solid clr-i-solid-path-1"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
        </button>
        <div className={`complete-progressbar ${isDetailsActive ? 'active' : ''}`}>
          <span className="percent-text">{progress}%</span>
          <div style={{width:`${progress}%`}} className="progress"></div>
        </div>
      </div>
      <div className="right flex-rw center left"> 
        <button className="tick button svgCont noEffect">
          <Icon src={tickSvg} />
        </button>
        <button className="cross button svgCont noEffect">
          <Icon src={closeSvg} />
        </button>
      </div> 
    </div>
      



    </div>
  )
}

ChallengeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  difficulty: PropTypes.string,
  pinned: PropTypes.bool,
  id: PropTypes.number
}
export default ChallengeCard

