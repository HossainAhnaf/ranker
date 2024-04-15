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
function Notifications({ shortView }) {
  const navigate = useNavigate()

  const notificationsSectionRef = useRef(null)

  const notificationMoreOptionsWrapperRef = useRef(null)
  const [isNotificationMoreOptionsWrapperActive, setIsNotificationMoreOptionsWrapperActive] = useState(false)
  const currentActiveNotificationMoreButtonRef = useRef(null)
  const [notificationMoreOptionsWrapperOffset, setNotificationMoreOptionsWrapperOffset] = useState({
  top: 0,
  left: 0
 })

  const notificationMoreButtonClickHandler = ({ currentTarget:currentActiveMoreButton }, isUnread) => {
    // const moreButtons = document.querySelectorAll('.notifications-wrapper > .notification > .more-button.active')
    // moreButtons.forEach(el => el.classList.remove('active'))
   

   if (currentActiveMoreButton.classList.contains('active')) {
    console.log('two');

      currentActiveMoreButton.classList.remove('active')
      setIsNotificationMoreOptionsWrapperActive(false)
      currentActiveNotificationMoreButtonRef.current = null
    } else {
      console.log('three');

      currentActiveMoreButton.classList.add('active')
      setIsNotificationMoreOptionsWrapperActive(true)
      currentActiveNotificationMoreButtonRef.current = currentActiveMoreButton
      const { top, left } = currentActiveMoreButton.getBoundingClientRect()
      setNotificationMoreOptionsWrapperOffset({top,left})
      notificationMoreOptionsWrapperRef.current.onblur = ({ relatedTarget }) => {
       
        if (relatedTarget === null) {
        console.log('one');

        //   || relatedTarget === currentActiveMoreButton
          currentActiveMoreButton.classList.remove('active')
          setIsNotificationMoreOptionsWrapperActive(false)
          currentActiveNotificationMoreButtonRef.current = null
          console.log(currentActiveMoreButton);

        } else notificationMoreOptionsWrapperRef.current.focus()
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

  const notificationsSectionScrollHandler = (e) => {
    const { top,left } = currentActiveNotificationMoreButtonRef.current.getBoundingClientRect()
    const {bottom,height} = document.querySelector('.notification-more-options-wrapper').getBoundingClientRect()
    setNotificationMoreOptionsWrapperOffset({top,left})
    if (top - height <= -5 || bottom >= e.currentTarget.getBoundingClientRect().bottom) {
      currentActiveNotificationMoreButtonRef.current.classList.remove('active')
      setIsNotificationMoreOptionsWrapperActive(false)
      currentActiveNotificationMoreButtonRef.current = null
    } 
  } 

  useEffect(() => {
    if (shortView){
      if (isNotificationMoreOptionsWrapperActive)
      notificationsSectionRef.current.onscroll = notificationsSectionScrollHandler
       else 
       notificationsSectionRef.current.onscroll = null
         }

  },[isNotificationMoreOptionsWrapperActive])
  return (
    <>
     
      <section className={`notifications-section ${shortView ? 'short-view' : ''} flex-cm`} ref={notificationsSectionRef}>

        <nav className="flex-rw">
          <h1 className="heading">Notifications</h1>
          <div className="right flex-rw">
            <div className="filter-buttons-wrapper flex-rw">
              <button className="active  button">All</button>
              <button className="button">Unread</button>
            </div>
            {shortView
              ? <Link className="see-all-button button" to="/notifications">See all</Link>
              :
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

        <div className="notifications-wrapper flex-cm center">

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

      </section>
      
      <NotificationMoreOptionsWrapper isActive={isNotificationMoreOptionsWrapperActive} ref={notificationMoreOptionsWrapperRef} currentActiveNotificationMoreButtonRef={currentActiveNotificationMoreButtonRef} setIsNotificationMoreOptionsWrapperActive={setIsNotificationMoreOptionsWrapperActive}  offset={notificationMoreOptionsWrapperOffset} />
     
    </>
  )
}

export default Notifications

Notifications.defaultProps = {
  shortView: false
}