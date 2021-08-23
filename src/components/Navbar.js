export const Navbar = () => {
    const template = 
    `<nav> 
    <div class="logo-nav">
        <img class="logo-nav" src="../img/logo-nav2.png" alt="">
    </div>
    <div class="menu-nav">
        <ul>
            <li><a id="logout" href="">Sign off</a></li>
            <li><a href="#"><img src="../img/iconsusuario.png">Profile</a></li>
        </ul>
    </div>
    <div>
        <a href="#"><button >Add post</button> </a>
    </div>
</nav>
`
     return template
}