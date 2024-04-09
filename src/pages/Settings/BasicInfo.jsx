import React , {useState} from 'react'
import { useSelector } from 'react-redux'
function BasicInfo() {
 const {name,username,gender} = useSelector(state=>state.userSlice)
 const [currentName, setCurrentName] = useState(name)
 const [currentUsername, setCurrentUsername] = useState(username)
 const [currentGender, setCurrentGender] = useState(gender)
  
 const editButtonClickHandler = ({currentTarget}) => {
   const info = currentTarget.parentElement.parentElement
    info.classList.add('editable')
    info.querySelector('.value-field').focus() 
 }
 const cancleButtonClickHandler = ({currentTarget},type) => {
   const info = currentTarget.parentElement.parentElement
    info.classList.remove('editable')
    if (type === 'name')
      setCurrentName(name)
    else if (type === 'username')
      setCurrentUsername(username)
 }
  return (
    <div className="basic-info flex-cm center">
      <div className="info-group">
        <b className="group-name">Basic Info</b>
        <div className="info-wrapper flex-cm center">
          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Name</p>
              <button className="edit-button"  onClick={editButtonClickHandler}>Edit</button>
            </div>
            <p className="value">{currentName}</p>
            <input className='value-field' type="text" placeholder='name' onChange={({target})=>setCurrentName(target.value)} value={currentName} />
            <div className="buttons-wrapper flex-rw center">
              <button className="save-button positive">Save</button>
              <button className="cancel-button negitive" onClick={(e)=>cancleButtonClickHandler(e,'name')} >Cancel</button>
            </div>
          </div>

          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Username</p>
              <button className="edit-button"  onClick={editButtonClickHandler}>Edit</button>
            </div>
            <p className="value">{currentUsername}</p>
            <input className='value-field' type="text" placeholder='username' onChange={({target})=>setCurrentUsername(target.value)}  value={currentUsername} />
            <div className="buttons-wrapper flex-rw center">
              <button className="save-button positive">Save</button>
              <button className="cancel-button negitive" onClick={(e)=>cancleButtonClickHandler(e,'username')}>Cancel</button>
            </div>
          </div>

          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Gender</p>
              <button className="edit-button"  onClick={editButtonClickHandler}>Edit</button>
            </div>
            <p className="value">{currentGender}</p>
            <input className='value-field' type="text" placeholder='username' onChange={({target})=>setCurrentUsername(target.value)}  value={currentUsername} />
            <div className="buttons-wrapper flex-rw center">
              <button className="save-button positive">Save</button>
              <button className="cancel-button negitive" onClick={(e)=>cancleButtonClickHandler(e,'username')}>Cancel</button>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default BasicInfo
