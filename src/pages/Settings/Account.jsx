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
    const content = currentTarget.parentElement.parentElement
     content.classList.remove('editable')
     if (type === 'email')
       setCurrentEmail(email)

  }
  return (
    <div className='outlet account'>
        <section>
        <b className="section-name">Account Information</b>
        <div className="content-wrapper flex-cm center">
        <div className="content">
            <p className="title">Email</p>
            <div className="value-wrapper">
              <p className="value">{currentEmail}</p>
              <input className='value-field' type="text" placeholder='username' onChange={({target})=>setCurrentEmail(target.value)} value={currentEmail}  />
              <div className="buttons-wrapper flex-rw center">
                <button className="save-button positive">Save</button>
                <button className="cancel-button negitive" onClick={(e)=>cancleButtonClickHandler(e,'email')} >Cancel</button>
              </div>
            </div>
            <button className="edit-button" onClick={editButtonClickHandler}>Edit</button>
          </div>

          <div className="content">
              <p className="title">Password</p>
              <div className="value-wrapper">
                <p className="value">********</p>
              </div>
            <Link className="edit-button">Change Password</Link>
          </div>

        </div>
      </section>

      <section>
        <b className="section-name">Social Account</b>
        <div className="content-wrapper flex-cm center">
          <div className="content connect-type">
          <div className="platform flex-rw center">
              <div className="logo svgCont">
                <Icon src={googleSvg} />
              </div>
              <p className="title">Google</p>
            </div> 
           <div className="value-wrapper">
            <p className="value connected">connected</p>
            </div> 
            <button className="connect-disconnect-button">Disconnect</button>

          </div>

          <div className="content connect-type">
          <div className="platform flex-rw center">
              <div className="logo svgCont">
                <Icon src={facebookSvg} />
              </div>
              <p className="title">Facebook</p>
            </div> 
           <div className="value-wrapper">
            <p className="value not-connected">Not connected</p>
            </div> 
            <button className="connect-disconnect-button">Connect</button>

          </div>
        </div>
      </section>
      <button className="delete-account-button">Delete Account</button>
    </div>
  )
}

export default Account
