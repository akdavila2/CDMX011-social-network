import { routes } from "./router/router";


// window.addEventListener('load', () => {
//     routes[window.location.pathname].template();
// });

// window.onpopstate = () => {
//     routes[window.location.pathname].template();
// };

const rootDiv = document.querySelector('#root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv);