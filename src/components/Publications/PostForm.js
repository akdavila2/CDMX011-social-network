/* eslint-disable import/no-useless-path-segments */
/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../../router/router.js';
import { Navbar } from '../Navbar.js';
import { savePost, getUser, updatePost } from '../../lib/firebase.js';
import { idPostEdit, editStatus, editPost } from '../Publications/RendPosts.js';

export const PostForm = () => {
    const viewInfo = `
<div id="addPublication">
    <div class= "form-Background">
    <form id="publicationsForm" class="form">
        <label for="title">Title of the book</label>
        <input class = "inputpost" type="text" id="title" Required>
        <label for="rating">Rating</label>
        <input class = "inputpost" type="number" id="rating" min= 1 max=10 Required>
        <label for="review">Review</label>
        <textarea class = "inputpost" type="text" id="review"></textarea Required>
        <div class="error-formPost" id="postMesseges"></div>
        <button class="btnPost" id="btnAddPoster" type="submit"><img class="icon-plus" src="../img/plusazul.png">Add Post</button>    
    </form>
    </div>
</div>
`;
    const posts = document.createElement('div');
    posts.appendChild(Navbar());

    const contentPost = document.createElement('div');
    contentPost.classList.add('containerpost');
    contentPost.innerHTML = viewInfo;

    posts.appendChild(contentPost);

    const errorMessage = contentPost.querySelector('#postMesseges');

    const formPost = contentPost.querySelector('#publicationsForm');
    const btnAddPost = contentPost.querySelector('#btnAddPoster');
    const title = contentPost.querySelector('#title');
    const rating = contentPost.querySelector('#rating');
    const review = contentPost.querySelector('#review');

    const user = getUser();
    const date = new Date();
    const dateToday = date.toDateString();

    if (!editStatus) {
        formPost.addEventListener('submit', async(event) => {
            event.preventDefault();
            try {
                await savePost(title.value, rating.value, review.value, user.email, dateToday);
                onNavigate('/home');
            } catch (error) {
                errorMessage.innerHTML = '&#x02716'.concat(' ', error.message);
            }
        });
    } else {
        title.value = editPost.title;
        rating.value = editPost.rating;
        review.value = editPost.review;
        btnAddPost.textContent = 'Update';
        formPost.addEventListener('submit', async(event) => {
            event.preventDefault();
            try {
                await updatePost(idPostEdit, {
                    title: title.value,
                    rating: rating.value,
                    review: review.value,
                });
                onNavigate('/home');
            } catch (error) {
                errorMessage.innerHTML = '&#x02716'.concat(' ', error.message);
            }
        });
    }
    return posts;
};