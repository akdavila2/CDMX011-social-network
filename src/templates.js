/* eslint-disable spaced-comment */
/* eslint-disable indent */
//template pagina principal login
import { navigate } from './main.js';
//console.log('soy onNavigate', onNavigate);
export const login = () => {
        const view = `
    <form name="login">
        <label for="email">Email</label>
            <input id='email' type="text">
        <label for="password">Password</label>
            <input id='password' type="password">
        <a href="#" onclick="navigate('/poster')"><button>Login</button></a>
        <label for="withgoogle"><img src="img/icongoogle.png">Login with Google</label>
        <label for="">You do not have an account</label>
        <a href="#" onclick="navigate('/signUp')"><button>Sign Up</button></a>
    </form>
`;
        return view;
    }
    //template registro de ususario
export const signUp = () => {
        const view = `
    <form name="signUp">
        <label for="username">Username</label>
            <input id='username' type="text">
        <label for="email">Email</label>
            <input id='email' type="text">
        <label for="password">Password</label>
            <input id='password' type="password">
        <label for="repeat-password">Confirm Password</label>
            <input id='confirmpass' type="password">
    </form>
`;
        return view;
    }
    //template usuario logueado y puedo agregar poster o cerrar sesion
export const poster = () => {
    const view = `
    <nav class="menu">
        <ul>
            <li><h5>Username</h5></li>
            <li><a href="#" onclick="navigate('/')"><h5>Sign Off</h5></a></li>
            <li><a href="#"><h5>Add post</h5></a></li>
        </ul>
    </nav>
    <section>
        <div id="poster"></div>
    </section>
`;
    return view;
}