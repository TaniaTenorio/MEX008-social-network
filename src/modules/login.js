let logIn = {
render : async () => {
  let view =  /*html*/`
  <main class="log-in">
  <div class="logo">
    <img src="./Imagenes/foodlova.png" alt="logo">
  </div>
  <div class="log-in-data">
    <h3>Inicia Sesión</h3>
    <label for="email">Correo</label><br>
    <input type="email" name="email" id="login-email"><br>
    <label for="password">Contraseña</label><br>
    <input type="password" name="password" id="login-password"><br>
    <button id="login-btn">Siguiente</button>
  </div>
  <div class="log-in-btns">
    <p>O</p>
    <img id="facebook-login" src="./Imagenes/logo_fb.png" alt="logo fb">
    <img id="google-login" src="./Imagenes/logo_google.png" alt="logo google">
  </div>
</main>
  `
  return view
},
 after_render: async () => {
  const logInBtn = document.getElementById("login-btn");
  const googleLogin = document.getElementById("google-login");
  const facebookLogin = document.getElementById("facebook-login");
  logInBtn.addEventListener("click", () => window.firebaseFunction.functionLogin());
  window.firebaseFunction.observe();
  googleLogin.addEventListener("click", () => window.firebaseFunction.loginGoogle());
  facebookLogin.addEventListener("click", () => window.firebaseFunction.loginFacebook());
}
}
export default logIn;
