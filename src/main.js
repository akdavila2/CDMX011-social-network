// Este es el punto de entrada de tu aplicacion

import { authentification } from './lib/index.js';
import { pages } from './lib/templates.js';

//Se manda a llamar el template principal desde template.js
const main = document.getElementById('templates');
main.innerHTML = pages.signin.template;
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


/*signUpForm.addEventListener('submit', (e) => { 
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
*/