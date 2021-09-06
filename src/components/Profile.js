import { onNavigate } from "../router/router.js"
import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"

export const Profile = () => {
    const profileNamePhoto = `
            <img class="img-usuario" src="../img/cat-1151519_640.jpg" alt="imm_usuario">
            <p>Username</p>
            <a id="linkEditProfile" class="edit-profile"><img class="icon-nav" src="../img/icons8-editar-usuario-masculino-16.png">Edit profile</a> 
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
    namePhoto.classList.add("name-photo")
    namePhoto.innerHTML = profileNamePhoto
    profileDiv.appendChild(namePhoto)

    profileDiv.appendChild(Publication())


    const content = document.createElement('div')
    content.classList.add("profile-content")
    content.innerHTML = viewContent

    profileDiv.appendChild(content)

    const logout = Navbar().querySelector('#logout');

    const linkEditProfile = namePhoto.querySelector('#linkEditProfile')

    logout.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/');
    });

    linkEditProfile.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/profileInfo');
    });

    return profileDiv

};