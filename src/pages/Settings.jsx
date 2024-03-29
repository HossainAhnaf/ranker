//modules
import React from 'react'
import { Link,Outlet } from 'react-router-dom'

//components
import Icon from 'react-inlinesvg'
//svg
import profileSvg from '../assets/svg/profile.svg'
import passwordSvg from '../assets/svg/password.svg'
import notificationSvg from '../assets/svg/notification.svg'
import monitorSvg from '../assets/svg/monitor.svg'
//css
import '../assets/css/settings.css'
function Settings() {
  return (
    <section className='settings-section flex-cm center'>
      <div className="settings-group">
       <div className="heading flex-cm">
       <h1 className="title">Account</h1>
        <small className="description">Update your info to keep your account secure</small>
        </div> 
        <div className="settings-wrapper">
         <Link to="/name-and-contact-info" >    
          <div className="setting flex-rw">
            <div className="svgCont">
              <Icon src={profileSvg} />
            </div>
            <b>Name and contact information</b>
          </div>
          </Link>
         <Link to="/password-and-security" >
          <div className="setting flex-rw">
            <div className="svgCont">
              <Icon src={passwordSvg} />
            </div>
            <b>Password and security</b>
          </div>
          </Link>
        </div>
      </div>

      <div className="settings-group">
       <div className="heading flex-cm">
       <h1 className="title">Preferences</h1>
        <small className="description">Customize your experience</small>
        </div> 

        <div className="settings-wrapper">       
         <Link to="/notifications-preference" >  
          <div className="setting flex-rw">
            <div className="svgCont">
              <Icon src={notificationSvg} />
            </div>
            <b>Notifications</b>
          </div>
          </Link>
          <Link to="/display" >
          <div className="setting flex-rw">
            <div className="svgCont">
              <Icon src={monitorSvg} />
            </div>
            <b>Display</b>
          </div>
          </Link>

        </div>
      </div>

    </section>
  )
}

export default Settings
