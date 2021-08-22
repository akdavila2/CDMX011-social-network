/* eslint-disable indent */
import { onNavigate } from "../main";
export const SignUp = () => {
    const view = () => { return `
 <div class="acount-header">
    <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
 </div>
<div class="log-content">
  <div class="login-user">
    <form action="" id="signupForm" class="form">
      <label for="signupUserName">Username</label>
      <input type="text" id="signupUserName">
      <label for="signupEmail">Email</label>
      <input type="email" id="signupEmail" required>
      <label for="signupPassword">Password</label>
      <input type="password" id="signupPassword" required>
      <label for="signupPassword2">Confirm your password</label>
      <input type="password" id="signupPassword2" required>
      <p id="signupMesseges"></p>
      <button type="submit" id="btnSendSignUp">Sign Up</button>
    </form>
  </div> 
  ` };
    const btnSendSignUp = document.getElementById('btnSendSignUp')
    let outSignUp = [];
    const SignUpDiv = document.createElement('div');
    const templates = document.getElementById('templates');
    outSignUp += view();
    SignUpDiv.innerHTML = outSignUp;
    SignUpDiv.classList.add('acount');
    templates.appendChild(SignUpDiv);

    btnSendSignUp.addEventListener('click', () => onNavigate('/home'));

}