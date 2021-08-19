import { navigate } from '../main.js'
export const login = `
<div class="acount">
    <div class="acount-header">
        <img src="../img/logo-nav.png" class="acount-logo" alt="LoveBook logo">
    </div>
    <div class="log-content">
        <div class="login-user">
            <form action="" id="login-form" class="form">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" required>
                <label for="login-password">Password</label>
                <input type="password" id="login-password" required>
                <a href="/home" ><button>Login</button></a>
            </form>
        </div>
        <div class="division">
            <hr class="division-1">
            <p class="division-2">O</p>
            <hr class="division-3">
        </div>

        <div class="login-google">
            <img src="../img/icongoogle.png" alt="logo google" class="logo-google">
            <p> Login with google</p>
        </div>
        <div>
        <a href="/signUp"  class="btn login-btn"><button type="submit" >Sign Up</button></a>
        </div>
    </div>
</div>
`;
export const signUp = `

<div class="acount">
    <div class="acount-header">
        <img src="../img/logo-nav.png" class="acount-logo" alt="LoveBook logo">
    </div>
    <div class="signup">
        <form action="" id="signupForm" class="form">
            <label for="signupEmail">Email</label>
            <input type="email" class="signup-email" id="signupEmail" required>
            <label for="signupPassword">Password</label>
            <input type="password" class="signup-password" id="signupPassword" required>
            <label for="signupPassword2">Confirm your password</label>
            <input type="password" class="login-password" id="signupPassword2" required>
            <p id="signupMesseges"></p>
            <a href="/home" class="btn login-btn"><button type="submit" >Sign Up</button></a>
        </form>
    </div>
</div>

`;
export const home = `
<nav>
    <div class="logo-nav">
        <img class="logo-nav" src="../img/logo-nav2.png" alt=""></div>
    <div class="menu-nav">
        <ul>
            <li><a id="logout" href="/">Sign off</a></li>
            <a href="/profile"><img src="../img/iconsusuario.png">Profile</a>
            </li>
        </ul>
    </div>
</nav>
<div>
    <a href="#"><button >Add post</button> </a>
</div>`;
export const profile = `
<nav>
    <div class="logo-nav">
        <img class="logo-nav" src="../img/logo-nav2.png" alt=""></div>
    <div class="menu-nav">
        <ul>
            <li><a id="logout" href="/">Sign off</a></li>
            <a href=""><img src="../img/iconsusuario.png">Profile</a>
            </li>
        </ul>
    </div>
</nav>
<div>
    <form action="" id="profileForm" class="form">
        <label for="signupEmail">Email</label>
        <input type="email" class="signup-email" id="signupEmail" readonly>
        <label for="signupUsername">Username</label>
        <input type="text" class="signup-email" id="profileUserName">
        <label for="profilePhoto">Photo</label>
        <input type="url" class="signup-email" id="profilePhoto">
        <label for="profilechangePassword">change Password</label>
        <input type="password" class="signup-password" id="profilePassword" required>
        <label for="signupPassword2">Confirm your password</label>
        <input type="password" class="login-password" id="profilePassword2" required>
        <p id="signupMesseges"></p>
        <a href="/home" class="btn login-btn"><button type="submit" >Save</button></a>
    </form>
</div>`;