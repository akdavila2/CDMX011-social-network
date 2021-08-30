import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"

export const Home = () => {
    const viewContent =
        `
            <p> Estos son los posts </p>
            
        `

    const home = document.createElement('div')

    home.appendChild(Navbar())

    home.appendChild(Publication())

    const content = document.createElement('div')
    content.classList.add("class", "profile-content")
    content.innerHTML = viewContent
    home.appendChild(content)


    return home
};