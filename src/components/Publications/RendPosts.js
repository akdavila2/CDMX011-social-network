/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
/* eslint-disable indent */
import { onGetPost, deletePosts, getPost, getUser, likePost, unLikePost } from '../../lib/firebase.js';
import { onNavigate } from '../../router/router.js';

export let editStatus = false;
export let editPost;
export let idPostEdit;

export const RendPosts = () => {
    editStatus = false;
    idPostEdit = '';
    editPost = '';
    const user = getUser();
    const posts = document.createElement('div');
    posts.classList.add('container-posts');

    onGetPost((querySnapshot) => {
        posts.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const post = doc.data();
            const likedByUser = post.likes.includes(user.email);
            post.id = doc.id;
            let countLikes = doc.data().likes.length;
            posts.innerHTML += `
                <div class='review-container'>
                    <div class='user-data'>
                        <p class='getemail'> ${post.user}</p>
                        <p class='getemail'>${post.date}</p>
                    </div>
                    <div class='container-review'>
                        <div class='title-rating'>
                            <p id='titlePost'>${post.title} </p>
                            <p id='ratingPost'>Rating: ${post.rating}/10</p>
                        </div>
                        <div id='reviewPost' class='review-text'>
                            <textare readonly>${post.review}</textare>
                        </div>
                    </div>
                    <div class='texticonspost'>
                    <div class= 'iconDIV-like'>
                         <img class='icon-like btn-like' id='likeIcon${post.id}' data-id='${post.id}'  src='${likedByUser ? '../../img/heart.svg' : '../../img/corazon vacio.png'}'><span>${countLikes === 0 ? '' : countLikes}</span></img>
                    </div>    
                        <div class='delete-edit' id='user-buttons-${post.id}'>
                        <img data-id='${post.id}' class='icon-post icon-delete' src='../img/icons8-borrar-para-siempre-50.png'>
                        <img data-id='${post.id}' class='icon-post icon-edit' src='../img/icons8-editar-50.png'>
                        </div>
                    </div>
                    <!--<div class='error-message' id='postsMessages'></div>-->
                </div>
                `;

            const deleteEdit = posts.querySelector(`#user-buttons-${post.id}`);
            if (post.user !== getUser().email) {
                deleteEdit.style.display = 'none';
            }

            const iconLike = posts.querySelectorAll('.btn-like');
            iconLike.forEach((icon) => {
                icon.addEventListener('click', async(e) => {
                    e.preventDefault();
                    const postId = e.target.dataset.id;
                    const docs = await getPost(postId);
                    const thisPosts = docs.data();
                    if (!thisPosts.likes.includes(user.email)) {
                        try {
                            await likePost(postId);
                            console.log('dando like');
                            icon.src = '../../img/heart.svg';
                            icon.classList.add('btn-like--solid');
                        } catch (error) {
                            console.error('error', error);
                        }
                    } else {
                        try {
                            await unLikePost(postId);
                            console.log('quitando like');
                            icon.classList.remove('btn-like--solid');
                            icon.src = '../../img/corazon vacio.png';
                        } catch (error) {
                            console.error('error', error);
                        }
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
                            text: 'Are you sure to delete this post',
                        });
                        await deletePosts(event.target.dataset.id);
                    } catch (error) {
                        console.error('error', error);
                    }
                });
            });

            const iconEdit = document.querySelectorAll('.icon-edit');
            iconEdit.forEach((icon) => {
                icon.addEventListener('click', async(event) => {
                    event.preventDefault();
                    try {
                        const docs = await getPost(event.target.dataset.id);
                        console.log('estoy editando');
                        editPost = docs.data();
                        console.log(editPost);
                        editStatus = true;
                        idPostEdit = docs.id;
                        onNavigate('/postForm');
                    } catch (error) {
                        console.error('error', error);
                    }
                });
            });
        });
    });

    return posts;
};

// <img src="../../img/heart.svg" alt="">