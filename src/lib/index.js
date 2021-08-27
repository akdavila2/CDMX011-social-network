import { onNavigate } from "../router/router.js"; 

export const authentification = (email, password) => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return 'exitoso';
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            return errorMessage;
        });
}

 export const Login = (email, password) => {
     auth
         .signInWithEmailAndPassword(email, password)
         .then((userCredential) => {
             const user = userCredential.user;
             console.log(user);
             return 'exitoso';
         })

 }

 export const LogedUser = () => {
 firebase.auth().onAuthStateChanged((user) => {
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
 }

export const Logout = () => {
  auth.signOut()
    .then(() => {
        console.log("sign out")
        header.innerHTML = ""
    }).catch((error) => { // An error happened. 
    });
}