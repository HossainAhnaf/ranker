import React , {useState} from 'react'
import {Link, useOutletContext} from 'react-router-dom'
//components
import Icon from 'react-inlinesvg'
//svg
import googleSvg from '../../assets/svg/google.svg'
import facebookSvg from '../../assets/svg/facebook.svg'
function Account() {
  const  email = "abc@gmail.com"
  const [currentEmail, setCurrentEmail] = useState(email)

  const [editButtonClickHandler] = useOutletContext()
  const cancleButtonClickHandler = ({currentTarget},type) => {
    const info = currentTarget.parentElement.parentElement
     info.classList.remove('editable')
     if (type === 'email')
       setCurrentEmail(email)

  }
  return (
    <div className='outlet account'>
        <div className="info-group">
        <b className="group-name">Account Information</b>
        <div className="info-wrapper flex-cm center">
          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Email</p>
              <button className="edit-button"  onClick={editButtonClickHandler}>Edit</button>
            </div>
            <p className="value">{currentEmail}</p>
            <input className='value-field' type="email" placeholder='Email' onChange={({target})=>setCurrentEmail(target.value)} value={currentEmail} />
            <div className="buttons-wrapper flex-rw center">
              <button className="save-button positive">Save</button>
              <button className="cancel-button negitive" onClick={(e)=>cancleButtonClickHandler(e,'email')} >Cancel</button>
            </div>
          </div>
          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Password</p>
            </div>
            <Link className="link-button">Change Password</Link>
          </div>
        </div>
      </div>

      <div className="info-group ">
        <b className="group-name">Social Account</b>
        <div className="info-wrapper flex-cm center">
          <div className="info connection-type flex-cm center">
           <div className="name-wrapper flex-rw">
           <div className="platform flex-rw center">
              <div className="logo svgCont">
                <Icon src={googleSvg} />
              </div>
              <p className="name">Google</p>
            </div> 
            <button className="connect-disconnect-button">Connect</button>
            </div> 
            <p className="value">Not connected</p>
          </div>

          <div className="info connection-type flex-cm center">
           <div className="name-wrapper flex-rw">
           <div className="platform flex-rw center">
              <div className="logo svgCont">
                <Icon src={facebookSvg} />
              </div>
              <p className="name">Facebook</p>
            </div> 
            <button className="connect-disconnect-button">Connect</button>
            </div> 
            <p className="value">Not connected</p>
          </div>
        </div>
      </div>
      <button className="delete-account-button">Delete Account</button>
    </div>
  )
}

export default Account
