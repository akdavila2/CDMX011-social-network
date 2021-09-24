/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { getUser } from '../lib/firebase.js';
import { onNavigate } from '../router/router.js';

export const Publication = () => {
    const user = getUser();
    const view = `
    <div class="addPublication">
        <p class= "getemail">${user ? user.email : ''}</p>
    <div class= "container-addpost">   
    <div> 
        <img class= "photo-publication" src="../img/addphoto.png">
    </div>
    <div class= "text-publication">
        <a class="textaddpost" href="/postForm" id="addpublications"><img class="icon-plus" src="../img/plusazul.png"> Add Post</a>
    </div>
    </div> 
    </div>`;

    const publicationsDiv = document.createElement('div');
    publicationsDiv.classList.add('Poster');
    publicationsDiv.innerHTML = view;

    const btnAddPost = publicationsDiv.querySelector('#addpublications');
    btnAddPost.addEventListener('click', (event) => {
        event.preventDefault();
        onNavigate('/postForm');
    });
    return publicationsDiv;
};