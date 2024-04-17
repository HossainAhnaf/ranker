//modules
import React from 'react';
//components
import OutlinedCustomField from '../../components/OutlinedCustomField';
function ResetPassword() {
  return (
    <form className="form password">
    <h2 className="heading">Password Reset</h2>
     <div className='description'>
     Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.
     </div>
    <OutlinedCustomField  className="email" placeholder="E-mail address"  required={true}>
      <input type="email" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
    <button className="button positive" type="submit">Reset My Password</button>
  
  </form>
  )
}

export default ResetPassword
