/* eslint-disable indent */
import { onNavigate } from '../Router.js';

export const SignUp = {

  events: () => {
    const btnSendSignUp = document.getElementById('btnSendSignUp');
    btnSendSignUp.addEventListener('click', () => onNavigate('/home'));

  }
};
