//modules 
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//components
import Icon from 'react-inlinesvg'
//svg
import tickSvg from '../assets/svg/tick(1).svg'
import closeSvg from '../assets/svg/close(1).svg'
import pencilSvg from '../assets/svg/pencil.svg'
//css
import '../assets/css/name-and-contact-info.css'
function NameAndContactInfo() {

  const { name } = useSelector(state => state.userSlice)
  const email = 'example0011@gmail.com'
  const phone = '01234567890'
  const [currentEmail, setCurrentEmail] = useState(email)
  const [currentPhone, setCurrentPhone] = useState(phone)
  const [currentName, setCurrentName] = useState(name)

  const [isNameInputDisabled, setIsNameInputDisabled] = useState(true)
  const [isEmailInputDisabled, setIsEmailInputDisabled] = useState(true)
  const [isPhoneInputDisabled, setIsPhoneInputDisabled] = useState(true)

  const editButtonClickHandler = (currentTarget, type) => {
    if (type === 'name')
      setIsNameInputDisabled(false)
    else if (type === 'email')
      setIsEmailInputDisabled(false)
    else if (type === 'phone')
      setIsPhoneInputDisabled(false)
    currentTarget.parentElement.querySelector('.value-input').focus()

  }

  const saveButtonClickHandler = (type) => {
    if (type === 'name')
      setIsNameInputDisabled(true)
    else if (type === 'email')
      setIsEmailInputDisabled(true)
    else if (type === 'phone')
      setIsPhoneInputDisabled(true)

  }

  return (

    <div className='name-and-contact-info'>
      <div className="info-wrapper flex-cm center">
        <div className="info flex-cm" >
          <p className="name">Name</p>
          <div className="value-wrapper flex-rw">
            <input id='name' className='value-input' type="text" value={currentName} onChange={({ target }) => setCurrentName(target.value)} maxLength={25} disabled={isNameInputDisabled} />
            <label htmlFor="name" className="value-edit-button button svgCont" onClick={({ currentTarget }) => editButtonClickHandler(currentTarget, 'name')}>
              <Icon src={pencilSvg} />
            </label>
            <div className="button-wrapper flex-rw center">
              <button className="save-button button svgCont" onClick={() => saveButtonClickHandler('name')}>
                <Icon src={tickSvg} />
              </button>
              <button className="close-button button svgCont" onClick={() => setIsNameInputDisabled(true)} >
                <Icon src={closeSvg} />
              </button>
            </div>

          </div>
        </div>
        <div className="info flex-cm ">
          <p className="name">Email address</p>
          <div className="value-wrapper flex-rw">
            <input id='email' className='value-input' type="email" value={currentEmail} onChange={({ target }) => setCurrentEmail(target.value)} disabled={isEmailInputDisabled} />
            <label htmlFor='email' className="value-edit-button button svgCont" onClick={({ currentTarget }) => editButtonClickHandler(currentTarget, 'email')}>
              <Icon src={pencilSvg} />
            </label>
            <div className="button-wrapper flex-rw center">
              <button className="save-button button svgCont" onClick={()=>saveButtonClickHandler('email')} >
                <Icon src={tickSvg} />
              </button>
              <button className="close-button button svgCont" onClick={() => setIsEmailInputDisabled(true)}>
                <Icon src={closeSvg} />
              </button>
            </div>

          </div>
        </div>
        <div className="info flex-cm ">
          <p className="name">Phone number</p>
          <div className="value-wrapper flex-rw">
            <input id='phone' className='value-input' type="tel" value={currentPhone} onChange={({ target }) => setCurrentPhone(target.value)} disabled={isPhoneInputDisabled} />
            <label htmlFor='phone' className="value-edit-button button svgCont" onClick={({ currentTarget }) => editButtonClickHandler(currentTarget, 'phone')}>
              <Icon src={pencilSvg} />
            </label>
            <div className="button-wrapper flex-rw center">
              <button className="save-button button svgCont" onClick={()=>saveButtonClickHandler('phone')}>
                <Icon src={tickSvg} />
              </button>
              <button className="close-button button svgCont" onClick={() => setIsPhoneInputDisabled(true)}>
                <Icon src={closeSvg} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NameAndContactInfo
