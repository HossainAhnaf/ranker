//modules
import React  from 'react'
import { useSelector } from 'react-redux'

//components
import UserAvatar from "../components/UserAvatar"
import Info from "../components/Info"  
//css
import '../assets/css/user-profile-short-view.css'
import '../assets/css/mobile-large/user-profile-short-view.css'

function UserProfileShortView() {

  const {name,avatar,status,level,xp} = useSelector(state=>state.userSlice)


  return (
    <div className="user-profile-short-view flex-cm center tooltip" >
    <div className="primary flex-rw center">
      <UserAvatar avatar={avatar} status={status} level={level} />
      <div className="username-wrapper flex-cm">
        <b className="username">{name}</b>
        <small className={`status ${status}`}>{status}</small>
      </div>
    </div>
    <div className="secondary">
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
