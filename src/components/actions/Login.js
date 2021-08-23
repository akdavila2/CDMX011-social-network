import { onNavigate } from "../Router.js";
export const Login = {

    events: () => {
        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('signup');
        btnLogin.addEventListener('click', () => onNavigate('/home'));
        btnSignUp.addEventListener('click', () => onNavigate('/signUp'));
    }
};
