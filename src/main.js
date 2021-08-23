/* eslint-disable indent */
// Este es el punto de entrada de tu aplicacion

import { authentification } from './lib/index.js';
import { pages } from './lib/templates.js';
import { Home } from './components/Home.js'
import { Login } from './components/Login.js'
import { Register } from './components/Register.js'
import { Navbar } from './components/Navbar.js'

//Rutas para el SPA 
const routes = {
    '/home': Home,
    '/register': Register,
    '/signin': Login
}; 

//Se manda a llamar el template principal desde template.js
const main = document.getElementById('templates');
const header = document.getElementById('header')

main.innerHTML = routes['/signin']

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    )

    main.innerHTML = routes[pathname]()
}

const component = routes[window.location.pathname]

window.onpopstate = () => {
    main.innerHTML = routes[window.location.pathname]()
}


//Metodo para verificar usuario logueado 
auth.onAuthStateChanged((user) => {
    if (user) {
        header.innerHTML = Navbar()
        onNavigate('/')
        const logout = document.querySelector('#logout');
        logout.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut()
                .then(() => {
                    console.log("sign out")
                    header.innerHTML = ""
                }).catch((error) => { // An error happened. 
                });
        })
        
    } else {
        //Se crea un evento para el botón de crear cuenta
        onNavigate('/signin')
        const createAccount = document.querySelector('#signup');
        createAccount.addEventListener('click', e => {
            e.preventDefault();
            onNavigate('/register')
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




//Implementado SPA(Aun no funciona)

export const navigate = (pathname) => {
    window.history.pushState({}, document.title, window.location.origin + pathname);
    if (routes[pathname] === undefined) {
        main.innerHTML = `<img class= "error" src = 'img/error404.png'></img>`;
        return;
    }
    main.innerHTML = routes[pathname]();
}; 

/* window.addEventListener('hashchange', () => {
    router(window.location.hash)
})


const router = (route) => {
    main.innerHTML = ""
    switch (route) {
        case"#/signin": {
            return main.innerHTML = pages.signin.template
        }
        case "#/signup": {
            return main.innerHTML = pages.signup.template
        }
    }
} */