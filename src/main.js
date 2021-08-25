import { Home } from "./components/Home.js";
import { Login } from "./components/Login.js";
import { Profile } from "./components/Profile.js";
import { SignUp } from "./components/SignUp.js";
const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
    '/profile': Profile,
};

window.addEventListener('load', () => {
    routes[window.location.pathname].template();
});

window.onpopstate = () => {
    routes[window.location.pathname].template();
};
