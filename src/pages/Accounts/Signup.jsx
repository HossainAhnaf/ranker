//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from "../../components/OutlinedCustomField"
import Icon from 'react-inlinesvg';
//svg
import facebookSvg from '../../assets/svg/facebook.svg';
import twitterSvg from '../../assets/svg/twitter.svg';
import googleSvg from '../../assets/svg/google.svg';
import linkedinSvg from '../../assets/svg/linkedin.svg';
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
    <button className="button positive" type="submit">Confirm</button>
    <p className="link-wrapper">
    Already have account? <Link to="../signin" className='button'>Sign In Now</Link>
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

export default Signup;
  


  

