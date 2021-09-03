import { getUser } from "../../lib/firebase.js";

export const RendPosts = () => {
    const user = getUser();
    const date = new Date();
    const dateToday = date.toDateString();
    const viewContent =
    `<div class="user-data">
        <p class="getemail"> ${user ? user.email : ''}</p>
        <p class="getemail">${dateToday}</p>
    </div>
    <div class="container-review">
        <div class="title-rating">
            <p>title</p>
            <p>rating</p>
        </div>
        <div class="review-text">
            <p>este es el review</p>
        </div>
    </div>
    <div class="texticonspost">
        <i class="icon-like" src="../img/heart-solid.svg"></i>
        <div class="delete-edit">
            <img class="icon-post" src="../img/icons8-borrar-para-siempre-50.png">
            <img class="icon-post" src="../img/icons8-editar-50.png">
        </div>
    </div>
    `

    const posts = document.createElement('div')
    posts.classList.add("container-posts")

    const content = document.createElement('div')
    content.classList.add("profile-content")
    content.innerHTML = viewContent
    posts.appendChild(content)

    return posts
}
