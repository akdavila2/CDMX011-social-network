import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"

export const Home = () => {
    const viewContent =
        `<div class="container-post">
            <p> Estos son los posts </p>
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