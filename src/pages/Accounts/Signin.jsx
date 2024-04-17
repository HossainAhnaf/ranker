//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from '../../components/OutlinedCustomField';
import Icon from 'react-inlinesvg';
//svg
import googleSvg from '../../assets/svg/google.svg';
import facebookSvg from '../../assets/svg/facebook.svg';
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

    <div className="links-container flex-rw">
    <Link to="../signup" className='signup'>Sign up</Link>
     <Link className="forgot-password">Forgot password?</Link>
    </div>
    <button className="button positive" type="submit">Confirm</button>
      <div className="with-platform-wrapper flex-cm center">
          <p className='title'>Or Sign In With</p>
         <div className="platforms-wrapper flex-rw">          
          <button className="platform button svgCont">
            <Icon src={googleSvg} />
          </button>
          <button className="platform button svgCont">
            <Icon src={facebookSvg} />
             </button>  
          </div> 

      </div>
  </form>
  )
}

export default Signin
