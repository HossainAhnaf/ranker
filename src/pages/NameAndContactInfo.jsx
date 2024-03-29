//modules 
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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

  const infoButtonClickHandler = (currentTarget, type) => {
    if (type === 'name')
      setIsNameInputDisabled(false)
    else if (type === 'email')
      setIsEmailInputDisabled(false)
    else if (type === 'phone')
      setIsPhoneInputDisabled(false)
    console.log(currentTarget.querySelector('.value'));
    currentTarget.querySelector('.value').focus()
    
  }

  return (

    <div className='name-and-contact-info'>
      <div className="info-wrapper flex-cm center">
        <div className="info button flex-cm" onClick={({ currentTarget }) => infoButtonClickHandler(currentTarget, 'name')}>
          <p className="name">Name</p>
          <input className='value' type="text" value={currentName} onChange={({ target }) => setCurrentName(target.value)} maxLength={25} disabled={isNameInputDisabled} />
        </div>
        <div className="info button flex-cm ">
          <p className="name">Email address</p>
          <input className='value' type="email" value={currentEmail} onChange={({ target }) => setCurrentEmail(target.value)} maxLength={25} disabled={isEmailInputDisabled} />
        </div>
        <div className="info button flex-cm ">
          <p className="name">Phone number</p>
          <input className='value' type="phone" value={currentPhone} onChange={({ target }) => setCurrentPhone(target.value)} maxLength={25} disabled={isPhoneInputDisabled} />
        </div>
      </div>
    </div>
  )
}

export default NameAndContactInfo
