//modules
import React from 'react'
import { useSelector } from 'react-redux'
//components
import UserAvatar from '../components/UserAvatar'
//css
import '../assets/css/profile-edit-form.css'
function ProfileEditForm() {
  const {username,name,avatar,rank,status,challenges,passed,failed,level,xp} = useSelector(state=>state.userSlice)
  return (
    <div className="profile-edit-form flex-cm center">
      <div className="profile-view">
          <UserAvatar avatar={avatar} status={status} level={level} />
         <b className="name">{name}</b>
      </div> 
      <div className="edit-buttons-wrapper">
        <button className="button flex-rw">
          <p className="name">Name</p>
        </button>
        <button className="button flex-rw">
          <p className="name">Username</p>
        </button>
        <button className="button flex-rw">
          <p className="name">Avatar</p>
        </button>
      </div>
    </div>
  )
}

export default ProfileEditForm
