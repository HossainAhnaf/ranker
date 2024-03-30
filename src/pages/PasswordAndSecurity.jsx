//modules
import React from 'react'
//components
import Icon from 'react-inlinesvg'
//svg
import closeSvg from '../assets/svg/close(1).svg'
//css
import '../assets/css/password-security.css'
function PasswordAndSecurity() {
  return (
    <div className="password-and-security">
      <div className="group flex-cm center">
        <h1 className="title">Login</h1>
        <div className="security-buttons-wrapper flex-cm center">
          <button className="security-button button flex-rw">
            <div className="icon-side flex-rw">
              <div className="svgCont">
              <Icon src={closeSvg} />
              </div>
            </div>
            <div className="text-side flex-cm">
              <b>Change password</b>
              <small>its a good idea to use a strong password that you can remember</small>
            </div>
            <div className="chevron-wrapper">
              <span className="chevron right"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordAndSecurity
