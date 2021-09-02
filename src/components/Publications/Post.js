import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"
export const Post = () => {
    const viewInfo = `
<div id="addPublication">
    <div class= "form-Background">
    <form action="" id="publicationsForm" class="form">
        <label for="Username">Title of the book</label>
        <input class = "inputpost" type="text" id="Title">
        <label for="rating">Rating</label>
        <input class = "inputpost" type="number" id="rating" max=1 0>
        <label for="review">Review</label>
        <textarea class = "inputpost" type="text" id="Review"></textarea>

        <button class="btnPost" id="btnAddPoster" type="submit"><img class="icon-post" src="../img/plusazul.png">Add Post</button>

    </form>
    </div>
</div>
`
    const post = document.createElement('div');
    post.appendChild(Navbar());
    const contentPost = document.createElement('div');
    contentPost.classList.add('containerpost');
    contentPost.innerHTML = viewInfo;
    post.appendChild(contentPost);
    const btnAddPost = contentPost.querySelector('#btnAddPoster');
    btnAddPost.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home');
    });
    return post;
}