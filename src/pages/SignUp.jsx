//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from "../components/OutlinedCustomField"
//css
import '../assets/css/signup.css'

function Signup() {
  return (
    <form className="signup-form">
    <h2 className="heading">Sign up</h2>
 
    <OutlinedCustomField type="text" className="username" placeholder="Username"  required={true}/>
    <small className="message">&nbsp;</small>

    <OutlinedCustomField type="email" className="email" placeholder="Email"  required={true}/>
    <small className="message">&nbsp;</small>
  
    <OutlinedCustomField type="password" className="password" placeholder="Password"  required={true}/>
    <small className="message">&nbsp;</small>
    <p className='already-have-account'><small>Already have a account? <Link  to="/signin">Sign in</Link></small></p>
    <button className="button positive" type="submit">Confirm</button>
  </form>
  )
}

export default Signup;
  


  

