import React from 'react'
import { Link } from 'react-router-dom'
//components
import UserLogo from './UserLogo'
//css
import '../assets/css/users-short-info-wrapper.css'
function UsersShortInfoWrapper({userList}) {
  return (
    <div className="users-short-info-wrapper flex-cm center">
    {userList.map((user, index) => {
      return (
        <Link to={`/profile/${user.username}`} key={index}>
          <div className="user-short-info flex-rw">
              <UserLogo logoSrc={user.logoSrc} status={user.status} level={user.level} />
              <div className="info-wrapper flex-cm">
                <b className="name">{user.name}</b>
                <small className="rank">Rank:{user.rank}</small>
              </div>
          </div>
        </Link>
      )
    })
    }
  </div>
  )
}

export default UsersShortInfoWrapper


// <div className="user-short-info flex-cm">
// <div className="primary flex-rw center">
//   <UserLogo logoSrc={user.logoSrc} status={user.status} level={user.level} />
//   <div className="info-wrapper flex-cm">
//     <b className="name">{user.name}</b>
//     <small className={`status ${user.status.toLocaleLowerCase()}`}>{user.status}</small>
//   </div>
// </div>
// <div className="secondary flex-cm">
//   <small className="rank">Rank:{user.rank}</small>
// </div>
// </div>