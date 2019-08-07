"use strict";

// import Navbar from './modules/navbar.js'

import intro     from './modules/intro.js';
import login from './modules/login.js';
import signin from './modules/signIn.js'
import userform from './modules/userForm.js'
import userinfo from './modules/userInfo.js'
import welcome from './modules/welcome.js'

import Error404 from './modules/error.js'

import Utils from './modules/utils.js'

// List of supported routes. 
// Any url other than these routes will throw a 404 error
const routes = {
    "/": intro,
    '/login' : login,
    '/signin': signin,
    '/userform': userform,
    '/userinfo': userinfo,
    '/welcome': welcome,
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
    console.log(parsedURL);
    
    let page = routes[parsedURL] ? routes[parsedURL] : Error404; 
    console.log(page);
    content.innerHTML = await page.render();
    await page.after_render();    
}

// Listen on hash change:
window.addEventListener('hashchange', router); // The event occurs when there has been changes to the anchor part of a URL
// Listen on page load:
window.addEventListener('load', router); // The event occurs when an object has loaded