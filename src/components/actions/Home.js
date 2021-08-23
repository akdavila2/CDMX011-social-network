/* eslint-disable indent */
import { onNavigate } from '../Router.js';

export const Home = {
  events: () => {
    const posts = document.getElementById('post');
    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => onNavigate('/'));
    posts.addEventListener('click', () => onNavigate('/post'));
  }
};

