//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from "../../components/OutlinedCustomField"

function Signup() {
  return (
    <form className="form signup-form">
    <h2 className="heading">Sign up</h2>
 
    <OutlinedCustomField className="username" placeholder="Username" >
      <input type="text" placeholder=" "  required={true}/>
     </OutlinedCustomField> 
    <small className="message">&nbsp;</small>

    <OutlinedCustomField className="email" placeholder="Email"  >
      <input type="email" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
  
    <OutlinedCustomField  className="password" placeholder="Password">
      <input type="password" placeholder=" "  required={true}/>
    </OutlinedCustomField>
    <small className="message">&nbsp;</small>
    <p className='already-have-account'><small>Already have a account? <Link  to="/signin">Sign in</Link></small></p>
    <button className="button positive" type="submit">Confirm</button>
  </form>
  )
}

export default Signup;
  


  

