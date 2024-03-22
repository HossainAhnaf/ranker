//modules
import React , { useState } from 'react'
import userDummyData from '../data/userData.json'

//components
import UserLogo from "../components/UserLogo"
import Info from "../components/Info"  
//css
import '../assets/css/user-profile-short-view.css'
function UserProfileShortView() {


  const [userData, setUserData] = useState(userDummyData)

  return (
    <div className="user-profile-short-view flex-cm center tooltip" >
    <div className="primary flex-rw center">
      <UserLogo logoSrc={userData.logoSrc} />
      <div className="username-wrapper flex-cm">
        <b className="username">{userData.username}</b>
        <small className={`rank ${userData.rank}`}>{userData.rank}</small>
      </div>
    </div>
    <div className="secondery">
      <div className="progress-bar ">
        <div className="progress" style={{'--progress':(userData.xp / 1000) * 100 + '%' }} />
      
      </div>
    </div>
    <span className="short-info tooltip-bottom tooltiptext flex-cm center">
        <Info name='Level' value={`${userData.level} / 10`} />
        <Info name='Xp' value={`${userData.xp} / 1000`} />
        </span>
  </div>
  )
}

export default UserProfileShortView
