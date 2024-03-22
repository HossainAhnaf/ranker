import React from 'react';
import './css/style.css';
function index() {
  return (
    <form class="sign-in-form" enctype="multipart/form-data">
    <h2 class="heading">Sign in</h2>
  
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
    <p><small>Haven't any account? <a href="./sign-up.html">Sign up</a></small></p>
    <br/>
    <button class="positive" type="submit">Confirm</button>
  </form>
  )
}

export default index
