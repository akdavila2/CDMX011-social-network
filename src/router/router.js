import { Login } from "../components/Login.js";
import { SignUp } from "../components/SignUp.js";
import { Profile } from "../components/Profile.js";
import { Home } from "../components/Home.js";

export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
    '/profile': Profile,
};
const rootDiv = document.querySelector('#root');
const component = routes[window.location.pathname];
rootDiv.appendChild(component());

export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname,
    );

    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());

};

window.onpopstate = () => {
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(component());
};