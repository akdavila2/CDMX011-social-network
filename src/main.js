/* eslint-disable indent */
// Este es el punto de entrada de tu aplicacion

import { authentification } from './lib/index.js';
import { pages } from './lib/templates.js';

//Rutas para el SPA 
const routes = {
    '/': pages.signin,
    '/signup': pages.signup,
    '/poster': pages.home
};
//Se manda a llamar el template principal desde template.js
const main = document.getElementById('templates');
main.innerHTML = pages.signin.template;
<<<<<<< HEAD
//Se crea un evento para el botón de crear cuenta
const createAccount = document.querySelector('#signup');
createAccount.addEventListener('click', e =>{
    main.innerHTML = pages.signup.template;
     const signUpForm = document.querySelector('#signupForm');
     signUpForm.addEventListener('submit', (e) => { 
     e.preventDefault();
        let email = document.querySelector('#signupEmail').value;
        let password = document.querySelector('#signupPassword').value;
        let confirmationPw = document.getElementById('signupPassword2').value;
        const signupMesseges = document.getElementById('signupMesseges');
        if(password === confirmationPw){
            authentification(email, password)
        } else {
            signupMesseges.innerHTML = `Password doesn't match`;            
        }
        console.log(password, email);
    })
})
=======
//Metodo para verificar usuario logueado 
auth.onAuthStateChanged((user) => {
    if (user) {
        main.innerHTML = pages.home.template;
        const logout = document.querySelector('#logout');
        logout.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut()
                .then(() => {
                    console.log("sign out")
                }).catch((error) => { // An error happened. 
                });
        })
    } else {
        //Se crea un evento para el botón de crear cuenta
        main.innerHTML = pages.signin.template;
        const createAccount = document.querySelector('#signup');
        createAccount.addEventListener('click', e => {
            e.preventDefault();
            main.innerHTML = pages.signup.template;
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
>>>>>>> f438b595f8c1af74a138c2649612a9b7fbfd9f31




//Implementado SPA(Aun no funciona)

export const navigate = (pathname) => {
    window.history.pushState({}, document.title, window.location.origin + pathname);
    if (routes[pathname] === undefined) {
        main.innerHTML = `<img class= "error" src = 'img/error404.png'></img>`;
        return;
    }
    main.innerHTML = routes[pathname]();
};