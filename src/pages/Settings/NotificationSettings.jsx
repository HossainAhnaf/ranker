import React from 'react'

function NotificationSettings() {
  return (
    <div className='outlet notification-settings'>
      <div className="header flex-rw">
        <div className="name">Notifications</div>
        <div className="right flex-rw">
          <b>Email</b>
          <b>Site</b>
        </div>
      </div>
      <div className="notification-category">
        Anouncement
      </div>
      <div className="notification-type-container flex-cm center">
        <div className="notification-type flex-rw">
          <p className='name'>Important Announcements</p>
          <div className="right flex-rw">
            <label className="checkbox-wrapper flex-rw center">
              <input type="checkbox" />
            </label>
            <label className="checkbox-wrapper flex-rw center">
              <input type="checkbox" />
            </label>
          </div>

        </div>
        <div className="notification-type flex-rw">
          <p className='name'>Feature  Announcements</p>
          <div className="right flex-rw">
            <label className="checkbox-wrapper flex-rw center">
              <input type="checkbox" />
            </label>
            <label className="checkbox-wrapper flex-rw center">
              <input type="checkbox" />
            </label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NotificationSettings
