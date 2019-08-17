let location = {
    render : async () => {
        let view = /* html */ `
        <main class="location-places">
    <header>
      <nav class="nav-timeline">
        <img class="menu-btn" src="./img/menu.png" alt="imagen-menu">
        <img src="./img/folded-newspaper.png" alt="imagen-noticias">
        <img src="./img/facebook-placeholder-for-locate-places-on-maps.png" alt="imagen-location">
        <img src="./img/envelope.png" alt="imagen-imbox">
      </nav>
    </header>
    <div class="location-map">
      <figure >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7945650428387!2d-99.16532345014895!3d19.421280246012202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3746a2e079%3A0x422fa4858844d058!2sTonal%C3%A1+10%2C+Roma+Nte.%2C+06700+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1565295353686!5m2!1ses-419!2smx" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      </figure>
    </div>
    <section class="nearby-places">
      <section class="tacos-lety-ii">
        <h4>Tacos Lety</h4>
        <p>puntuaciones: 4.0</p>
       <!--  Cambiar el boton por una <a></a>  -->
        <button class="opinions-button">opiniones</button>
        <p>cierra a las: 21:00</p>

      </section>
      <hr>
      <section class="pizzas-garcia">
        <h4>Pizzas Garcia</h4>
        <p>Puntuaciones: 4.3</p>
        <!--  Cambiar el boton por una <a></a>  -->
        <button class="opinions-button">opiniones</button>
        <p>Cierra a las 21:00</p>

      </section>

    </section>
  </main>
        `
        return view
    },
    after_render : async () => {
      console.log(window.history);
    }
  }

  export default location;


