/**
 * @jest-environment jsdom
 */
/* eslint-disable eol-last */
/* eslint-disable indent */
import './globals/firebaseTest.js';
import { render } from '../src/utils.js';
import { Login } from '../src/components/Login.js';
import { SignUp } from '../src/components/SignUp.js';
import { PostForm } from '../src/components/Publications/PostForm.js';

// Login component tests

describe('Login', () => {
    document.body.innerHTML = '<div id="root"></div>';
    it('Should render', () => {
        const rootDiv = document.getElementById('root');
        const component = Login();
        render(rootDiv, component);
        expect(rootDiv.innerHTML).toMatchSnapshot();
    });
    it('Should log in the user when the Login button is clicked', () => {
        const mockLogin = jest.fn();
        mockLogin.mockImplementation(() => Promise.resolve());

        firebase.auth = jest.fn().mockImplementation(() => ({
            signInWithEmailAndPassword: mockLogin,
        }));
        const rootDiv = document.getElementById('root');
        const component = Login();
        render(rootDiv, component);

        const email = 'karina@labo.com';
        const password = '123456';

        document.getElementById('loginEmail').value = email;
        document.getElementById('loginPassword').value = password;

        const btnLogin = document.getElementById('btnLogin');
        btnLogin.click();
        expect(mockLogin).toHaveBeenCalledWith(email, password);
    });
    it('Expected event when clicking the signup button', () => {
        const btnSignUp = document.getElementById('signup');
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
});
it('Expected event when clicking the AddPosts button', () => {
    const btnAddPost = document.querySelector('#btnAddPoster');
    btnAddPost.click();
    expect(btnAddPost.outerHTML).toBe('<button class="btnPost" id="btnAddPoster" type="submit"><img class="icon-plus" src="../img/plusazul.png">Add Post</button>');
});