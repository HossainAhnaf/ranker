//modules
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import fakeNotificationsData from '../data/notificationsData.json'
//components
import Icon from 'react-inlinesvg'
//svg
import settingsSvg from '../assets/svg/settings.svg'
import growthSvg from '../assets/svg/growth.svg'
import securitySvg from '../assets/svg/security-shield.svg'
import handMikeSvg from '../assets/svg/hand-mike.svg'
import moreSvg from '../assets/svg/more.svg'
import tickSvg from '../assets/svg/tick(1).svg'
import removeSvg from '../assets/svg/remove.svg'
import removeAllSvg from '../assets/svg/remove-all.svg'

//css
import '../assets/css/notifications.css'
import '../assets/css/mobile-large/notifications.css'
function Notifications({shortView}) {
  const navigate = useNavigate()

  const [notificationsData, setNotificationsData] = useState(fakeNotificationsData)
  const moreButtonClickHandler = (e) => {
    e.stopPropagation()
    e.currentTarget.classList.toggle('active')
  }

  const notificationClickHandler = ({target,currentTarget},url) => {
    // const moreButton = currentTarget.querySelector('.more-button')
    //  const moreOptionsWrapper = currentTarget.querySelector('.more-options-wrapper') 
    // if(target !==  moreButton && target !== moreOptionsWrapper && !moreOptionsWrapper.contains(target) && !moreButton.contains(target)){
    // navigate(url)
    // }
  }
  return (
    <section className={`notifications-section ${shortView ? 'short-view' : ''} flex-cm`}>
      <nav className="flex-rw">
        <div className="filter-buttons-wrapper flex-rw">
          <button className="active  button">All</button>
          <button className="button">Unread</button>
        </div>
        <div className="secondary flex-rw">
        { shortView
        ? <Link className="see-all-button button" to="/notifications">See all</Link>
        :
        <>
         <button className="more-button button svgCont" onClick={moreButtonClickHandler}>
              <Icon src={moreSvg} />
          </button>

          <div className="more-options-wrapper">
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
                <Link to="/notifications-preference">Notifications Settings</Link>
              </button>
            </div>
        </>
        }
        </div>
      </nav>
        
             <div className="notifications-wrapper flex-cm center">        
                      <div className={`notification announcement  flex-rw `}  >
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
                        <button className="more-button button " onClick={moreButtonClickHandler}>
                          <Icon src={moreSvg} />
                        </button>
                        <div className="more-options-wrapper">
                          <button className="option mark-as-read-button button ">
                            <div className="svgCont">
                              <Icon src={tickSvg} />
                            </div>
                            <p> Mark as read </p>
                          </button>
                          <button className="option button">
                            <div className="svgCont">
                              <Icon src={removeSvg} />
                            </div>
                            <p>Remove this notification</p>
                          </button>
                          <button className="option button">
                            <div className="svgCont">
                              <Icon src={removeAllSvg} />
                            </div>
                            <p>Turn of these notifications</p>
                          </button>
                        </div>
                      </div>
                 

              </div>
     
    </section>
  )
}
 
export default Notifications

Notifications.defaultProps = {
  shortView: false
}