//modules
import React from 'react'
import { Outlet } from 'react-router'
//css
import '../../assets/css/accounts.css'
import '../../assets/css/mobile-large/accounts.css'

function Accounts() {
  return (
    <section className="accounts-section flex-rw center">
      <Outlet />
    </section>
  )
}

export default Accounts
