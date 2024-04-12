//modules
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useActiveClassName from '../../hooks/useActiveClassName'
//components
import Icon from 'react-inlinesvg'
//svg
import appLogo from '../../assets/svg/app-logo.svg'
import backSvg from '../../assets/svg/back.svg'

function Primary() {

  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  const { username } = useSelector(state => state.userSlice)



  const [title, setTitle] = useState('')

  const titles = {
    '/challenges': 'Challenges',
    '/create-new-challenge': 'Create New Challenge',
    '/notifications': 'Notifications',
    '/peoples': 'Peoples',
    '/settings': 'Settings',
    '/name-and-contact-info': 'Name and Contact Info',
    '/password-and-security': 'Password and Security',
    '/notifications-preference': 'Notifications Preference',
    '/display': 'Display',

  }
  const backButtonVisiblePathList = [
    '/name-and-contact-info',
    '/password-and-security',
    '/notifications-preference',
    '/display'
  ]

  const isBackButtonVisible = useCallback((path) => {
    if ((path.startsWith('/profile') && params.username !== username) || backButtonVisiblePathList.includes(path))
      return true
    else
      return false
  }, [params.username, username])

  useEffect(() => {

    if (location.pathname.startsWith('/profile'))
      setTitle(params.username)
    else setTitle(titles[location.pathname])
  }, [location.pathname, params.username])

  return (
    <div className="primary flex-rw ">

      <div className="site-brand" onClick={() => navigate('/')}>
        <span className="svgCont">
          <Icon src={appLogo} />
        </span>
          <h1 className="app-name" >
            <em>{import.meta.env.VITE_APP_NAME}</em>
          </h1>
      </div>
      <div className="navigation-buttons-wrapper flex-rw center">
        <NavLink className={useActiveClassName} to={`/profile/${username}`}>
          Profile
        </NavLink>
        <NavLink className={useActiveClassName} to='/challenges'>
          Challenges
        </NavLink>
        <NavLink className={useActiveClassName} to='/peoples'>
          Peoples
        </NavLink>

        {/* <Link to="/accounts/signin">
          <button className="logout-button">
            
              <span className="name">Log out</span>
            </button>
          </Link> */}
      </div>
    </div>
  )
}

export default Primary
