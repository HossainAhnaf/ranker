//users?q=hossain ovi
//modules
import React, { useState } from 'react'
//fake
import { allUsers } from '../data/usersData.json'
//svg
import closeSvg from '../assets/svg/close(1).svg'
//components
import UsersShortInfoWrapper from '../components/UsersShortInfoWrapper'
import Icon from 'react-inlinesvg'
//css
import '../assets/css/peoples.css'

function Peoples() {
  const [userList, setUserList] = useState(allUsers)
  return (
    <section className="peoples-section">
      <div className="search-bar-wrapper flex-rw">
        <input className='search-bar'  type="text"  placeholder="Search" />
        <button className="close-button button flex-rw center" >
          <Icon src={closeSvg} />
        </button>
      </div>

     <div className="search-results">
     <UsersShortInfoWrapper userList={userList.slice(0,0)} />

     </div>

      <div className="recent-searches">
        <h3 className='title'>Recent Searches</h3>
        <UsersShortInfoWrapper userList={userList} />
      </div>
    </section>
  )
}

export default Peoples
