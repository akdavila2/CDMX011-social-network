/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable indent */
export const render = (target, element) => {
    while (target.firstChild) {
        target.removeChild(target.lastChild);
    }
    target.append(element);
}