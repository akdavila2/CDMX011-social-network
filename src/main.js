/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable import/no-useless-path-segments */
import { activeSession } from './lib/firebase.js';
import { dispatchRoute } from './router/router.js';

window.addEventListener('load', () => {
    dispatchRoute('/');
});
window.addEventListener('popstate', () => {
    dispatchRoute(window.location.pathname);
    activeSession();
});