import { Home } from "../components/Home.js";
import { Login } from "../components/Login.js";
import { Profile } from "../components/Profile.js";
import { Post } from "../components/Publications/Post.js";
import { SignUp } from "../components/SignUp.js";
import { activeSession } from "../lib/firebase.js";


export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
    '/profile': Profile,
    '/post': Post,
};

const rootDiv = document.getElementById('root')

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
    rootDiv.appendChild(routes[window.location.pathname]());
    activeSession();
};