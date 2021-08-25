import { onNavigate } from "../router/router.js";
export const Home = () => {
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

`;
    const divHome = document.createElement('div');
    divHome.setAttribute('id', 'homeContainer');
    divHome.classList.add('divHome');
    divHome.innerHTML = view;


    const profilePerfil = divHome.querySelector('#profilePerfil');
    const logout = divHome.querySelector('#logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/');
    });
    profilePerfil.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/profile');

    });
    return divHome;
}