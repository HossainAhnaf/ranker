//users?q=hossain ovi
//modules
import React, { useState } from 'react'
//fake
import { allUsers } from '../data/usersData.json'
//components
import UsersShortInfoWrapper from '../components/UsersShortInfoWrapper'
//css
import '../assets/css/peoples.css'

function Peoples() {
  const [userList, setUserList] = useState(allUsers)
  return (
    <section className="peoples-section">
      <div className="search-bar-wrapper">
        <input className='search-bar'  type="text"  placeholder="Search" />
      </div>
      <div className="recent-searches">
        <h3 className='title'>Recent Searches</h3>
        <UsersShortInfoWrapper userList={userList} />
      </div>
    </section>
  )
}

export default Peoples
