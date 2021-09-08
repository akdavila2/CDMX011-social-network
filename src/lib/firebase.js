import { onNavigate } from "../router/router.js";

const firebaseConfig = {

    apiKey: "AIzaSyCr9r5Gh3K7FUuYboZgmcX8NOcQcUr-frM",
    authDomain: "social-network-57ba3.firebaseapp.com",
    projectId: "social-network-57ba3",
    storageBucket: "social-network-57ba3.appspot.com",
    messagingSenderId: "22805731102",
    appId: "1:22805731102:web:e9efc5d4c0937476979b0f"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Colocando el metodo de firebase en una constante.
const auth = firebase.auth();
// Initialize Firestore
const db = firebase.firestore();

//Metodo que me permite autenticar al  usuario con usuario y contraseña
export const register = (email, password) => auth
    .createUserWithEmailAndPassword(email, password);

//Metodo que me permite acceder a mi cuenta con usuario y contraseña
export const login = (email, password) => auth
    .signInWithEmailAndPassword(email, password);

//Metodo para obtener al usuario que accedio 

export const getUser = () => auth.currentUser;

//Metodo para hacer que un usuario salga de la sesión
export const signOut = () => auth.signOut();

//Metodo que indica si el usuario tiene la sesión activa

export const activeSession = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            if (window.location.origin) {
                onNavigate('/home');
            } else {
                window.location
            }
        } else {
            onNavigate('/');
        }
    })
}


//Metodo para loguearse con Google

const provider = new firebase.auth.GoogleAuthProvider();
export const loginGoogle = () => auth
    .signInWithPopup(provider);

//Funcion para guardar post en mi coleccion de posts

export const savePost = (title, rating, review, user, date) =>
    db.collection('posts').doc().set({
        title,
        rating,
        review,
        user,
        date
    });

//Función para obtener mis posts de la base de datos firestore

export const getPost = () => db.collection('posts').get();

//Funcion para que se actualicen los post 

export const onGetPost = (callback) => db.collection('posts').onSnapshot(callback);

export const deletePosts = (id) => db.collection('posts').doc(id).delete();

export const updatePost = (id, updatedPosts) => db.collection('posts').doc(id).update(updatedPosts);