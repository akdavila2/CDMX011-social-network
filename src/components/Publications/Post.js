import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"

export const Post = () => {
    const viewInfo = `
    <div class="add-post">
    <form action="" id="pblicationsForm" class="form">
        <label for="Username">Title of the book</label>
        <input type="text" id="Title">
        <label for="Username">Calification</label>
        <input type="text" id="Calification">
        <label for="Username">Review</label>
        <input type="text" id="Review">
     
        <button class"btnPoster" id="btnAddPoster" type="submit">Add Post</button>
        </div>
    </form>
</div>
    `

    const post = document.createElement('div')

    post.appendChild(Navbar())


    const contentPoster = document.createElement('div')
    contentPoster.classList.add('containerposter')
    contentPoster.innerHTML = viewInfo;

    post.appendChild(contentPoster);

    const btnAddPost = contentPoster.querySelector('#btnAddPoster');

    btnAddPost.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home');
    });


    return post;
}