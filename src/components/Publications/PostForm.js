import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"
import { savePost } from "../../lib/firebase.js"

export const PostForm = () => {
    const viewInfo = `
<div id="addPublication">
    <div class= "form-Background">
    <form action="" id="publicationsForm" class="form">
        <label for="title">Title of the book</label>
        <input class = "inputpost" type="text" id="title">
        <label for="rating">Rating</label>
        <input class = "inputpost" type="number" id="rating" min= 1 max=10>
        <label for="review">Review</label>
        <textarea class = "inputpost" type="text" id="review"></textarea>
        <div class="error-message" id="postMesseges"></div>
        <div class= "text-publication">
             <a class="textaddpost" href="/home" id="btnAddPoster"><img class="icon-post" src="../img/plusazul.png"> Add Post</a>
        </div>
      
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
    const db = firebase.firestore();
    btnAddPost.addEventListener('submit', async(event) => {
        event.preventDefault();

        const title = contentPost.querySelector('#title').value;
        const rating = contentPost.querySelector('#rating').value;
        const review = contentPost.querySelector('#review').value;
        try {
            await savePost(title, rating, review)
            onNavigate('/home');
        } catch (error) {
            signupContainer.querySelector('#postMesseges').innerHTML = '&#x02716'.concat(' ', error.message)
        }


    });
    return post;
}