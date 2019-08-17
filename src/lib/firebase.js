let db = firebase.firestore();
window.firebaseFunction = {
    register: () => {
        // console.log("diste un click");
        let userName = document.getElementById("username").value;
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("create-password").value;
        let confirmPassword = document.getElementById("confirm-password").value;
        if (userName === '') {
            alert('Te falta escribir tu nombre');
            return;
        }
        if (email.length < 4) {
            alert('Tu correo no es valido');
            return;
        }
        if (password.length < 6) {
            alert('Tu contraseña debe tener 6 caracteres por lo menos');
            return;
        }
        if (password !== confirmPassword) {
            alert('la contraseña no es la misma');
            return;
        }
        //PENDIENTE TERMINOS Y CONDICIONES
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // let usuario = user.
                window.firebaseFunction.verify();
                location.hash = "#/userinfo"// solo despues de registrarte correctamente nos redirige a la siguiente pagina.
            })
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
            return alert("felicidades estas registrado");
    },
    functionLogin: () => {
        let logInEmail = document.getElementById("login-email").value;
        let logInPassword = document.getElementById("login-password").value;
        if (logInEmail === "") {
            alert("Escribe tu correo electrónico");
            return;
        }
        if (logInPassword === "") {
            alert("Escribe tu contraseña");
            return;
        }
        firebase.auth().signInWithEmailAndPassword(logInEmail, logInPassword)
            .then(() =>{
                location.hash = "#/timeline";
            })
            .catch(function (error) {
                // Handle Errors here.
                alert("Usuario y/o contraseña incorrectos");
                let errorCode = error.code;
                let errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);
            });
            return alert("Login Exitoso");
    },
    observe: () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // window.firebaseFunction.write(user);
                console.log("existe usuario activo");
                console.log(user);
              // User is signed in.
                let displayName = user.displayName;
                console.log(displayName);
                let email = user.email;
                let emailVerified = user.emailVerified;
                console.log(user.emailVerified);
                let photoURL = user.photoURL;
                let isAnonymous = user.isAnonymous;
                let uid = user.uid;
                let providerData = user.providerData;
              // ...
            } else {
              // User is signed out.
                console.log("no existe usuario activo");
              // ...
            }
        });

        return console.log("Observador activo");
    },

    // write: (user) => {
    //         // let user1 = user;
    //         // let content = document.getElementById("content");
    //     if (user.emailVerified) {
    //         // content.innerHTML = "Login exitoso";
    //     }
    // },

        // observe();
    verify: () => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification()
            .then(function () {
                alert("Revisa tu correo, debes verificar tu cuenta");
                /* console.log("enviando correo..."); */
          // Email sent.
            }).catch(function (error) {
                console.log(error);
          // An error happened.
            });

            return console.log("enviando correo...");
    },
    loginGoogle: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function (user) {
            console.log(user);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            console.log(token);
        // The signed-in user info.
            const userId = result.user;
            console.log(userId);
        }).catch(function (error) {
            // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        });
        return alert("Login con Google exitoso");
    },
    loginFacebook: () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
            // The signed-in user info.
        const user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
            // ...
        });
        return alert("Login con Google exitoso");
    },
    savePost: () => {
        let newPostsCollectionRef = db.collection("newPosts");
      db.collection("newPosts").add({
        textPost: document.getElementById("add-post").value
        })
            .then(function (docRef) {
                // console.log("Document written with ID: ", docRef.id);
                //limpiar el input despues de dar click
                textPost: document.getElementById("add-post").value = "";
                console.log("prueba")
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    },
    deletePost: (id) => {
    db.collection("newPosts").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
        }).catch(function (error) {
        console.error("Error removing document: ", error);
        });
    },
    //funcion de editar
    editPost: async (id, textPost) => {  
        // Set the "capital" field of the city 'DC'
         await db.collection("newPosts").doc(id).update({ 
            textPost
        });
        // .then(function () {
        //     console.log("Document successfully updated!");
        // })
        // .catch(function (error) {
        //     // The document probably doesn't exist.
        //     console.error("Error updating document: ", error);
        // });

    },
    logOff: () => {
        firebase.auth().signOut()
        .then(()=> {
    console.log("saliendo...");
    location.hash= "#/intro";
        })
        .catch((error) => {
    console.log(error);
        });
    }
};