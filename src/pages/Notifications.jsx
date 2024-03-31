//modules
import React , { useState } from 'react'
import notificationsData from '../data/notificationsData.json'
//components
import Icon from 'react-inlinesvg'
//svg
import growthSvg from '../assets/svg/growth.svg'
import securitySvg from '../assets/svg/security-shield.svg'
import handMikeSvg from '../assets/svg/hand-mike.svg'
//css
import '../assets/css/notifications.css'
function Notifications() {
  const [notificationsData,setNotificationsData] = useState()
  
  return (
    <div className="notifications-wrapper flex-cm center">
    {
     Object.keys(notificationsData).map((key,index)=>{
       
     })
    }
    </div>
  )
}

export default Notifications


// notificationsData.map(({title,description,type,links},index)=>{
//   return (
//       <p>adad</p>
//      )
//     }) 
      

// <div className={`notification ${type} flex-rw `} key={index}>        
// <div className="icon-wrapper">
//    <div className="svgCont">
//      {type === 'progress' && <Icon src={growthSvg} />}
//      {type === 'security' && <Icon src={securitySvg} />}
//      {type === 'announcement' && <Icon src={handMikeSvg} />}
//    </div>
// </div>
// <div className="message-wrapper flex-cm">
// <b className="title">{title}</b>
//  <small className="description">{description}</small>
//  <div className="links-wrapper flex-rw">
//    {links.map(({title,url},index)=>{
//      return (
//        <a  href={url} className="link" key={index}>{title}</a>
//      )
//    })}
//  </div>
// </div>
 
// </div>