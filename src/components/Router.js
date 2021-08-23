//Rutas para el SPA 
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Profile } from "./Profile.js";
import { Home } from "./Home.js";

const main = document.getElementById('templates');
export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/profile': Profile,
    '/home': Home,
};

export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname,
    );
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    main.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];
window.onpopstate = () => {
    main.appendChild(component());
};
main.appendChild(component());