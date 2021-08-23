export const Register = () => {
    const template = 
    `<div class="acount" >
        <div class="acount-header">
            <img src="../img/logo-nav.png" class="acount-logo"alt="LoveBook logo">
        </div>
        <div class="signup">
            <form action="" id="signupForm" class="form">
                <label for="signupEmail">email</label>
                <input type="email" class="signup-email" id="signupEmail" required>
                <label for="signupPassword">password</label>
                <input type="password" class="signup-password" id="signupPassword" required>
                <label for="signupPassword2">confirm your password</label>
                <input type="password" class="login-password" id="signupPassword2" required>
                <p id="signupMesseges"></p>
                <button type="submit" class="btn login-btn">Signup</button>
            </form>
        </div>
    </div>
    `
     return template
}