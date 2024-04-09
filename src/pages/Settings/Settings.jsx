//modules
import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import useActiveClassName from '../../hooks/useActiveClassName'
//components
import UserAvatar from '../../components/UserAvatar'
import Icon from 'react-inlinesvg'
//svg
import profileSvg from '../../assets/svg/profile.svg'
import settingsSvg from '../../assets/svg/settings.svg'
import notificationSvg from '../../assets/svg/notification.svg'
import securityShieldSvg from '../../assets/svg/security-shield.svg'
import hamburgerSvg from '../../assets/svg/hamburger.svg'
import dropDownSvg from '../../assets/svg/drop-down.svg'
//css
import '../../assets/css/settings.css'
// import '../assets/css/mobile-large/settings.css'
function Settings() {
  const {pathname} = useLocation()
  const {avatar,name,username,status,level} = useSelector(state=>state.userSlice)
  const [isContentActive, setIsContentActive] = useState(false)
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
     <div className="main-content">
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
        <NavLink to='notifications' className={useActiveClassName} datalarge='true'>
          <Icon src={notificationSvg} />
          Notifications
          </NavLink>
    </div>
    <div className={`content ${isContentActive ? 'active' : ''}`}>
       <button className="content-show-button flex-rw center">
         <Icon src={dropDownSvg} />
       </button>
       <div className="header flex-rw">
          <button className="hamburger button svgCont">
            <Icon src={hamburgerSvg} />
          </button>
          <div className="drop-down-icon svgCont">
            <Icon src={dropDownSvg} />
          </div>
          <h2 className="heading">{pathname}</h2>
       </div>
       <div className="outlet-wrapper">
        <Outlet/>
       </div>
    </div>    
    </div> 

    </section>
  )
}

export default Settings
