import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"
import { savePosts, getUser} from "../../lib/firebase.js"

export const Post = () => {
    const viewInfo = `
        <div id="addPublication">
            <div class= "form-Background">
                <form action="" id="publicationsForm" class="form">
                    <label for="Username">Title of the book</label>
                    <input class = "inputpost" type="text" id="title">
                    <label for="rating">Rating</label>
                    <input class = "inputpost" type="number" id="rating" min= 1 max=10>
                    <label for="review">Review</label>
                    <textarea class = "inputpost" type="text" id="review"></textarea>
                    <button class="btnPost" id="btnAddPost" type="submit"><img class="icon-post" src="../img/plusazul.png">Add Post</button>
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
    const btnAddPost = contentPost.querySelector('#btnAddPost');

    const form = contentPost.querySelector('#publicationsForm')
    const user = getUser()

    const dateJS = new Date()
    const dateToday = dateJS.toDateString()

    btnAddPost.addEventListener('click', async (e) => {
        let title = form['title'].value
        let rating = form['rating'].value
        let review = form['review'].value
        console.log(dateJS)
        e.preventDefault();
        try {
            await savePosts(title, rating, review, user.email, dateToday)
            onNavigate('/home')
        } catch(error){
            console.log(error)
        }

    });
    return post;
}