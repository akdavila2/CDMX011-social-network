// Este es el punto de entrada de tu aplicacion

import { myFunction, firebaseSignup } from './lib/index.js';
import { pages } from './lib/templates.js' 

myFunction();

const navbar = document.getElementById('navbar');
const main = document.getElementById('mainDiv');


auth.onAuthStateChanged((user) => {
    if (user) {
       navbar.style.display = "flex"
       main.innerHTML = ""
    } else {
        navbar.style.display = "none"
        main.innerHTML = pages.signin.template
        signup.addEventListener('click', ()=> {
            main.innerHTML = pages.signup.template
            const signupForm = document.getElementById('signupForm')
            signupForm.addEventListener('submit', (e)=> {
                e.preventDefault()
                let email = document.getElementById('signupEmail').value;
                let password = document.getElementById('signupPassword').value;
                let passwordConfirmation = document.getElementById('signupPassword2').value;
                let messeges = document.getElementById('signupMesseges');
                console.log(email, password)
                if (password === passwordConfirmation){
                    firebaseSignup(email, password)
                } else {
                    messeges.innerHTML = "Your password don't match"
                }

            })
        })
    }
});

const logout = document.querySelector('#logout')

logout.addEventListener('click', (e)=>{
    e.preventDefault()
    auth.signOut()
    .then(() => {
        console.log("sign out")
      }).catch((error) => {
        // An error happened.
      });
})


