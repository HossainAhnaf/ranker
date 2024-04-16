//modules
import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//components
import NotificationMoreOptionsWrapper from './NotificationMoreOptionsWrapper'
import Icon from 'react-inlinesvg'
//svg
import settingsSvg from '../../assets/svg/settings.svg'
import growthSvg from '../../assets/svg/growth.svg'
import securitySvg from '../../assets/svg/security-shield.svg'
import handMikeSvg from '../../assets/svg/hand-mike.svg'
import moreSvg from '../../assets/svg/more.svg'
import tickSvg from '../../assets/svg/tick(1).svg'
import removeSvg from '../../assets/svg/remove.svg'
import removeAllSvg from '../../assets/svg/remove-all.svg'

//css
import '../../assets/css/notifications.css'
import '../../assets/css/mobile-large/notifications.css'
function Notifications({ shortView,isNotificationOpen,setIsNotificationOpen }) {
  const navigate = useNavigate()

  const notificationsSectionRef = useRef(null)
  const notificationsWrapperRef = useRef(null)

  const notificationMoreOptionsWrapperRef = useRef(null)
  const [isNotificationMoreOptionsWrapperClassList, setIsNotificationMoreOptionsWrapperClassList] = useState([])
  const currentActiveNotificationMoreButtonRef = useRef(null)
  const [notificationMoreOptionsWrapperOffset, setNotificationMoreOptionsWrapperOffset] = useState({
  top: 0,
  left: 0
 })
 const hideNotificationMoreOptionsWrapper = ()=>{
  currentActiveNotificationMoreButtonRef.current?.classList.remove('active')
  setIsNotificationMoreOptionsWrapperClassList([])
  currentActiveNotificationMoreButtonRef.current = null
 }
  const notificationMoreButtonClickHandler = ({ currentTarget:currentActiveMoreButton }, isUnread) => {  
    if (currentActiveMoreButton.classList.contains('active')) 
    hideNotificationMoreOptionsWrapper()
    else {
      currentActiveMoreButton.classList.add('active')
      setIsNotificationMoreOptionsWrapperClassList(['active', isUnread ? 'unread' : ''])
      const { top, left } = currentActiveMoreButton.getBoundingClientRect()
      setNotificationMoreOptionsWrapperOffset({top, left})
      currentActiveNotificationMoreButtonRef.current = currentActiveMoreButton
 
      notificationMoreOptionsWrapperRef.current.onblur = ({ relatedTarget }) => {
       
        if (!notificationMoreOptionsWrapperRef.current.contains(relatedTarget) && (relatedTarget?.classList.contains('more-button') && relatedTarget !== currentActiveMoreButton) ) 
        hideNotificationMoreOptionsWrapper()
         else notificationMoreOptionsWrapperRef.current.focus()
      }
    }
  }

  const isValidClick = (e) => {
    const moreButton = e.currentTarget.querySelector('.more-button')
    if (e.target !== moreButton && !moreButton.contains(e.target))
      return true
    return false
  }

  const notificationClickHandler = (e, url) => {
    if (isValidClick(e))
      navigate(url)
  }
  const notificationTouchStartHandler = (e) => {
    if (isValidClick(e))
      e.currentTarget.classList.add('active')
  }


  const navMoreButtonClickHandler = ({ currentTarget }) => {
    if (currentTarget.classList.contains('active'))
      currentTarget.classList.remove('active')
    else {
      currentTarget.classList.add('active')
      currentTarget.nextElementSibling.focus()
      currentTarget.nextElementSibling.addEventListener('blur', ({ relatedTarget }) => {
        if (relatedTarget === null) {
          currentTarget.classList.remove('active')
        } else
          currentTarget.nextElementSibling.focus()
      })
    }
  }

  const notificationsWrapperScrollHandler = (e) => {
    const { top,left } = currentActiveNotificationMoreButtonRef.current.getBoundingClientRect()
    const {bottom,height} = notificationMoreOptionsWrapperRef.current.getBoundingClientRect()
    setNotificationMoreOptionsWrapperOffset({top,left})
    if (top - height <= -5 || bottom >= e.currentTarget.getBoundingClientRect().bottom) {
      currentActiveNotificationMoreButtonRef.current.classList.remove('active')
      setIsNotificationMoreOptionsWrapperClassList([])
      currentActiveNotificationMoreButtonRef.current = null
    } 
  } 
  const notificationsSectionBlurHandler = ({ relatedTarget }) => {
    if (relatedTarget === null){
      setIsNotificationOpen(false)
      hideNotificationMoreOptionsWrapper()
    }
    else
      notificationsSectionRef.current.focus()
  }
  useEffect(() => {
    if (shortView){
      if (isNotificationMoreOptionsWrapperClassList.includes('active')){
      notificationsWrapperRef.current.onscroll = notificationsWrapperScrollHandler
    }else 
     notificationsWrapperRef.current.onscroll = null
     
     if (isNotificationOpen)
     notificationsSectionRef.current.focus()
     
     
     }

  },[isNotificationOpen,isNotificationMoreOptionsWrapperClassList])
  return (
    <>
     
      <section className={`notifications-section ${shortView ? 'short-view' : ''} ${isNotificationOpen ? 'active' : ''} flex-cm`} ref={notificationsSectionRef} tabIndex='0' onBlur={notificationsSectionBlurHandler}>

        <nav className="flex-rw">
          <h1 className="heading">Notifications</h1>
          <div className="right flex-rw">
            <div className="filter-buttons-wrapper flex-rw">
              <button className="active  button">All</button>
              <button className="button">Unread</button>
            </div>
            { !shortView &&
              <>
                <button className="more-button button svgCont" onClick={navMoreButtonClickHandler}>
                  <Icon src={moreSvg} />
                </button>

                <div className="more-options-wrapper" tabIndex='0'>
                  <button className="option button">
                    <div className="svgCont">
                      <Icon src={tickSvg} />
                    </div>
                    <p> Mark all as read </p>
                  </button>
                  <button className="option button">
                    <div className="svgCont">
                      <Icon src={settingsSvg} />
                    </div>
                    <Link to="/settings/notifications">Notifications Settings</Link>
                  </button>
                </div>
                </>
     }
          </div>
        </nav>

        <div className="notifications-wrapper flex-cm " ref={notificationsWrapperRef}>

          <div className={`notification announcement  flex-rw `} onClick={(e) => notificationClickHandler(e, '/')} onTouchStart={notificationTouchStartHandler} onTouchEnd={(e) => e.currentTarget.classList.remove('active')}>
            <div className="icon-wrapper">
              <div className="svgCont">
                <Icon src={handMikeSvg} />
              </div>
            </div>
            <div className="message-wrapper flex-cm">
              <b className="type">Announcement</b>
              <small className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quos quia repudiandae voluptates nihil ipsam sunt in esse nostrum assumenda!</small>
              <small className='date'>April 10, 2024 4:03 PM</small>
            </div>
            <button className="more-button button svgCont" onClick={notificationMoreButtonClickHandler}>
              <Icon src={moreSvg} />
            </button>

          </div>
          <div className={`notification announcement  flex-rw `} onClick={(e) => notificationClickHandler(e, '/')} onTouchStart={notificationTouchStartHandler} onTouchEnd={(e) => e.currentTarget.classList.remove('active')}>
            <div className="icon-wrapper">
              <div className="svgCont">
                <Icon src={handMikeSvg} />
              </div>
            </div>
            <div className="message-wrapper flex-cm">
              <b className="type">Announcement</b>
              <small className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quos quia repudiandae voluptates nihil ipsam sunt in esse nostrum assumenda!</small>
              <small className='date'>April 10, 2024 4:03 PM</small>
            </div>
            <button className="more-button button svgCont" onClick={notificationMoreButtonClickHandler}>
              <Icon src={moreSvg} />
            </button>

          </div>

        </div>
      { 
      shortView &&
       <div className="bottom-buttons-container flex-rw">
        <Link className="settings-button flex-rw center button" to="/settings/notifications">
          <Icon src={settingsSvg} />
        </Link>

        <Link className="see-all-button button" to="/notifications">See all</Link>
       </div>
       }
      </section>
      
      <NotificationMoreOptionsWrapper ref={notificationMoreOptionsWrapperRef}  classList={isNotificationMoreOptionsWrapperClassList}  offset={notificationMoreOptionsWrapperOffset} />
     
    </>
  )
}

export default Notifications

Notifications.defaultProps = {
  shortView: false
}