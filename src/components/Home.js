/* eslint-disable import/no-useless-path-segments */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { Navbar } from '../components/Navbar.js';
import { Publication } from '../components/Publication.js';
import { RendPosts } from '../components/Publications/RendPosts.js';

export const Home = () => {
    const home = document.createElement('div');

    home.appendChild(Navbar());

    home.appendChild(Publication());

    home.appendChild(RendPosts());

    return home;
}