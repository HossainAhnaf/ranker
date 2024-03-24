import React, { forwardRef } from 'react'
import defaultLogo from '../assets/img/user.jpeg'
import {rank} from '../data/userData.json'

const UserLogo = forwardRef(function UserLogo({logoSrc},ref) {
  
 
  return (
    <div className="logo-wrapper imgCont logoCont" ref={ref} style={{'borderColor':`var(--${rank.toLowerCase()}-color)`,"borderStyle": 'solid'}}>
    <img src={logoSrc || defaultLogo} />
     </div>
  )
})

export default UserLogo
