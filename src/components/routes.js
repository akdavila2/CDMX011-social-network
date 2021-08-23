import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Profile } from "./Profile.js";
import { Home } from "./Home.js";
export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/profile': Profile,
    '/home': Home,
};