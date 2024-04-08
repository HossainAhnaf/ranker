//modules
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import useActiveClassName from '../hooks/useActiveClassName'
//components
import UserAvatar from '../components/UserAvatar'
import Icon from 'react-inlinesvg'
//svg
import profileSvg from '../assets/svg/profile.svg'
import settingsSvg from '../assets/svg/settings.svg'
import notificationSvg from '../assets/svg/notification.svg'
import securityShieldSvg from '../assets/svg/security-shield.svg'
//css
import '../assets/css/settings.css'
// import '../assets/css/mobile-large/settings.css'
function Settings() {
  const {avatar,name,username,status,level} = useSelector(state=>state.userSlice)
  
  return (
    <section className='settings-section'>
      <div className="header">
        <div className="background"></div>

        <div className="user-primary-info-wrapper flex-cm center">
          <UserAvatar avatar={avatar} status={status} level={level} />
          <div className="text-wrapper flex-cm center">
          <p className="name">{name}</p>
          <small className="username">@{username}</small>
          </div>
        </div>
      </div>
      <div className="navigation-buttons-wrapper flex-cm center">
        <NavLink to='' className={useActiveClassName}>
          <Icon src={profileSvg} />
          Basic info
          </NavLink>
        <NavLink to='account' className={useActiveClassName}>
          <Icon src={settingsSvg} />
          Account
          </NavLink>
        <NavLink to='privacy' className={useActiveClassName}>
          <Icon src={securityShieldSvg} />
          Privacy
          </NavLink>
        <NavLink to='notifications' className={useActiveClassName}>
          <Icon src={notificationSvg} />
          Notifications
          </NavLink>
    </div>
    </section>
  )
}

export default Settings
