export const pages = {
    signin: {
        path: '/signin',
        template: `<div class="acount" >
            <div class="acount-header">
                <img src="../img/logo-nav.png" class="acount-logo"alt="LoveBook logo">
            </div>
            <div class="log-content">
                <div class="login-user">
                    <form action="" id="login-form" class="form">
                        <label for="login-email">Email</label>
                        <input type="email" id="login-email" required>
                        <label for="login-password">Password</label>                           
                        <input type="password" id="login-password" required>
                        <button type="submit" class="btn login-btn">Login</button>
                    </form>
                </div>
                <div class="division">
                <hr class="division-1"> 
                <p class="division-2">O</p> 
                <hr class="division-3">
                </div>
                
                <div class="login-google">
                <img src="../img/icongoogle.png" alt="logo google" class="logo-google"> <p> Login with google</p>
                </div>
                <div>
                    <button id="signup"><a href="#/signup"> Create an account</a></button>
                </div>
            </div>
        </div>
        <div class="division">
            <hr class="division-1">
            <p class="division-2">O</p>
            <hr class="division-3">
        </div>
        
`
    },
    navBar: {
        template: `<nav> 
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
    }
}