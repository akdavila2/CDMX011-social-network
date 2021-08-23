/* eslint-disable indent */

export function Home() {
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
`;
};
