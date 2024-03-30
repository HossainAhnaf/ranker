//modules
import React from 'react'
//css
import '../assets/css/notifications-preference.css'
function NotificationsPreference() {
  return (
    <div className="notifications-preference">
      <table>
        <tbody>
        <tr>
          <th>Type</th>
          <th>Email</th>
          <th>site</th>
        </tr>
        <tr>
          <td>Progress</td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>
          </td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>    
            </td>
        </tr>
        <tr>
          <td>Security</td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>
          </td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>    
            </td>
        </tr>
        <tr>
          <td>Announcement</td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>
          </td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>    
            </td>
        </tr>
        <tr>
          <td>Other</td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>
          </td>
          <td>
            <label className="switch-small">
              <input id="pinned" type="checkbox" />
              <span className="slider "></span>
            </label>    
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NotificationsPreference
