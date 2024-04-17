//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from '../../components/OutlinedCustomField';
import Icon from 'react-inlinesvg';
//svg
import facebookSvg from '../../assets/svg/facebook.svg';
import twitterSvg from '../../assets/svg/twitter.svg';
import googleSvg from '../../assets/svg/google.svg';
import linkedinSvg from '../../assets/svg/linkedin.svg';
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
     <Link className="button">Forgot password?</Link>
    </div>
    <button className="button positive" type="submit">Confirm</button>
    <p className="link-wrapper">
    Don't have an account? <Link to="../signup" className='button'>Sign Up Now</Link>
    </p>
   
    <div className="or">
          <span className="border"></span>
          <p>Or</p>  
        </div>

      <div className="with-social-media-container flex-cm center">
        <p className="title">Continue with social media</p>
         <div className="platforms-wrapper flex-rw">
         <button className="platform button">
            <Icon src={facebookSvg} />
          </button>  
          <button className="platform button">
            <Icon src={twitterSvg} />
          </button>  
    
          <button className="platform button">
            <Icon src={googleSvg} />
          </button>
          <button className="platform button">
            <Icon src={linkedinSvg} />
          </button>  
                   
          </div> 

      </div>
  </form>
  )
}

export default Signin
