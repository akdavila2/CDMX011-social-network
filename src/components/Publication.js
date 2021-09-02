import { getUser } from "../lib/firebase.js";
import { onNavigate } from "../router/router.js";

export const Publication = () => {
    const user = getUser();
    const view = `
    <div class="addPublication">
        <p class= "getemail">${user ? user.email : ''}</p>
    <div class= "container-addpost">   
    <div> 
        <img class= "photo-publication" src="../img/addphoto.png">
<<<<<<< HEAD
        <textarea class="text-publication" id="review" placeholder="Share your opinion"></textarea>
        <div class="texticonspost">
            <a class="textaddpost" href="#" id="btnAddPost"><img class="icon-post" src="../img/plusazul.png">Add post</a>       
        </div>
    </div> `;
=======
    </div>
    <div class= "text-publication">
        <a class="textaddpost" href="../components/Publications/Post.js" id="addpublications"><img class="icon-post" src="../img/plusazul.png"> Add Post</a>
    </div>
    </div> 
    </div>`;
>>>>>>> 3b19160103d8fec81a0aa602dc48e52992dc8ce8

    const publicationsDiv = document.createElement('div')
    publicationsDiv.classList.add('Poster')
    publicationsDiv.innerHTML = view

<<<<<<< HEAD
    const btnAddPost = publicationsDiv.querySelector('#btnAddPost')

    btnAddPost.addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/post')
    })
=======
    const btnAddPost = publicationsDiv.querySelector('#addpublications');
    btnAddPost.addEventListener('click', event => {
        event.preventDefault();
        onNavigate('/post');
    });
>>>>>>> 3b19160103d8fec81a0aa602dc48e52992dc8ce8

    //en el botón de enviar poner la lógica para mandar el post a firebase y también para que aparezca ya sea en home o perfil, intentar usar un parámetro para indicar si está en home o perfil para usar la misma lógica del componente

    return publicationsDiv

};