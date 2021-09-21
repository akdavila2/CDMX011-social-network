/* eslint-disable eol-last */
/* eslint-disable no-alert */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/router.js';
import { signOut } from '../lib/firebase.js';

export const Navbar = () => {
    const template = `
    <nav>
    <div class="logo-nav">
        <img class="logo-nav" src="../img/logo-nav2.png" alt="">
    </div>
    </nav>
    <div class="menu-nav">
        <ul>
        <li ><a id="logout" href=""> <div class="signOff"> <img class="icon-nav" src="../img/icons8-salir-redondeado-64.png"> <p>Sign off</p> </div> </a></li> 
            <!-- <li><a href="#" id="profilePerfil"><img class= "icon-nav" src="../img/iconsusuario.png">Profile</a></li>-->
        </ul>
    </div>
    
`;
    const navBar = document.createElement('header');
    navBar.classList.add('header-div');
    navBar.innerHTML = template;
    const logout = navBar.querySelector('#logout');
    logout.addEventListener('click', async(event) => {
        event.preventDefault();
        try {
            await signOut();
            onNavigate('/');
        } catch (error) {
            alert(error);
        }
    });
    // const profile = navBar.querySelector('#profilePerfil');
    // profile.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     onNavigate('/profile');
    // });
    return navBar;
};