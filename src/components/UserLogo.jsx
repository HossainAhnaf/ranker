import React, { forwardRef } from 'react'
import defaultLogo from '../assets/img/user.jpeg'

const UserLogo = forwardRef(function UserLogo({logoSrc},ref) {
    return (
    <div className="logo-wrapper imgCont logoCont" ref={ref}>
    <img src={logoSrc || defaultLogo} />
     </div>
  )
})

export default UserLogo
