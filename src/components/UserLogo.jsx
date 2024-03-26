//modules
import React, { forwardRef } from 'react'
import defaultLogo from '../assets/img/user.jpeg'
//css
import '../assets/css/user-logo.css'
const UserLogo = forwardRef(function UserLogo({logoSrc,status,level},ref) {
  return (
    <div className={`user-logo ${status.toLowerCase()} imgCont logoCont`} ref={ref} >
    <img src={logoSrc || defaultLogo} />
     <span className="level-badge">{level}</span>
     </div>
  )
})

export default UserLogo
