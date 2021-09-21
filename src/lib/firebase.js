/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/router.js';

const firebaseConfig = {
    apiKey: 'AIzaSyCr9r5Gh3K7FUuYboZgmcX8NOcQcUr-frM',
    authDomain: 'social-network-57ba3.firebaseapp.com',
    projectId: 'social-network-57ba3',
    storageBucket: 'social-network-57ba3.appspot.com',
    messagingSenderId: '22805731102',
    appId: '1:22805731102:web:e9efc5d4c0937476979b0f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// // Colocando el metodo de firebase en una constante.
// const auth = firebase.auth();
// // Initialize Firestore
// const db = firebase.firestore();

// Metodo que me permite autenticar al  usuario con usuario y contraseña
export const register = (email, password) => firebase.auth()
    .createUserWithEmailAndPassword(email, password);

// Metodo que me permite acceder a mi cuenta con usuario y contraseña
export const login = (email, password) => firebase.auth()
    .signInWithEmailAndPassword(email, password);

// Metodo para obtener al usuario que accedio

export const getUser = () => firebase.auth().currentUser;

// Metodo para hacer que un usuario salga de la sesión
export const signOut = () => firebase.auth().signOut();

// Metodo que indica si el usuario tiene la sesión activa

export const activeSession = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (window.location.origin) {
                onNavigate('/home');
            }
        } else {
            onNavigate('/');
        }
    });
};
// Metodo para loguearse con Google
export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};
// Firestore
// Funcion para guardar post en mi coleccion de posts

export const savePost = (title, rating, review, user, date) => firebase.firestore().collection('posts').doc().set({
    title,
    rating,
    review,
    user,
    date,
    likes: [],
});

// Función para obtener mis posts de la base de datos firestore por fechas descendente recurso https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=es
export const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();

// Funcion para que se actualicen los post

export const onGetPost = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

export const deletePosts = (id) => firebase.firestore().collection('posts').doc(id).delete();

export const updatePost = (id, updatedPosts) => firebase.firestore().collection('posts').doc(id).update(updatedPosts);

export const likePost = (postId) => {
    const email = firebase.auth().currentUser.email;
    return firebase.firestore().collection('posts').doc(postId).update({
        likes: firebase.firestore.FieldValue.arrayUnion(email),
    });
};
export const unLikePost = (postId) => {
    const email = firebase.auth().currentUser.email;
    return firebase.firestore().collection('posts').doc(postId).update({
        likes: firebase.firestore.FieldValue.arrayRemove(email),
    });
};