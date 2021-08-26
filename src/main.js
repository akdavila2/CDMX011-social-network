import { routes } from './router/router.js'

const component = routes[window.location.pathname]

document.getElementById('root').appendChild(component())