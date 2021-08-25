import { onNavigate } from "../router/router.js";
export const Profile = () => {
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
    </nav>
    <div class="post">
        <textarea id="review" placeholder="Share your opinion"></textarea>
        <a href="/profile" id="profilePerfil"><img class="icon-post" src="../img/plusazul.png">Add post</a>
    
    </div>
<div class="acount">
        <div class="login-user">
            <h3>Edit Profile</h3>
             <form action="" id="profileForm" class="form">
                <label for="Username">Username</label>
                <input type="text" id="usernameProfile">
                <label for="profilePhoto">Add Photo</label>
                <input type="url" id="profilePhoto">
                <label for="profilePassword">Change password</label>
                <input type="password" id="profilePassword" required>
                <label for="profilePassword2">Confirm your password</label>
                <input type="password" id="signupPassword2" required>
                <p id="signupMesseges"></p>
                <button id="btnProfile" type="submit">Save</button>
            </form>
        </div>
 
</div>`;

    const divProfile = document.createElement('div');
    divProfile.setAttribute('id', 'profileContainer');
    divProfile.classList.add('acount');
    divProfile.innerHTML = view;

    const saveprofile = divProfile.querySelector('#btnProfile');
    saveprofile.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home');

    });
    return divProfile;
}