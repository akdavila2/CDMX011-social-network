import { Login } from './actions/Login.js';
import { SignUp } from './actions/SignUp.js';
import { Profile } from './actions/Profile.js';
import { Home } from './actions/Home.js';

export const actions = {
  '/': Login,
  '/signUp': SignUp,
  '/profile': Profile,
  '/home': Home,
};
