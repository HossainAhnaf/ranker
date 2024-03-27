//modules
import React  from 'react'
import { useSelector } from 'react-redux'

//components
import UserLogo from "../components/UserLogo"
import Info from "../components/Info"  
//css
import '../assets/css/user-profile-short-view.css'
function UserProfileShortView() {

  const {name,logoSrc,status,level,xp} = useSelector(state=>state.userSlice)


  return (
    <div className="user-profile-short-view flex-cm center tooltip" >
    <div className="primary flex-rw center">
      <UserLogo logoSrc={logoSrc} status={status} level={level} />
      <div className="username-wrapper flex-cm">
        <b className="username">{name}</b>
        <small className={`status ${status}`}>{status}</small>
      </div>
    </div>
    <div className="secondery">
      <div className="progress-bar ">
        <div className="progress" style={{'--progress':(xp / 1000) * 100 + '%' }} />
      
      </div>
    </div>
    <span className="short-info tooltip-bottom tooltiptext flex-cm center">
        <Info name='Level' value={`${level} / 10`} />
        <Info name='Xp' value={`${xp} / 1000`} />
        </span>
  </div>
  )
}

export default UserProfileShortView
