import { onNavigate } from "../main";
export const Login = () => {
    const view = () => { return `
<div class="acount-header">
<img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
</div>
<div class="log-content">
<div class="login-user">
    <form action="" id="login-form" class="form">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" required>
        <label for="login-password">Password</label>
        <input type="password" id="login-password" required>
        <button type="submit" id="btnLogin" class="btn login-btn">Login</button>
    </form>
</div>
<div class="division">
    <hr class="division-1">
    <p class="division-2">O</p>
    <hr class="division-3">
</div>

<div class="login-google">
    <img src="../img/icongoogle.png" alt="logo google" class="logo-google">
    <p>Login with google</p>
</div>
<div class="pieform">
    <p style="font-size: 12px;">You do not have an account</p>
    <button id="signup">Sign Up</button>
</div>
</div>

` };
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('signup');
    let outLogin = [];
    const LoginDiv = document.createElement('div');
    const templates = document.getElementById('templates');
    outLogin += view();
    LoginDiv.innerHTML = outLogin
    LoginDiv.classList.add('acount');
    templates.appendChild(LoginDiv);

    btnLogin.addEventListener('click', () => onNavigate('/home'));
    btnSignUp.addEventListener('click', () => onNavigate('/signUp'));
}