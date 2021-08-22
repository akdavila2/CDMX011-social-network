import { onNavigate } from "../main.js";

/* eslint-disable indent */
export const Home = () => {
    return `
<nav>
  <div class="logo-nav">
    <img class="logo-nav" src="../img/logo-nav2.png" alt="">
  </div>
  <div class="menu-nav">
    <ul>
      <li><a id="logout" href="/">Sign off</a></li>
      <li>
        <a href="/profileUser"><img src="../img/iconsusuario.png">Profile</a>
      </li>
    </ul>
  </div>
  <div class="post">
    <button id="post" type="submit">Add post</button> 
  </div>
</nav>
`
};
export const eventHome = () => {
    const posts = document.getElementById('post');
    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => onNavigate('/'));
    posts.addEventListener('click', () => onNavigate('/post'));
}

// let outHome = [];
// const HomeDiv = document.createElement('div');
// const templates = document.getElementById('templates');
// outHome += view();
// HomeDiv.innerHTML = outHome;
// HomeDiv.classList.add('acount');
// templates.appendChild(HomeDiv);