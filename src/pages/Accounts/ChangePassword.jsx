//modules
import React from 'react';
//components
import OutlinedCustomField from '../../components/OutlinedCustomField';
function ChangePassword() {
  return (
    <form className="form change-password-form">
    <h2 className="heading">Change Password</h2>
    <OutlinedCustomField  className="current-password" placeholder="Current Password"  required={true}>
      <input type="password" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
    <OutlinedCustomField  className="new-password" placeholder="New Password"  required={true}>
      <input type="password" placeholder=" "  required={true}/>
    </OutlinedCustomField>

    <small className="message">&nbsp;</small>
    <OutlinedCustomField  className="new-password-again" placeholder="New Password (again)"  required={true}>
      <input type="password" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
    <button className="button positive" type="submit">Change Password</button>
  </form>
  )
}

export default ChangePassword
