import { getUser } from "../lib/firebase.js";

export const Publication = () => {
    const user = getUser();
    const view = `
    <div class="addPublication">
        <p class= "getemail">${user ? user.email : ''}</p>
        <img class= "photo-publication" src="../img/addphoto.png">
        <textarea class="text-publication" id="review" placeholder="Share your opinion"></textarea>
        <div class="texticonspost">
        <a class="textaddpost" href="/home" id="profilePerfil"><img class="icon-post" src="../img/plusazul.png">Add post</a>       
        </div>
    </div> `;

    const publicationsDiv = document.createElement('div')
    publicationsDiv.setAttribute("class", "post")
    publicationsDiv.innerHTML = view

    //en el botón de enviar poner la lógica para mandar el post a firebase y también para que aparezca ya sea en home o perfil, intentar usar un parámetro para indicar si está en home o perfil para usar la misma lógica del componente

    return publicationsDiv

};