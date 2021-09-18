/* eslint-disable import/no-useless-path-segments */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { Home } from '../components/Home.js';
import { Login } from '../components/Login.js';
import { PostForm } from '../components/Publications/PostForm.js';
import { SignUp } from '../components/SignUp.js';
import { render } from '../utils.js';

export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
    '/postForm': PostForm,
};

export const dispatchRoute = (pathname = '/') => {
    const root = document.getElementById('root');
    const component = routes[pathname];
    render(root, component());
};

export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname,
    );
    dispatchRoute(pathname);
};