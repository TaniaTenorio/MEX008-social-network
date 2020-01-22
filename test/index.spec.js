// importamos la funcion que vamos a testear/* 

//funciones importadas
import { register } from "../src//lib/firebase.js";//llamando función register
import { functionLogin } from "../src//lib/firebase.js";//llamando función login
import { observe } from "../src//lib/firebase.js";//llamando función observe
import { write } from "../src//lib/firebase.js";//llamando función write
import { verify } from "../src//lib/firebase.js";//llamando función verify
import { loginGoogle } from "../src//lib/firebase.js";//llamando función loginGoogle
import { loginFacebook } from "../src//lib/firebase.js";//llamando función loginFacebook



//Testeo para función register
describe('window.firebaseFunction.register', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.register).toBe('function');
  });
});

//Testeo para función login
describe('window.firebaseFunction.functionLogin', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.functionLogin).toBe('function');
  });
});

//Testeo para función observe
describe('window.firebaseFunction.observe', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.observe).toBe('function');
  });
});

//Testeo para función write
describe('window.firebaseFunction.write', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.write).toBe('function');
  });
});

//Testeo para función verify
describe('window.firebaseFunction.verify', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.verify).toBe('function');
  });
});

//Testeo para función login con Google
describe('window.firebaseFunction.loginGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.loginGoogle).toBe('function');
  });
});

//Testeo para función login con Facebook
describe('window.firebaseFunction.loginFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof window.firebaseFunction.loginFacebook).toBe('function');
  });
});