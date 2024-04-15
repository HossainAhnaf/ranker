import React, { useRef ,useEffect,useState,forwardRef} from 'react'
//components
import Icon from 'react-inlinesvg'
//svg
import tickSvg from '../../assets/svg/tick(1).svg'
import removeSvg from '../../assets/svg/remove.svg'
import removeAllSvg from '../../assets/svg/remove-all.svg'

const NotificationMoreOptionsWrapper = forwardRef(function NotificationMoreOptionsWrapper({isActive,currentActiveNotificationMoreButtonRef, setIsNotificationMoreOptionsWrapperActive,offset},ref) {
  const [width,setWidth] = useState(0)
  // const blurHandler = ({ relatedTarget }) => {
  //   console.log("loool");
  //   if (relatedTarget === null) {
  //     currentActiveNotificationMoreButtonRef.current.classList.remove('active')
  //     setIsNotificationMoreOptionsWrapperActive(false)
  //   } else ref.current.focus()
  // }

  useEffect(() => {
    ref.current.focus()
    setWidth(ref.current.getBoundingClientRect().width)
  },[isActive])

  return (
    <div className={`notification-more-options-wrapper ${currentActiveNotificationMoreButtonRef.current?.classList.contains('unread') ? 'unread' : ''} ${isActive ? 'active' : ''}`} 
    ref={ref} 
    tabIndex='0' 
    style={{top: `${offset.top}px`,left:`${offset.left - width}px`}} 
    >
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
})
export default NotificationMoreOptionsWrapper
