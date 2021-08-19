/* eslint-disable indent */
// Este es el punto de entrada de tu aplicacion

import { authentification } from './lib/index.js';
import { login, signUp, home, profile } from './lib/templates.js';

//Rutas para el SPA 
const routes = {
    '/': login,
    '/signup': signUp,
    '/home': home,
    '/profile': profile
};
//Se manda a llamar el template principal desde template.js
const main = document.getElementById('templates');
main.innerHTML = login;
//funcion para mostrar el home 
const showHome = () => {
    main.innerHTML = home;
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', async e => {
        e.preventDefault();
        try {
            await auth.signOut;
            main.innerHTML = login;
            console.log('signUp');
        } catch (e) {
            console.log(e);

        }
    });
};

//Metodo para verificar usuario logueado 
const authStateChanged = (user) => {
    if (user) {
        showHome();
        return;
    }
    //Se crea un evento para el botón de crear cuenta
    main.innerHTML = login;
    const createAccount = document.querySelector('#signup');
    createAccount.addEventListener('click', e => {
        e.preventDefault();
        main.innerHTML = signUp;
        const signUpForm = document.querySelector('#signupForm');
        const onSubmit = (e) => {
            e.preventDefault();
            let email = document.querySelector('#signupEmail').value;
            let password = document.querySelector('#signupPassword').value;
            let confirmationPw = document.getElementById('signupPassword2').value;
            const signupMesseges = document.getElementById('signupMesseges');
            if (password === confirmationPw) {
                authentification(email, password)
            } else {
                signupMesseges.innerHTML = `Password doesn't match`;
            }
            console.log(password, email);
        }
        signUpForm.addEventListener('submit', onSubmit);
    })

}
auth.onAuthStateChanged(authStateChanged);




//Implementado SPA(Aun no funciona)

export const navigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    if (routes[pathname] === undefined) {
        main.innerHTML = `<img class= "error" src = 'img/error404.png'></img>`;
        return;
    }
    main.innerHTML = routes[pathname]();
};
window.onpopstate = () => {
    main.innerHTML = routes[window.location.pathname];
}