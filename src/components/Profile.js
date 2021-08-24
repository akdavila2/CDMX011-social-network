import { router } from "../lib/index.js";
import { Home } from "./Home.js";
export const Profile = {
    template: () => {
        const view = `
<nav>
    <div class="logo-nav">
        <img class="logo-nav" src="../img/logo-nav2.png" alt="">
    </div>
    <div class="menu-nav">
        <ul>
            <li>
                <a id="logout" href="/"><img class="icon-home" src="../img/icons8-salir-redondeado-64.png">Sign off</a>
            </li>
            <li>
                <a href="/profile" id="profilePerfil"><img class="icon-home" src="../img/icons8-usuario-80.png">Profile</a>
            </li>
        </ul>
    </div>
    <div class="post">
        <a href="/profile" id="profilePerfil"><img class="btm-post" src="../img/addpostpequeño.png"></a>
    </div>
</nav>
<div class="acount">
    
        <div class="login-user">
            <h5>Edit Profile</h5>
             <form action="" id="profileForm" class="form">
                <label for="Email">email</label>
                <input type="email" id="signupEmail" readonly>
                <label for="Username">Username</label>
                <input type="text" id="usernameProfile">
                <label for="profilePhoto">Add Photo</label>
                <input type="url" id="profilePhoto">
                <label for="profilePassword">Change password</label>
                <input type="password" id="profilePassword" required>
                <label for="profilePassword2">confirm your password</label>
                <input type="password" id="signupPassword2" required>
                <p id="signupMesseges"></p>
                <button id="btnProfile" type="submit">Save</button>
            </form>
        </div>
 
</div>`;
        document.getElementById('root').innerHTML = view;
        const saveprofile = document.getElementById('btnProfile');
        saveprofile.addEventListener('click', (e) => {
            e.preventDefault();
            router.onNavigate('/home');
            Home.template();
        });
    },
};