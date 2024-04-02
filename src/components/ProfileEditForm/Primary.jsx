//modules
import React from 'react'
//components
import UserAvatar from '../UserAvatar'

function Primary({name,avatar,level,status}) {
  return (
    <div className="primary flex-cm">
    <div className="profile-view flex-cm center">
        <UserAvatar avatar={avatar} status={status} level={level} />
       <b className="name">{name}</b>
    </div> 
    <div className="edit-buttons-wrapper flex-cm">
      <button className="button flex-rw">
        <p className="name">Name</p>
        <span className="chevron right"></span>
      </button>
      <button className="button flex-rw">
        <p className="name">Username</p>
        <span className="chevron right"></span>
      </button>
      <button className="button flex-rw">
        <p className="name">Avatar</p>
        <span className="chevron right"></span>
      </button>
    </div>
    </div>
  )
}

export default Primary
