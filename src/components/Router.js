import { routes } from "./routes.js";
const main = document.getElementById('templates');
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