//modules
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//pages
import Notifications from '../../pages/Notifications'
//components
import ProfileMenu from './ProfileMenu'
import UserAvatar from '../../components/UserAvatar'
import Icon from 'react-inlinesvg'
//svg
import notificationSvg from '../../assets/svg/notification.svg'
function Secondary() {
  const dispatch = useDispatch()
  const location = useLocation()
  const isLoggedIn = true
  const { avatar, status, level } = useSelector(state => state.userSlice)
  const [isNotificationsShortViewVisible, setIsNotificationsShortViewVisible] = useState(false)
 const [isMenuOpen,setIsMenuOpen] = useState(false)

  const showNotificationsShortView = () => {
    if (location.pathname !== '/notifications')
      setIsNotificationsShortViewVisible(!isNotificationsShortViewVisible)
  }
  useEffect(() => {
    if (location.pathname === '/notifications')
      setIsNotificationsShortViewVisible(false)
  }, [location])
  return (
    <>
      <div className="secondary flex-rw" >
        {isLoggedIn
         ? <>
           <button className={`notification-button ${(isNotificationsShortViewVisible || location.pathname === '/notifications') ? 'active' : ''} badge-wrapper svgCont`} onClick={showNotificationsShortView}>
            <Icon src={notificationSvg} />
            <small className="badge">4</small>
          </button>
        <div className="profile-button-wrapper">
        <button className="profile-button" onClick={() => setIsMenuOpen(true) }>
          <UserAvatar avatar={avatar} status={status} level={level} />
        </button>

          <ProfileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>        
        </div>
        
        </>
          : <button className='signin-button positive button'><Link to='/signin'  >Sign in</Link></button>

        }
      </div>
      {isNotificationsShortViewVisible &&
        <Notifications shortView={true} />
      }
    </>
  )
}

export default Secondary
