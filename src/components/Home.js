import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"
import { getUser } from "../lib/firebase.js";

export const Home = () => {
    const user = getUser();
    const date = new Date();
    const dateToday = date.toDateString();

    const viewContent =
        `<div class="container-post">
            <h3>Last post</h3>
        </div>   

<div>
    <div class="poster">
        <p class="getemail">e-mail: ${user ? user.email : ''}</p>
        <p class="getemail">${dateToday}</p>
        <textarea class="text-poster" id="poster" placeholder="POST"></textarea>
    <div class="texticonspost">
        <img class="icon-post" src="../img/corazon vacio.png">
        <img class="icon-post" src="../img/icons8-borrar-para-siempre-50.png">
        <img class="icon-post" src="../img/icons8-editar-50.png">
    </div>
</div>

        `

    const home = document.createElement('div')

    home.appendChild(Navbar())

    home.appendChild(Publication())

    const content = document.createElement('div')
    content.classList.add("profile-content")
    content.innerHTML = viewContent
    home.appendChild(content)


    return home
};