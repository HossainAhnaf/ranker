//modules
import React from 'react'
import { Outlet } from 'react-router'
//css
import '../../assets/css/account.css'
function Account() {
  return (
    <section className="account-section flex-rw center">
      <Outlet />
    </section>
  )
}

export default Account
