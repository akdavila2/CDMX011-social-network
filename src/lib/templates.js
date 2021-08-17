export const pages = {
    signin: {
        path: '/signin',
        template:
        `<div class="acount" >
            <div class="acount-header">
                <img src="../img/logo-nav.png" class="acount-logo"alt="LoveBook logo">
            </div>
            <div class="log-content">
                <div class="login-user">
                    <form action="" id="login-form" class="form">
                        <label for="login-email">Email</label>
                        <input type="email" id="login-email" required>
                        <label for="login-password">Password</label>                           
                        <input type="password" id="login-password" required>
                        <button type="submit" class="btn login-btn">Login</button>
                    </form>
                </div>
                <div class="division">
                <hr class="division-1"> 
                <p class="division-2">O</p> 
                <hr class="division-3">
                </div>
                

                <div class="login-google">
                <img src="../img/icongoogle.png" alt="logo google" class="logo-google"> <p> Login with google</p>
                </div>
                <div>
                    <button id="signup"> Create an account</button>
                </div>
            </div>
        </div>
         `
    },
    signup: {
        path: "/signup",
        template:
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
  }
}
