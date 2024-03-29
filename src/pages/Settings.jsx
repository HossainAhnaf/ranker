//modules
import React from 'react'
//components
import Icon from 'react-inlinesvg'
//svg
import profileSvg from '../assets/svg/profile.svg'
//css
import '../assets/css/settings.css'
function Settings() {
  return (
    <section className='settings-section flex-rw center'>
      <div className="settings-group">
       <div className="heading flex-cm">
       <h1 className="title">Account</h1>
        <small className="description">Update your indo to keep your account secure</small>
        </div> 
        <div className="settings-wrapper">
          <div className="setting flex-rw">
            <div className="svgCont">
              <Icon src={profileSvg} />
            </div>
            <b>Name and contact information</b>
          </div>
          <div className="setting flex-rw">
            <div className="svgCont">
              <Icon src={profileSvg} />
            </div>
            <b>Password</b>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
