const welcome = {
  render : async () => {
      let view = /* html */ `
      <section class="welcome">
        <section class="welcome-text">
          <h2>Bienvenid@ a</h2>
          <figure class="logo">
            <img src="img/foodlova.png" alt="logo-foodLova">
          </figure>
        </section>
        <section class="welcome-description-text">
          <p>Donde todos somos glotones y lo presumimos</p>
        </section>
        <section class="welcome-btn">
          <button  class="button-go" id = "button-go">Vamos!</button>
        </section>
    </section>`
      return view
  },
  after_render : async () => {
    const buttonGo =document.getElementById("button-go");
    buttonGo.addEventListener("click",()=>location.hash= "#/timeline");



  }
}

export default welcome;

