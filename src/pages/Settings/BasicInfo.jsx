import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
//components
import Select from '../../components/Select'
function BasicInfo() {
  const { name, username, gender } = useSelector(state => state.userSlice)
  const [currentName, setCurrentName] = useState(name)
  const [currentUsername, setCurrentUsername] = useState(username)
  const [currentGender, setCurrentGender] = useState(gender)

  const [editButtonClickHandler] = useOutletContext()
  const cancleButtonClickHandler = ({ currentTarget }, type) => {
    const content = currentTarget.parentElement.parentElement
    content.classList.remove('editable')
    if (type === 'name')
      setCurrentName(name)
    else if (type === 'username')
      setCurrentUsername(username)
  }
  return (
    <div className="outlet basic-info">
      <section>
        <b className="section-name">Basic Info</b>
        <div className="content-wrapper flex-cm center">
          <div className="content ">
            <p className="title">Name</p>
            <div className="value-wrapper">
              <p className="value">{currentName}</p>
              <input className='value-field' type="text" placeholder='name' onChange={({ target }) => setCurrentName(target.value)} value={currentName} />
              <div className="buttons-wrapper flex-rw center">
                <button className="save-button positive">Save</button>
                <button className="cancel-button negitive" onClick={(e) => cancleButtonClickHandler(e, 'name')} >Cancel</button>
              </div>
            </div>
            <button className="edit-button" onClick={editButtonClickHandler}>Edit</button>
          </div>

          <div className="content">
            <p className="title">Username</p>
            <div className="value-wrapper">
              <p className="value">{currentUsername}</p>
              <input className='value-field' type="text" placeholder='username'  onChange={({ target }) => setCurrentUsername(target.value)} value={currentUsername}  />
              <div className="buttons-wrapper flex-rw center">
                <button className="save-button positive">Save</button>
                <button className="cancel-button negitive" onClick={(e) => cancleButtonClickHandler(e, 'username')} >Cancel</button>
              </div>
            </div>
            <button className="edit-button" onClick={editButtonClickHandler}>Edit</button>
          </div>

          <div className="content">
            <p className="title">Gender</p>
            <div className="value-wrapper">
              <p className="value">{currentGender}</p>
              <Select className="value-field">
               <span className={`option ${currentGender === 'Male' ? "selected" : ""}`} datavalue="Male">Male</span>
              <span className={`option ${currentGender === 'Female' ? "selected" : ""}`} datavalue="Female">Female</span>
              <span className={`option ${currentGender === 'Other' ? "selected" : ""}`} datavalue="Other">Other</span>
            </Select>              <div className="buttons-wrapper flex-rw center">
                <button className="save-button positive">Save</button>
                <button className="cancel-button negitive" >Cancel</button>
              </div>
            </div>
            <button className="edit-button" onClick={editButtonClickHandler}>Edit</button>
          </div>

        </div>
      </section>

    </div>
  )
}

export default BasicInfo
