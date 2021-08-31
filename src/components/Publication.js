import { getUser } from "../firebase.js";

export const Publication = () => {
    const user = getUser();
    const view = `
    <div class="addPublication">
        <p class= "getemail">${user ? user.email : ''}</p>
        <img class= "photo-publication" src="../img/girl-919048_640.jpg">
        <textarea class="text-publication" id="review" placeholder="Share your opinion"></textarea><br>
        <a href="/profile" id="profilePerfil"><img class="icon-post" src="../img/plusazul.png"><p class="getemail">Add post</p></a>
    </div> `;


    const publicationsDiv = document.createElement('div')
    publicationsDiv.setAttribute("class", "post")
    publicationsDiv.innerHTML = view

    //en el botón de enviar poner la lógica para mandar el post a firebase y también para que aparezca ya sea en home o perfil, intentar usar un parámetro para indicar si está en home o perfil para usar la misma lógica del componente

    return publicationsDiv

};