/* eslint-disable indent */
import { authentification } from './lib/index.js';
import { Login } from './components/Login.js';
import { Home } from './components/Home.js';
import { SignUp } from './components/SignUp.js';
import { Profile } from './components/Profile.js';

//Rutas para el SPA 
const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/profile': Profile,
    '/home': Home,
};

const main = document.getElementById('templates');

export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname,
    );
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    main.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];
window.onpopstate = () => {
    main.appendChild(component());
};
main.appendChild(component());

// //Se manda a llamar el template principal desde template.js

const header = document.getElementById('header');
main.innerHTML = Login();
//Metodo para verificar usuario logueado 
auth.onAuthStateChanged((user) => {
    if (user) {
        header.innerHTML = Home();
        main.innerHTML = 'posts';
        const logout = document.querySelector('#logout');
        logout.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut()
                .then(() => {
                    console.log("sign out");
                    header.innerHTML = '';
                }).catch((error) => { // An error happened.
                });
        })
    } else {
        //Se crea un evento para el botón de crear cuenta
        main.innerHTML = Login();
        const createAccount = document.querySelector('#signup');
        createAccount.addEventListener('click', e => {
            e.preventDefault();
            main.innerHTML = SignUp();
            const signUpForm = document.querySelector('#signupForm');
            signUpForm.addEventListener('submit', (e) => {
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
            })
        })
    }
});