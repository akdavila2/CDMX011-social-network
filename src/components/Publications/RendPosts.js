import { getUser } from "../../lib/firebase.js";
//import { getPost } from "../../lib/firebase.js";
import { onGetPost } from "../../lib/firebase.js";
import { deletePosts } from "../../lib/firebase.js";

export const RendPosts = () => {
    const posts = document.createElement('div');
    posts.classList.add("container-posts");
    const content = document.createElement('div');
    content.innerHTML = '';
    content.classList.add("profile-content");
    const user = getUser();
    const date = new Date();
    const dateToday = date.toDateString();
    window.addEventListener('DOMContentLoaded', async(event) => {
        console.log('Estoy en post de home');
        onGetPost((querySnapshot) => {

            querySnapshot.forEach(doc => {
                const dataPost = doc.data();
                //console.log(dataPost)
                const viewContent =
                    `<div class="user-data">
                                <p class="getemail"> ${user ? user.email : ''}</p>
                                <p class="getemail">${dateToday}</p>
                            </div>
                            <div class="container-review">
                                <div class="title-rating">
                                    <p id= "titlePost">Title: ${dataPost.title} </p>
                                    <p id="ratingPost">Rating: ${dataPost.rating}</p>
                                </div>
                                <div id="reviewPost" class="review-text">
                                    <p>${dataPost.review}</p>
                                </div>
                            </div>
                            <div class="texticonspost">
                                <i class="icon-like" src="../img/heart-solid.svg"></i>
                                <div class="delete-edit">
                                <a href="#" data-id="${doc.id}"><img class="icon-post icon-delete" src="../img/icons8-borrar-para-siempre-50.png"></a>
                                <a href="#" data-id="${doc.id}"><img class="icon-post icon-edit" src="../img/icons8-editar-50.png"></a>;
                                </div>
                            </div>
                            <div class="error-message" id="postsMessages"></div>
                        `;

                const iconDelete = content.querySelectorAll('.icon-delete');
                iconDelete.forEach(icon => {
                    icon.addEventListener('click', async(e) => {
                        console.log('e.target.dataset.id');
                        try {
                            await deletePosts(e.target.dataset.id);
                        } catch (error) {
                            console.log(error);
                        }
                    })
                });
                console.log(viewContent);
                content.innerHTML += viewContent;
            });
        });
    });
    posts.appendChild(content);
    return posts;
}






//                 const iconEdit = content.querySelectorAll('icon-edit');
//                 iconEdit.forEach((icon) => {
//                     icon.addEventListener('click', async(e) => {
//                         try {
//                             const doc = await getPost(e.target.dataset.id);
//                             const dataPost = doc.data();
// const title=
//                         }
//                     })
//                 })