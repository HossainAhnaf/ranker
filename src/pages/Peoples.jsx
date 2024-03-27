//modules
import React, { useState } from 'react'
//fake
import {allUsers} from '../data/usersData.json'
//components
import UserLogo from '../components/UserLogo'
//css
import '../assets/css/peoples.css'
import { Link } from 'react-router-dom'
//users?q=hossain ovi
function Peoples() {
    const [usersData, setUserData] = useState(allUsers)
  return (
    <section className="peoples-section">
      <div className="users-short-info-wrapper flex-cm center">
     { usersData.map((userData,index)=>{
        return (
          <Link to={`/profile/${userData.username}`} key={index}> 
        <div className="user-short-info flex-cm">
          <div className="primary flex-rw center">
            <UserLogo logoSrc={userData.logoSrc} status={userData.status} level={userData.level} />
            <div className="info-wrapper flex-cm">
              <b className="name">{userData.name}</b>
               <small className={`status ${userData.status.toLocaleLowerCase()}`}>{userData.status}</small>
            </div>
            </div>
          <div className="secondery flex-cm">
           <small className="rank">Rank:{userData.rank}</small>
          </div>
       </div>
       </Link>
        )
      }) 
    } 
      </div>
    </section>
  )
}

export default Peoples
