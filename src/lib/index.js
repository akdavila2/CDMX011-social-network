// aqui exportaras las funciones que necesites

export const authentification = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });

};