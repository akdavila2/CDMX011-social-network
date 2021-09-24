/* eslint-disable import/no-useless-path-segments */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { Home } from '../components/Home.js';
import { Login } from '../components/Login.js';
import { PostForm } from '../components/Publications/PostForm.js';
import { SignUp } from '../components/SignUp.js';
import { activeSession } from '../lib/firebase.js';

export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
    '/postForm': PostForm,
};

const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname);
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.onpopstate = () => {
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
    activeSession();
};