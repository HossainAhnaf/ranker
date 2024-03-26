//modules
import React, { useState } from 'react'
import userDummyData from '../data/userData.json'
//components
import UserLogo from '../components/UserLogo'
//css
import '../assets/css/peoples.css'
import { Link } from 'react-router-dom'
function Peoples() {
    const [userData, setUserData] = useState(userDummyData)
  return (
    <section className="peoples-section">
      <div className="users-short-info-wrapper flex-cm center">
       
       <Link to='/'>
        <div className="user-short-info flex-cm">
          <div className="primary flex-rw center">
            <UserLogo logoSrc={userData.logoSrc} status={userData.status} level={userData.level} />
            <div className="info-wrapper flex-cm">
              <b className="username">{userData.username}</b>
               <small className={`status ${userData.status.toLocaleLowerCase()}`}>{userData.status}</small>
            </div>
            </div>
          <div className="secondery flex-cm">
           <small className="rank">Rank:{userData.rank}</small>
          </div>
       </div>
       </Link>
      </div>
    </section>
  )
}

export default Peoples
