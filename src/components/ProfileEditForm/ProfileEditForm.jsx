//modules
import React from 'react'
import { useSelector } from 'react-redux'
//components
import Primary from './Primary'
import NameForm from './NameForm'
import UsernameForm from './UsernameForm'
import Icon from 'react-inlinesvg'
//svg
import closeSvg from '../../assets/svg/close(1).svg'
//css
import '../../assets/css/profile-edit-form.css'
function ProfileEditForm() {
  const {username,name,avatar,level,status} = useSelector(state=>state.userSlice)
  return (
    <div className="profile-edit-form ">      
    <div className="top-nav flex-rw">
      <div className="back-button button chevron left"></div>
      <div className="close-button button svgCont">
        <Icon src={closeSvg}/>
      </div>
    </div>
      <Primary name={name} avatar={avatar} level={level} status={status}/>
    </div>
  )
}

export default ProfileEditForm
