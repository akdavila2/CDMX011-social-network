import { routes } from "./router/router.js";


// window.addEventListener('load', () => {
//     routes[window.location.pathname].template();
// });

// window.onpopstate = () => {
//     routes[window.location.pathname].template();
// };

const component = routes[window.location.pathname]
document.getElementById('root').appendChild(component())