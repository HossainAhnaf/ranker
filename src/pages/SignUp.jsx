import React from 'react';
import './css/style.css';

function index() {
  return (
    <form class="sign-up-form" enctype="multipart/form-data">
    <h2 class="heading">Sign up</h2>
    <label class="custom-field">
      <input type="text" class="username" placeholder=" " required />
      <span class="placeholder">username</span>
    </label>
    <small class="message">&nbsp;</small>

    <label class="custom-field">
      <input type="email" class="email" placeholder=" " required />
      <span class="placeholder">Email</span>
    </label>
    <small class="message">&nbsp;</small>
    <label class="custom-field">
      <input type="password" class="password" placeholder=" " required />
      <span class="placeholder">Password</span>
    </label>
    <small class="message">&nbsp;</small>
    <p><small>Already have a account? <a href="./sign-in.html">Sign in</a></small></p>
    <br/>
    <button class="positive" type="submit">Confirm</button>
  </form>
  )
}

export default index;
  


  

