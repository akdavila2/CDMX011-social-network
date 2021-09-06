import { onGetPosts, deletePost, getUser } from "../../lib/firebase.js";

export const RendPosts = () => {


    const posts = document.createElement('div')
    posts.classList.add("container-posts")

    const content = document.createElement('div')
    content.classList.add("profile-content")
   
    const user = getUser()
    onGetPosts((querySnapshot) => {
        content.innerHTML = ""
        querySnapshot.forEach(doc=> {
            const post = doc.data()
            post.id = doc.id
            content.innerHTML += 
                `<div class="review-container">
                <div class="user-data">
                    <p class="getemail">${user? user.email : ''}</p>
                    <p class="getemail">${post.date}</p>
                </div>
                <div class="container-review">
                    <div class="title-rating">
                        <p>${post.title}</p>
                        <p>${post.rating}</p>
                        <p>${post.user}</p>
                    </div>
                    <div class="review-text">
                        <p>${post.review}</p>
                    </div>
                </div>
                <div class="texticonspost">
                    <i class="icon-like" src="../img/heart-solid.svg"></i>
                    <div class="delete-edit">
                        <a  class="btn-delete"><img class="icon-post btn-delete" data-id=${post.id} src="../img/icons8-borrar-para-siempre-50.png"></a>
                        <a  class="btn-edit"><img class="icon-post" src="../img/icons8-editar-50.png"></a>
                    </div>
                </div>
                </div>
                `
            const btnDelete = document.querySelectorAll('.btn-delete')
            btnDelete.forEach((btn)=> {
                btn.addEventListener('click', async (e) => {
                    await deletePost(e.target.dataset.id)
                })
            })
        })
    })
   
    

    posts.appendChild(content)
    return posts
}
