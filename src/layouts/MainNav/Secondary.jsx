//modules
import React , {useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useSelector , useDispatch  } from 'react-redux'
import { showSideNavigationBar } from '../../store/slices/sideNavigationBarSlice'
//pages
import Notifications from '../../pages/Notifications'
//components
import UserLogo from '../../components/UserAvatar'
import Icon from 'react-inlinesvg'
//svg
import notificationSvg from '../../assets/svg/notification.svg'

function Secondary() {
  const dispatch = useDispatch()
  const location = useLocation()
  const {avatar,status,level} = useSelector(state=>state.userSlice)
  const [isNotificationsShortViewVisible,setIsNotificationsShortViewVisible] = useState(false)
  const showNotificationsShortView = ()=> {
   if (location.pathname !== '/notifications') 
    setIsNotificationsShortViewVisible(!isNotificationsShortViewVisible)  
  }
  useEffect(()=> {
    if (location.pathname === '/notifications')
      setIsNotificationsShortViewVisible(false)
  },[location])
  return (
    <>
    <div className="secondary flex-rw" >
        <button className={`notification-button ${(isNotificationsShortViewVisible || location.pathname === '/notifications') ? 'active' : ''} badge-wrapper svgCont`} onClick={showNotificationsShortView}>
         <Icon src={notificationSvg} />
          <small className="badge">4</small>
        </button>
        <button className="profile-button" onClick={()=>dispatch(showSideNavigationBar())}>
        <UserLogo avatar={avatar} status={status} level={level}/>
       </button>
        
      </div>
     { isNotificationsShortViewVisible && 
      <Notifications  shortView={true}/>
     }
      </>
  )
}

export default Secondary
