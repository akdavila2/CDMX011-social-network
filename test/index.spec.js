/**
 * @jest-environment jsdom
 */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
import './globals/firebaseTest.js';
import { render } from '../src/utils.js';
import { Login } from '../src/components/Login.js';
import { SignUp } from '../src/components/SignUp.js';
import { PostForm } from '../src/components/Publications/PostForm.js';
// Login component tests
const delay = (timeInMs = 100) => new Promise((resolve) => setTimeout(resolve, timeInMs));
describe('Login', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    const loginForm = (email, password) => {
        rootDiv.querySelector('#loginEmail').value = email;
        rootDiv.querySelector('#loginPassword').value = password;
        rootDiv.querySelector('#btnLogin').click();
    };
    it('should be a function', () => {
        expect(typeof Login).toBe('function');
    });
    it('Should render the login screen', () => {
        render(rootDiv, Login());
        expect(rootDiv.innerHTML).toMatchSnapshot();
    });
    it('Should login user successfully', async() => {
        const email = 'test@labo.com';
        const password = '123456';
        const user = { email, uid: '42xtUMfM3cSZ61Arn4aH' }; // un objeto dummy que representa el user
        const mockSignInWithEmailAndPassword = jest.fn();
        mockSignInWithEmailAndPassword.mockResolvedValue(user);
        const mockFirebaseAuth = {
            signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
            currentUser: user,
        };
        firebase.auth = () => mockFirebaseAuth;
        render(rootDiv, Login());
        loginForm(email, password);
        await delay(100);
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    });
    it('shows an error message when credentials are invalid', async() => {
        const email = 'test@labo.com';
        const password = 'invalidpassword';
        const errorMessage = 'Invalid credentials!';
        const mockSignInWithEmailAndPassword = jest.fn();
        mockSignInWithEmailAndPassword.mockRejectedValue(new Error(errorMessage));

        const mockFirebaseAuth = {
            signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
        };
        firebase.auth = () => mockFirebaseAuth;

        render(rootDiv, Login());
        loginForm(email, password);
        await delay(100);
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
        expect(rootDiv.innerHTML).toContain(errorMessage);
    });
    it('Expected event when clicking the signup button', () => {
        const btnSignUp = rootDiv.querySelector('#signup');
        btnSignUp.click();
        expect(btnSignUp.outerHTML).toBe('<button type="submit" id="signup">Sign Up</button>');
    });
});

// SignUp component tests
describe('SignUp', () => {
    document.body.innerHTML = '<div id="root"></div>';
    it('Should render SignUp', () => {
        const rootDiv = document.getElementById('root');
        const component = SignUp();
        render(rootDiv, component);
        expect(rootDiv.innerHTML).toMatchSnapshot();
    });
    it('Should Login the user when the SignUp button is clicked', () => {
        const mockSignUp = jest.fn();
        mockSignUp.mockImplementation(() => Promise.resolve());

        firebase.auth = jest.fn().mockImplementation(() => ({
            createUserWithEmailAndPassword: mockSignUp,
        }));

        const rootDiv = document.getElementById('root');
        const component = SignUp();
        render(rootDiv, component);

        const email = 'karina@labo.com';
        const password = '123456';
        const signUpPassword2 = '123456';

        document.querySelector('#signupEmail').value = email;
        document.querySelector('#signupPassword').value = password;
        document.querySelector('#signupPassword2').value = signUpPassword2;
        const btnSignUp = document.getElementById('btnSendSignUp');
        btnSignUp.click();
        expect(mockSignUp).toHaveBeenCalledWith(email, password);
    });
    it('Expected event when clicking the signup button', () => {
        const btnSignUp = document.getElementById('btnSendSignUp');
        btnSignUp.click();
        expect(btnSignUp.outerHTML).toBe('<button type="submit" id="btnSendSignUp">Sign Up</button>');
    });
});

// RendPosts component test
describe('PostForm', () => {
    document.body.innerHTML = '<div id="root"></div>';
    it('Should render', () => {
        const rootDiv = document.getElementById('root');
        const component = PostForm();
        render(rootDiv, component);
        expect(rootDiv.innerHTML).toMatchSnapshot();
    });
    it('Expected event when clicking the AddPosts button', () => {
        const btnAddPost = document.querySelector('#btnAddPoster');
        btnAddPost.click();
        expect(btnAddPost.outerHTML).toBe('<button class="btnPost" id="btnAddPoster" type="submit"><img class="icon-plus" src="../img/plusazul.png">Add Post</button>');
    });
});