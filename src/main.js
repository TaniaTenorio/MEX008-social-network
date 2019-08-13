// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const signUp = document.getElementById("confirm-signup");

const logOffBtn = document.getElementById("log-off");

"use strict";
// import Navbar from './modules/navbar.js'
import intro from './modules/intro.js';
import login from './modules/login.js';
import signin from './modules/signIn.js';
import userform from './modules/userForm.js';
import userinfo from './modules/userInfo.js';
import welcome from './modules/welcome.js';
import timeline from './modules/timeline.js';
import location from './modules/location.js';
import Error404 from './modules/error.js';
import Utils from './modules/utils.js';

// List of supported routes.
// Any url other than these routes will throw a 404 error
const routes = {
    "/": intro,
    "/intro": intro,
    '/login' : login,
    '/signin': signin,
    '/userform': userform,
    '/userinfo': userinfo,
    '/welcome': welcome,
    '/timeline': timeline,
    '/location': location,
    '/error': Error404
};

// Router takes a URL, checks against the list of supported routes and then renders the corresponding content page
const router = async () => { // function always returns a promise

    // load view element
    // const header  = document.getElementById('header-container'); 
    const content = null || document.getElementById('content'); // If the first value is false, it checks the second value 
    
    // Render the header of the page
    // header.innerHTML = await Navbar.render(); // wait till the promise resolves
    // await Navbar.after_render();
    
    // Get the page from the hash of supported routes.
    let request = Utils.parseRequestURL();
    // Parse the URL and if it has an id part, change it with the string ":id"
    // condition ? exprIfTrue : exprIfFalse 
    let parsedURL = (request.resource ? '/' + request.resource : '/') 
        + (request.id ? '/:id' : '') 
        + (request.verb ? '/' + request.verb : '');
        //console.log(parsedURL);
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    // console.log(parsedURL);
    
    let page = routes[parsedURL] ? routes[parsedURL] : Error404; 
    // console.log(page);
    content.innerHTML = await page.render();
    await page.after_render();    
}

// Listen on hash change:
window.addEventListener('hashchange', router); // The event occurs when there has been changes to the anchor part of a URL
// Listen on page load:
window.addEventListener('load', router); // The event occurs when an object has loaded

//Codigo de Firebase







// const observe = () => {
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         write(user);
//         console.log("existe usuario activo");
//       // User is signed in.
//       let displayName = user.displayName;
//       let email = user.email;
//       let emailVerified = user.emailVerified;
//       console.log(user.emailVerified);
//       let photoURL = user.photoURL;
//       let isAnonymous = user.isAnonymous;
//       let uid = user.uid;
//       let providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       console.log("no existe usuario activo");
//       let provider = firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithRedirect(provider);
//       // ...
//     }
//   });
// };
// observe();

// const write = (user) => {
//     // let user1 = user; 
//     let content = document.getElementById ("content");
//     if(user.emailVerified){
//         content.innerHTML = "Login exitoso";
//     }
// };

const logOff = () => {
    firebase.auth().signOut()
    .then(()=> {
console.log("saliendo...");
    })
    .catch((error) => {
console.log(error);
    });
};
logOffBtn.addEventListener("click",logOff);



//Se inicializa Firestore

// firebase.initializeApp({
//     apiKey: "AIzaSyDZaNmRtlEnDMsa_tuR9iapQoZ8vTUxhNA",
//     authDomain: "foodlova-be05e.firebaseapp.com",
//     projectId: "foodlova-be05e"
//   });



// export default {
//     db,
//     singUp,
//     logInBtn,
//     logOffBtn,
//     register,
//     functionLogin,
//     observe,
//     write,
//     logOff,
//     verify,
// };