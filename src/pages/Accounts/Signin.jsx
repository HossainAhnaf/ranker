//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from '../../components/OutlinedCustomField';
function Signin() {
  return (
    <form className="form signin-form">
    <h2 className="heading">Sign in</h2>
  
  
    <OutlinedCustomField  className="email" placeholder="Email"  required={true}>
      <input type="email" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
   
    <OutlinedCustomField  className="password" placeholder="Password"  required={true}>
      <input type="password" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
    <p className='have-not-account'><small>Haven't any account? <Link to="../signup">Sign up</Link></small></p>

    <button className="button positive" type="submit">Confirm</button>
  </form>
  )
}

export default Signin
