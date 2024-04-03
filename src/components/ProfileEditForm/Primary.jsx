//modules
import React , {useState} from 'react'
//components
import UserAvatar from '../UserAvatar'

function Primary({name,avatar,level,status,setIsNameFormVisible,setIsUsernameFormVisible}) {
  const [currentAvatar, setCurrentAvatar] = useState(avatar)
  const updateUserAvatar = ({target}) => {    
     target.parentElement.focus()
    const file = target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setCurrentAvatar(reader.result)
    }
  }  
  return (
    <div className="primary flex-cm">      
    <div className="profile-view flex-cm center">
       <label className='user-avatar-label ' tabIndex={0}>
        <input type="file" accept='image/*' onChange={updateUserAvatar} hidden={true} />
        <UserAvatar  avatar={currentAvatar} status={status} level={level} />
        </label>
       <b className="name">{name}</b>
    </div> 
    <div className="edit-buttons-wrapper flex-cm">
      <button className="button flex-rw" onClick={()=>setIsNameFormVisible(true)}>
        <p className="name">Name</p>
        <span className="chevron right"></span>
      </button>
      <button className="button flex-rw" onClick={()=>setIsUsernameFormVisible(true)}>
        <p className="name">Username</p>
        <span className="chevron right"></span>
      </button>

    </div>
    </div>
  )
}

export default Primary
