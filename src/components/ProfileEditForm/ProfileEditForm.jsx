//modules
import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
//components
import Primary from './Primary'
import Form from './Form'
import Icon from 'react-inlinesvg'
//svg
import closeSvg from '../../assets/svg/close(1).svg'
//css
import '../../assets/css/profile-edit-form.css'
function ProfileEditForm({setIsProfileEditFormVisible}) {
 
  const ProfileEditFormRef = useRef(null) 
   
  const { username, name, avatar, level, status } = useSelector(state => state.userSlice)
  
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false)
  const [isNameFormVisible, setIsNameFormVisible] = useState(false)
  const [isUsernameFormVisible, setIsUsernameFormVisible] = useState(false)

  const invisibleAllForms = () => {
    setIsNameFormVisible(false)
    setIsUsernameFormVisible(false)
  }
 const profileEditFormBlurHandler = ({currentTarget,relatedTarget}) => {
  setTimeout(() => {
    if(!document.activeElement.classList.contains('user-avatar-label') && relatedTarget === null)
    setIsProfileEditFormVisible(false)
  }, 0);
 }

  useEffect(() => {
    if (isNameFormVisible || isUsernameFormVisible) {
      setIsBackButtonVisible(true)
    } else {
      setIsBackButtonVisible(false)
    }
  }, [isNameFormVisible, isUsernameFormVisible])
  
  useEffect(() => {
      ProfileEditFormRef.current.focus()
      document.body.style.overflow = 'hidden'
      return ()=>{
    document.body.style.overflow = ''
    }  
  },[ProfileEditFormRef])
  return (
    <div className="profile-edit-form " ref={ProfileEditFormRef} tabIndex={0} onBlur={profileEditFormBlurHandler}>
      <div className="top-nav flex-rw">
        {isBackButtonVisible && <div className="back-button button chevron left" onClick={invisibleAllForms} ></div>}
        <div className="close-button button svgCont" onClick={()=>setIsProfileEditFormVisible(false)}>
          <Icon src={closeSvg} />
        </div>
      </div>
      {
        isNameFormVisible ? <Form title="Name" value={name} /> : isUsernameFormVisible ? <Form  title="Username" value={username}/>
          : <Primary  name={name} avatar={avatar} level={level} status={status} setIsNameFormVisible={setIsNameFormVisible} setIsUsernameFormVisible={setIsUsernameFormVisible} />
      }
    </div>
  )
}

export default ProfileEditForm
