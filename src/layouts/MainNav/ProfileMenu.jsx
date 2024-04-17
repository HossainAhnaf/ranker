//modules
import React ,{useEffect,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { setTheme } from '../../store/slices/themeSlice'
import useActiveClassName from '../../hooks/useActiveClassName'

//components
import UserAvatar from "../../components/UserAvatar"
import MenuButton from "../../components/MenuButton"
import Icon from "react-inlinesvg"
//svg
import profileSvg from '../../assets/svg/profile.svg'
import achievementChallengeSvg from '../../assets/svg/achievement-challenge.svg'
import plusSvg from '../../assets/svg/plus(1).svg'
import notificationSvg from '../../assets/svg/notification.svg'
import peopleSvg from '../../assets/svg/people.svg'
import settingsSvg from '../../assets/svg/settings.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import moonSvg from '../../assets/svg/moon.svg'
import dropDownSvg from '../../assets/svg/drop-down.svg'
import tickSvg from "../../assets/svg/tick(1).svg"
import closeSvg from "../../assets/svg/close(1).svg"

function ProfileMenu({ isMenuOpen, setIsMenuOpen }) {
  const { name, username, avatar, status, level, xp } = useSelector(state => state.userSlice)
  const {theme} = useSelector(state => state.themeSlice) 
  const dispatch = useDispatch()

  const profileMenuRef = useRef(null)
  const appearanceMenuButtonRef = useRef(null)
   const ProfileMenuBlurHandler = ({relatedTarget}) => {
    if ( relatedTarget === null || (!relatedTarget.classList.contains('profile-button') && !profileMenuRef.current.contains(relatedTarget)))
      setIsMenuOpen(false)
    else{
      profileMenuRef.current.focus()
    }
   }
   useEffect(() => {
     if (isMenuOpen){
       profileMenuRef.current.focus()
     }
   },[isMenuOpen])
useEffect(() => {
  if (isMenuOpen === false)
 appearanceMenuButtonRef.current.open = false
},[isMenuOpen])
  return (
    <div className={`profile-menu ${isMenuOpen ? 'open' : ''} `} tabIndex='0' ref={profileMenuRef} onBlur={ProfileMenuBlurHandler} >
      <div className="primary flex-rw">
        <Link to={`/profile/${username}`} className="user-profile-short-view flex-cm button" >
          <div className="primary flex-rw center">
            <UserAvatar avatar={avatar} status={status} level={level} />
            <div className="username-wrapper flex-cm">
              <b className="name">{name}</b>
              <p className="username">@{username}</p>
              <small className={`status ${status}`}>{status}</small>
            </div>
          </div>
        </Link>
        <button className="hide-button svgCont" onClick={() => setIsMenuOpen(false)}>
          <Icon src={closeSvg} />
        </button>
      </div>
      <div className="secondary">     
        <div className="navigation-buttons-wrapper flex-cm center">
        
        <NavLink  className={(state)=>useActiveClassName(state,'button')} to={`/profile/${username}`}>
          <span className="svgCont" style={{transform:"scale(.7)"}}>
            <Icon src={profileSvg} />
          </span>
          <span className="name">Profile</span>
        </NavLink>
        <NavLink className={(state)=>useActiveClassName(state,'button')} to='/challenges'>
          <span className="svgCont">
            <Icon src={achievementChallengeSvg} />
          </span>
          <span className="name">Challenges</span>
        </NavLink>
       
        <NavLink className={(state)=>useActiveClassName(state,'button')} to='/notifications' >
          <span className="svgCont badge-wrapper">
            <Icon src={notificationSvg}  style={{transform:"scale(1.2)"}}/>
            <small className="badge">4</small>
          </span>
          <span className="name">Notifications</span>
        </NavLink>
        <NavLink className={(state)=>useActiveClassName(state,'button')} to='/peoples'>
          <span className="svgCont">
            <Icon src={peopleSvg} />
          </span> <span className="name">Peoples</span>
        </NavLink>
        </div>
        <hr />
        <div className="primary-buttons-wrapper flex-cm center">
        <NavLink className={(state)=>useActiveClassName(state,'button')} to='/create-new-challenge'>
          <span className="svgCont">
            <Icon src={plusSvg}  style={{transform:"scale(.9)"}}/>
          </span> <span className="name">Create new challenge</span>
        </NavLink>

        <details className="appearance-menu-button" ref={appearanceMenuButtonRef}>
          <summary className='flex-rw button'>
            <span className="svgCont appearance-icon">
              <Icon src={moonSvg} />
            </span>
            <span>Appearance</span>
            <span className='svgCont drop-down-icon'>
            <Icon src={dropDownSvg}/>
            </span>
           </summary>
        <span className={`option button ${theme === '' ? 'selected' :''}`} onClick={()=>dispatch(setTheme(''))}>
            System Default
              <Icon src={tickSvg}/>
          </span>
          <span className={`option button ${theme === 'theme-light' ? 'selected' :''}`} onClick={()=>dispatch(setTheme('theme-light'))}>
            Light
              <Icon src={tickSvg}/>
          </span>
          <span className={`option button ${theme === 'theme-dark' ? 'selected' :''}`} onClick={()=>dispatch(setTheme("theme-dark"))}>
            Dark
              <Icon src={tickSvg}/>
          </span>
        </details>
        <NavLink className={(state)=>useActiveClassName(state,'button')} to='/settings'>
          <span className="svgCont">
            <Icon src={settingsSvg} />
          </span> <span className="name">Settings</span>
        </NavLink>

        <Link to="/accounts/signin" className="logout-button button" >
            <span className="svgCont">
              <Icon src={logoutSvg} />
            </span>
            <span className="name">Log out</span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu
