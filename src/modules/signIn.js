let signIn = {
render : async () => {
  let view =  /*html*/`
  <main class="sign-in">
    <div class="header">
      <img class="logo" src="./Imagenes/foodlova.png" alt="logo">
      <img class="small-imgs" src="./Imagenes/fila_imgs.png" alt="imgs comida">
    </div>
    <div class="sign-in-options">
      <h3>Crear cuenta</h3>
      <div class="modal-imgs">
          <img  id="facebook-login" class="fb-logo" src="./Imagenes/logo_fb.png" alt="logo fb">
          <img id="google-login" class="google-logo" src="./Imagenes/logo_google.png" alt="logo google">
      <br>
      </div>
      <div class="modal-options">
        <p>O</p>
        <button id="email-sign-in">Correo electrónico</button>
      </div>
      </div>
      <div class="sign-in-footer">
        <a href="#/"><i class="fas fa-arrow-left"></i></a>
      </div>
    </div>
  </main>
`

  return view
}
, after_render: async () => {
  let emailSignIn = document.getElementById("email-sign-in");
  const googleLogin = document.getElementById("google-login");
  const facebookLogin = document.getElementById("facebook-login");
  emailSignIn.addEventListener("click",()=>location.hash= "#/userform");
  window.firebaseFunction.observe();
  googleLogin.addEventListener("click", () => window.firebaseFunction.loginGoogle());
  facebookLogin.addEventListener("click", () => window.firebaseFunction.loginFacebook());
}
}
export default signIn;
