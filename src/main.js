
/* eslint-disable indent */
import { authentification } from './lib/index.js';
import { routes } from './components/Router.js';
import { actions } from './components/Actions.js';

const main = document.getElementById('templates');
const header = document.getElementById('header');
const render = (pathname) => {
  // eslint-disable-next-line no-prototype-builtins
  if (!routes.hasOwnProperty(pathname)) {
    main.innerHTML = `<img src ="img/error404.png"/>`;
    return;
  }
  const component = routes[pathname];
  const pageActions = actions[pathname];
  main.innerHTML = component();
  pageActions.events();
};
//Se manda a llamar el template
render('/');
//Metodo para verificar usuario logueado
auth.onAuthStateChanged((user) => {
  if (user) {
    render('/home');
    main.innerHTML = 'posts';
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      auth.signOut()
        .then(() => {
          console.log('sign out');
          header.innerHTML = '';
        })
        .catch((error) => { // An error happened.
        });
    });
  } else {
    //Se crea un evento para el botón de crear cuenta
    render('/');
    const createAccount = document.querySelector('#signup');
    createAccount.addEventListener('click', e => {
      e.preventDefault();
      render('/signUp');
      const signUpForm = document.querySelector('#signupForm');
      signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = document.querySelector('#signupEmail').value;
        let password = document.querySelector('#signupPassword').value;
        let confirmationPw = document.getElementById('signupPassword2').value;
        const signupMesseges = document.getElementById('signupMesseges');
        if (password === confirmationPw) {
          authentification(email, password);
        } else {
          signupMesseges.innerHTML = `Password doesn't match`;
        }
        console.log(password, email);
      });
    });
  }
});

//Eventos para poder hacer Login

// const loginForm = document.getElementById('login-form');
// const emailLogin = document.getElementById('login-email';)
// const passwordLogin = document.getElementById('login-password');

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     auth
//         .signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//             return 'exitoso';
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             console.log(errorCode);
//             const errorMessage = error.message;
//             console.log(errorMessage);
//             return errorMessage;
//         });
// })
