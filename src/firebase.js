const firebaseConfig = {
    apiKey: 'AIzaSyAxKjqTudxBWi9j9i4IDKn450hmM1m_w3A',
    authDomain: 'red-social-coaches.firebaseapp.com',
    projectId: 'red-social-coaches',
    appId: '1:489293961166:web:e0ae10e7b6db857d26fd9f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Colocando el metodo de firebase en una constante.
const auth = firebase.auth();
// Initialize Firestore
const fireSt = firebase.firestore();

//Metodo que me permite registrar usuario con usuario y contraseña
export const authentification = (email, password) => auth
    .createUserWithEmailAndPassword(email, password);

//Metodo que me permite acceder a mi cuenta con usuario y contraseña
export const login = (email, password) => auth
    .signInWithEmailAndPassword(email, password);

//Metodo para hacer que un usuario salga de la sesión
export const logout = () => auth.signOut();

//Metodo que indica si el usuario tiene la sesión activa

export const activeSession = () => auth
    .onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

//Metodo para obtener al usuario que accedio 

export const getUser = () => auth.currentUser;

//Método para actualizar informacion basica del perfil updateProfile

getUser.updateProfile({
    // displayName: "Jane Q. User",
    // photoURL: "https://example.com/jane-q-user/profile.jpg"
})

//Metodo para enviar un mensaje de verificación al usuario 

export const sendEmail = () => auth
    .sendEmailVerification()