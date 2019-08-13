let timeline = {
    render : async () => {
       let view =  /*html*/
       `
    <main class="timeline">
        <div class="nav">
            <ul class="menu-izq">
                <li><img class="imagen" src="./Imagenes/menu.png" alt="imagen" /></li>
                <li><img class="imagen" src="./Imagenes/fondel.png" alt="folder" /></li>
                <li><img id ="location-btn" class="imagen" src="./Imagenes/ubicacón.png" alt="descripcion" /></li>
            </ul>
            <ul class="menu-der">
                <li><img class="imagen"  src="./Imagenes/mensaje.png" alt="descripcion" /></li>
            </ul>
        </div>
        <div class="published-posts">
              <div class="cajas">
                  <img class="imagen" src="./Imagenes/usuario.png" />
                  <p>Jose<br> tamales de la roma son los mejores que he comido.</p>
              </div>
              <div class="cajas">
                  <img class="imagen" src="./Imagenes/usuario.png" />
                  <p id="print-post" ></p>
              </div>
          </div>
          <div class="new-post">
            <label>Publica: </label>
              <input type="text" id="add-post" class="add-post" placeholder="Comenta">
              <button id="save-btn">Publicar</button>
           </div>
      </main>
        `;
       return view
   }
   , after_render: async () => {
    // const signUp = document.getElementById("confirm-signup");
    // signUp.addEventListener("click", () => window.firebaseFunction.register());
    //  window.firebaseFunction.observe();
    let locationBtn = document.getElementById("location-btn");
    // const saveBtn = document.getElementById("save-btn");
    locationBtn.addEventListener("click",()=>location.hash= "#/location");
    document.getElementById("save-btn").addEventListener("click", window.firebaseFunction.savePost);
    //pintando post que se van creando
    let printPost = document.getElementById("print-post");
db.collection("newPosts").onSnapshot((querySnapshot) => {
    printPost.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().textPost}`);
        printPost.innerHTML += `
        <section>
            <p>${doc.data().textPost}</p>
            <button id="delete-btn" class="delete-btn">Eliminar</button>
            <button class="edit-btn">Editar</button>
        </section>
        `;
        document.getElementById("delete-btn").addEventListener("click", () =>  {
            window.firebaseFunction.deletePost(doc.id);
        });
    });
});
   }
 }
 export default timeline;