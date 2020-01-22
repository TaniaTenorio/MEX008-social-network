let intro = {
  render : async () => {
      let view = /* html */ `
      <main class="intro">
        <div class="logo">
          <img src="./Imagenes/foodlova.png" alt="logo">
        </div>
        <div class="intro-text">
          <p>¿Estás list@ para formar parte de la red social más glotona de la CDMX?</p>
        </div>
        <div class="btns">
          <button id ="sign-in-btn">Crear Cuenta</button>
          <p>O</p>
          <button id="log-in-btn">Iniciar Sesión</button>
        </div>
      </main>
      `
      return view
  },
  after_render : async () => {
    let singInBtn = document.getElementById("sign-in-btn");
    let logInBtn = document.getElementById("log-in-btn");
    singInBtn.addEventListener("click",()=>location.hash= "#/signin");
    logInBtn.addEventListener("click",()=>location.hash= "#/login");
  }
}

export default intro;
