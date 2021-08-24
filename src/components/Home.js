import { router } from "../lib/index.js";
import { Login } from "./Login.js";
import { Profile } from "./Profile.js";
export const Home = {
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
    <a href="/profile" id="profilePerfil"><img class= "btm-post"src="../img/addpostpequeño.png"></a>
    </div>
</nav>
`;
        document.getElementById('root').innerHTML = view;
        const profilePerfil = document.querySelector('#profilePerfil');
        const logout = document.getElementById('logout');
        logout.addEventListener('click', (e) => {
            e.preventDefault();
            router.onNavigate('/');
            Login.template();
        });
        profilePerfil.addEventListener('click', (e) => {
            e.preventDefault();
            router.onNavigate('/profile');
            Profile.template();
        });
    },
};