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
function Notifications({shortView}) {
  const navigate = useNavigate()

  const [notificationsData, setNotificationsData] = useState(fakeNotificationsData)
  const moreButtonClickHandler = ({ currentTarget }) => {
    currentTarget.classList.toggle('active')
  }

  const notificationClickHandler = ({target,currentTarget},url) => {
    const moreButton = currentTarget.querySelector('.more-button')
     const moreOptionsWrapper = currentTarget.querySelector('.more-options-wrapper') 
    if(target !==  moreButton && target !== moreOptionsWrapper && !moreOptionsWrapper.contains(target) && !moreButton.contains(target)){
    navigate(url)
    }
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


      {
        Object.keys(notificationsData).map((key, groupIndex) => {
          return (
            <div className="group flex-cm center" key={groupIndex}>
              <b className="date">{key}</b>
              <div className="notifications-wrapper flex-cm center">
                {
                  notificationsData[key].map(({ title, description, type, url,isReaded }, index) => {
                    return (
                      <div className={`notification ${type} ${isReaded ? '' : 'unread'} flex-rw `}   onClick={(e)=>notificationClickHandler(e,url)} key={index} >
                        <div className="icon-wrapper">
                          <div className="svgCont">
                            {type === 'progress' && <Icon src={growthSvg} />}
                            {type === 'security' && <Icon src={securitySvg} />}
                            {type === 'announcement' && <Icon src={handMikeSvg} />}
                          </div>
                        </div>
                        <div className="message-wrapper flex-cm">
                          <b className="title">{title}</b>
                          <small className="description">{description}</small>
                          
                        </div>
                        <button className="more-button button svgCont" onClick={moreButtonClickHandler}>
                          <Icon src={moreSvg} />
                        </button>
                        <div className="more-options-wrapper">
                          <button className="option button">
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
                    )
                  })

                }
              </div>
            </div>
          )
        })


      }
    </section>
  )
}
 
export default Notifications

Notifications.defaultProps = {
  shortView: false
}