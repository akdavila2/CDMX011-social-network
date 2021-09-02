import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"

export const Post = () => {
    const viewInfo = `
    <div class="add-post">
        <form id="pblicationsForm" class="form">
            <label for="reviewTitle">Book title</label>
            <input type="text" id="reviewTitle" required>
            <label for="reviewRate">Rating</label>
            <input type="number" id="reviewRate" required>
            <label for="review">Review</label>
            <input type="text" id="review" required>
            <button class"btnPoster" id="btnAddPost" type="submit">Add Post</button>
        </form>
    </div>
    `

    const addPost = document.createElement('div')

    addPost.appendChild(Navbar())

    const postForm = document.createElement('div')
    postForm.classList.add('containerposter')
    postForm.innerHTML = viewInfo;

    addPost.appendChild(postForm)

    const btnAddPost = addPost.querySelector('#btnAddPost');

    btnAddPost.addEventListener('click', (e) => {
        e.preventDefault()
        //mandar los datos del form a firestore
        onNavigate('/home')
    });


    return addPost;
}