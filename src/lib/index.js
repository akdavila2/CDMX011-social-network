// aqui exportaras las funciones que necesites

<<<<<<< HEAD
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export function firebaseSignup  (email, password)  {
  auth.createUserWithEmailAndPassword(email, password)  //es un método de firebse para recuperar email y contraseña  el auth es la abrebiaciónd el método para la función de firebase.auth()
  .then((userCredential) => {
      var user = userCredential.user;
      signupForm.reset();
      //poner los estilos necesarios para cerrar ventana modal (o en su caso para cambiar de página)
      return "signup"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage
    });
}

=======
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
>>>>>>> f438b595f8c1af74a138c2649612a9b7fbfd9f31
