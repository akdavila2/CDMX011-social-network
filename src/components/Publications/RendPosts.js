import { onGetPost, deletePosts, getPost, getUser, saveLikes } from "../../lib/firebase.js";
import { onNavigate } from "../../router/router.js";

export let editStatus = false;
export let editPost;
export let idPostEdit;

export const RendPosts = () => {
    editStatus = false;
    idPostEdit = '';
    editPost = '';

    const user = getUser();
    const posts = document.createElement('div');
    posts.classList.add("container-posts");

    console.log('Estoy en post de home');
    onGetPost((querySnapshot) => {
        posts.innerHTML = '';
        querySnapshot.forEach(doc => {
            const post = doc.data();
            post.id = doc.id;
            posts.innerHTML += `
                <div class="review-container">
                    <div class="user-data">
                        <p class="getemail"> ${post.user}</p>
                        <p class="getemail">${post.date}</p>
                    </div>
                    <div class="container-review">
                        <div class="title-rating">
                            <p id="titlePost">Title: ${post.title} </p>
                            <p id="ratingPost">Rating: ${post.rating}/10</p>
                        </div>
                        <div id="reviewPost" class="review-text">
                            <textare readonly>${post.review}</textare>
                        </div>
                    </div>
                    <div class="texticonspost">
                    <div class= "iconDIV-like">
                        <img class="icon-like" data-id="${post.id}"" src="../img/like.svg"></img>
                    </div>    
                        <div class="delete-edit" id="user-buttons-${post.id}">
                        <img data-id="${post.id}" class="icon-post icon-delete" src="../img/icons8-borrar-para-siempre-50.png">
                        <img data-id="${post.id}" class="icon-post icon-edit" src="../img/icons8-editar-50.png">
                        </div>
                    </div>
                    <!--<div class="error-message" id="postsMessages"></div>-->
                </div>
                `;

            const deleteEdit = posts.querySelector(`#user-buttons-${post.id}`)
            if (post.user === getUser().email) {
                console.log(deleteEdit)
            } else {
                deleteEdit.style.display = "none"
            }
            const iconLike = posts.querySelectorAll('.icon-like');
            iconLike.forEach((icon) => {
                icon.addEventListener('click', async(e) => {
                    e.preventDefault();
                    icon.src = '../img/heart.svg';
                    console.log('estoy dando like');
                    try {
                        const getLikes = await getPost(e.target.dataset.id);
                        let likesSavedData = doc.data().likes;
                        console.log('data', likesSavedData)
                        getLikes = await saveLikes(post.id, getUser())

                    } catch (error) {
                        console.log(error);
                    }


                });
            });

            const iconDelete = document.querySelectorAll('.icon-delete');
            iconDelete.forEach((icon) => {
                icon.addEventListener('click', async(event) => {
                    event.preventDefault();
                    try {
                        // alert('Are you sure to delete this post')
                        swal({
                            text: "Are you sure to delete this post",
                        });
                        //swal('Are you sure to delete this post');
                        await deletePosts(event.target.dataset.id);

                    } catch (error) {
                        console.log(error);
                    }
                })
            });

            const iconEdit = document.querySelectorAll('.icon-edit');
            iconEdit.forEach((icon) => {
                icon.addEventListener('click', async(event) => {
                    event.preventDefault()
                    const doci = await getPost(event.target.dataset.id);

                    editPost = doc.data();
                    editStatus = true;
                    idPostEdit = doc.id;

                    console.log(editPost);
                    onNavigate('/postForm');

                });
            });
        });
    });

    return posts;
}