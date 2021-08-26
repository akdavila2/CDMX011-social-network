import { onNavigate } from "../router/router.js"
import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"

export const Profile = () => {
        const profileNamePhoto =`
            <p>foto</p>
            <p>nombre de usuario</p>
        `

        const viewContent = 
        `
        <div class="publication">
            <p> EStos son los posts </p><br>
            <p> EStos son los posts </p>
        </div>
        `

        const profileDiv = document.createElement('div')

        profileDiv.appendChild(Navbar())
        
        const namePhoto = document.createElement('div')
        namePhoto.setAttribute("class", "name-photo")
        namePhoto.innerHTML = profileNamePhoto
        profileDiv.appendChild(namePhoto)

        profileDiv.appendChild(Publication())


        const content = document.createElement('div')
        content.setAttribute("class", "profile-content")
        content.innerHTML = viewContent

        profileDiv.appendChild(content)

        const logout = Navbar().querySelector('#logout');

        logout.addEventListener('click', (e) => {
            e.preventDefault();
            onNavigate('/');
        });

        return profileDiv

};



