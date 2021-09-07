import { onGetPosts, deletePost, getPost, getUser } from "../../lib/firebase.js";
import { onNavigate } from "../../router/router.js";

export let editStatus = false
export let editPost
export let idPostEdit

export const RendPosts = () => {
    editStatus = false
    idPostEdit = ""
    editPost = ""

    const user = getUser()
    const posts = document.createElement('div')
    posts.classList.add("container-posts") 
   
    onGetPosts((querySnapshot) => {
        posts.innerHTML = ""
        querySnapshot.forEach(doc=> {
            const post = doc.data()
            post.id = doc.id
            posts.innerHTML += 
                `<div class="review-container">
                    <div class="user-data">
                        <p class="getemail">${post.user}</p>
                        <p class="getemail">${post.date}</p>
                    </div>
                    <div class="container-review">
                        <div class="title-rating">
                            <p>${post.title}</p>
                            <p>${post.rating}/10</p>
                        </div>
                        <div class="review-text">
                            <p>${post.review}</p>
                        </div>
                    </div>
                    <div class="texticonspost">
                        <i class="icon-like" src="../img/heart-solid.svg"></i>
                        <div class="delete-edit user-buttons-${post.id}">
                            <img class="icon-post btn-delete" data-id=${post.id} src="../img/icons8-borrar-para-siempre-50.png">
                            <img class="icon-post btn-edit" data-id=${post.id} src="../img/icons8-editar-50.png">
                        </div>
                    </div>
                </div>
                `
            
            const deleteEdit = document.querySelector(`.user-buttons-${post.id}`)

            if (post.user === getUser().email){
                console.log(deleteEdit)
            } else {
                deleteEdit.style.display = "none"
            }
   
            const btnDelete = document.querySelectorAll('.btn-delete')
            btnDelete.forEach((btn)=> {
                btn.addEventListener('click', async (e) => {
                    await deletePost(e.target.dataset.id)
                })
            })

            const btnEdit = document.querySelectorAll('.btn-edit')
            btnEdit.forEach((btn) => {
                btn.addEventListener('click', async (e) => {
                    const doc = await getPost(e.target.dataset.id)
                    editPost = doc.data()

                    editStatus = true
                    idPostEdit = doc.id

                    onNavigate('/post')
                })
            }) 
        })
    }) 
    


    return posts
}
