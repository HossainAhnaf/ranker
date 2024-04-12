//modules
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import useActiveClassName from '../../hooks/useActiveClassName'
//components
import UserAvatar from "../../components/UserAvatar"
import Icon from "react-inlinesvg"
//svg
import profileSvg from '../../assets/svg/profile.svg'
import achievementChallengeSvg from '../../assets/svg/achievement-challenge.svg'
import plusSvg from '../../assets/svg/plus(1).svg'
import notificationSvg from '../../assets/svg/notification.svg'
import peopleSvg from '../../assets/svg/people.svg'
import settingsSvg from '../../assets/svg/settings.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import closeSvg from "../../assets/svg/close(1).svg"
function ProfileMenu({ isMenuOpen, setIsMenuOpen }) {
  const { name, username, avatar, status, level, xp } = useSelector(state => state.userSlice)

  return (
    <div className={`profile-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="primary flex-rw">
        <Link to={`/profile/${username}`} className="user-profile-short-view flex-cm" >
          <div className="primary flex-rw center">
            <UserAvatar avatar={avatar} status={status} level={level} />
            <div className="username-wrapper flex-cm">
              <b className="name">{name}</b>
              <p className="username">@{username}</p>
              <small className={`status ${status}`}>{status}</small>
            </div>
          </div>
        </Link>
        <button className="hide-button svgCont" onClick={() => dispatch(hideSideNavigationBar())}>
          <Icon src={closeSvg} />
        </button>
      </div>
      <div className="secondary">
        <div className="primary-buttons-wrapper flex-cm center">
        <NavLink className={useActiveClassName} to='/create-new-challenge'>
          <span className="svgCont">
            <Icon src={plusSvg} />
          </span> <span className="name">Create new challenge</span>
        </NavLink>
        <NavLink className={useActiveClassName} to='/settings'>
          <span className="svgCont">
            <Icon src={settingsSvg} />
          </span> <span className="name">Settings</span>
        </NavLink>
        <Link to="/accounts/signin" className="logout-button" >
            <span className="svgCont">
              <Icon src={logoutSvg} />
            </span>
            <span className="name">Log out</span>
        </Link>
        </div>
        <div className="navigation-buttons-wrapper flex-cm center">
        <NavLink className={useActiveClassName} to={`/profile/${username}`}>
          <span className="svgCont">
            <Icon src={profileSvg} />
          </span>
          <span className="name">Profile</span>
        </NavLink>
        <NavLink className={useActiveClassName} to='/challenges'>
          <span className="svgCont">
            <Icon src={achievementChallengeSvg} />
          </span>
          <span className="name">Challenges</span>
        </NavLink>
       
        <NavLink className={useActiveClassName} to='/notifications'>
          <span className="svgCont badge-wrapper">
            <Icon src={notificationSvg} />
            <small className="badge">4</small>
          </span>
          <span className="name">Notifications</span>
        </NavLink>
        <NavLink className={useActiveClassName} to='/peoples'>
          <span className="svgCont">
            <Icon src={peopleSvg} />
          </span> <span className="name">Peoples</span>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu
