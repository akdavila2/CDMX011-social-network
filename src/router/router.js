import { Home } from "../components/Home.js";
import { Login } from "../components/Login.js";
<<<<<<< HEAD
=======
import { Profile } from "../components/Profile.js";
import { Post } from "../components/Publications/Post.js";
>>>>>>> 3b19160103d8fec81a0aa602dc48e52992dc8ce8
import { SignUp } from "../components/SignUp.js";
import { Post } from "../components/Post/Post.js"
import { activeSession } from "../lib/firebase.js";


export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
<<<<<<< HEAD
    '/post': Post
=======
    '/profile': Profile,
    '/post': Post,
>>>>>>> 3b19160103d8fec81a0aa602dc48e52992dc8ce8
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