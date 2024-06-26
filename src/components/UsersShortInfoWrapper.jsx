import React from 'react'
import { Link } from 'react-router-dom'
//components
import UserAvatar from './UserAvatar'
//css
import '../assets/css/users-short-info-wrapper.css'
import '../assets/css/mobile-large/users-short-info-wrapper.css'
function UsersShortInfoWrapper({userList}) {
  return (
    <div className="users-short-info-wrapper flex-rw center">
    {userList.map((user, index) => {
      return (
        <Link to={`/profile/${user.username}`} key={index} className='button'>
          <div className="user-short-info flex-rw">
              <UserAvatar avatar={user.avatar} status={user.status} level={user.level} />
              <div className="info-wrapper flex-cm">
                <b className="name">{user.name}</b>
                <small className="username">@{user.username}</small>
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
