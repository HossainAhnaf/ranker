//modules
import React, { forwardRef } from 'react'
import defaultAvatar from '../assets/img/user.jpeg'
//css
import '../assets/css/user-avatar.css'
const UserAvatar = forwardRef(function UserAvatar({className,avatar,status,level},ref) {
  return (
    <div className={`user-avatar ${className ? className : ''} ${status.toLowerCase()} imgCont logoCont`} ref={ref} >
    <img src={avatar || defaultAvatar} />
     <span className="level-badge">{level}</span>
     </div>
  )
})

export default UserAvatar
