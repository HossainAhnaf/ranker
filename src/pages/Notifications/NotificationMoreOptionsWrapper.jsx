import React, { useRef ,useEffect,useState } from 'react'
//components
import Icon from 'react-inlinesvg'
//svg
import tickSvg from '../../assets/svg/tick(1).svg'
import removeSvg from '../../assets/svg/remove.svg'
import removeAllSvg from '../../assets/svg/remove-all.svg'

function NotificationMoreOptionsWrapper({currentActiveNotificationMoreButtonRef, setIsNotificationMoreOptionsWrapperActive,offset}) {
  const notificationMoreOptionsWrapperRef = useRef(null)
  const [width,setWidth] = useState(0)
  const blurHandler = ({ relatedTarget }) => {
    console.log("loool");
    if (relatedTarget === null) {
      currentActiveNotificationMoreButtonRef.current.classList.remove('active')
      setIsNotificationMoreOptionsWrapperActive(false)
    } else notificationMoreOptionsWrapperRef.current.focus()
  }

  useEffect(() => {
    notificationMoreOptionsWrapperRef.current.focus()
    setWidth(notificationMoreOptionsWrapperRef.current.getBoundingClientRect().width)
  },[])

  return (
    <div className={`notification-more-options-wrapper ${currentActiveNotificationMoreButtonRef.current.classList.contains('unread') ? 'unread' : ''} `} 
    ref={notificationMoreOptionsWrapperRef} 
    tabIndex='0' 
    style={{top: `${offset.top}px`,left:`${offset.left - width}px`}} 
    onBlur={blurHandler}>
    <button className="option mark-as-read-button button ">
      <div className="svgCont">
        <Icon src={tickSvg} />
      </div>
      <p> Mark as read </p>
    </button>
    <button className="option button">
      <div className="svgCont">
        <Icon src={removeSvg} />
      </div>
      <p>Remove this notification</p>
    </button>
    <button className="option button">
      <div className="svgCont">
        <Icon src={removeAllSvg} />
      </div>
      <p>Turn of these notifications</p>
    </button>
  </div>
  )
}

export default NotificationMoreOptionsWrapper
