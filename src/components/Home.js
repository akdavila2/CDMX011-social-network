import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"
import { RendPosts } from '../components/Publications/RendPosts.js'


export const Home = () => {

    const home = document.createElement('div');

    home.appendChild(Navbar());

    home.appendChild(Publication());

    home.appendChild(RendPosts());

    return home;
};