let timeline = {
    render : async () => {
       let view =  /*html*/
       `
    <main class="timeline">
        <div class="nav">
            <ul class="nav-btns">
                <li><img class="menu-btn" src="./Imagenes/menu.png" alt="imagen" /></li>
                <li><img class="news-btn" src="./Imagenes/fondel.png" alt="folder" /></li>
                <li><img id ="location-btn" class="location-btn" src="./Imagenes/ubicacón.png" alt="descripcion" /></li>
                <li><img class="message-btn"  src="./Imagenes/mensaje.png" alt="descripcion" /></li>
            </ul>
        </div>
        <div id ="published-posts" class="published-posts">
        </div>
          <div class="new-post">
            <img class="imagen" src="./Imagenes/usuario.png" />
              <input type="text" id="add-post" class="add-post" placeholder="Comenta">
              <button id="save-btn">Publicar</button>
           </div>
      </main>
        `;
        return view
   },
   after_render: async () => {
       // const signUp = document.getElementById("confirm-signup");
       // signUp.addEventListener("click", () => window.firebaseFunction.register());
       //  window.firebaseFunction.observe();
       let locationBtn = document.getElementById("location-btn");
       // const saveBtn = document.getElementById("save-btn");
       locationBtn.addEventListener("click",()=>location.hash= "#/location");
       document.getElementById("save-btn").addEventListener("click", window.firebaseFunction.savePost);
       //pintando post que se van creando
       let printPost = document.getElementById("published-posts");

       await db.collection("newPosts").onSnapshot((querySnapshot) => {
            printPost.innerHTML = "";
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data().textPost}`);
                printPost.innerHTML += `
                    <section class="post" >
                        <img class="imagen" src="./Imagenes/usuario.png" />
                        <p>${doc.data().textPost}</p>
                        <button class="delete-btn" id="${doc.id}" data-id=${doc.id}>Eliminar</button>
                        <button class="edit-btn" data-id=${doc.id}>Editar</button>
                    </section>`;
                
            });
            
        });
        printPost.addEventListener("click", (e) =>  {
            if (e.target.tagName !== "BUTTON" || !e.target.classList.contains("delete-btn")) {
                return;
            }
            console.log(!e.target.classList.contains("delete-btn"));
            window.firebaseFunction.deletePost(e.target.dataset.id);
            
        });
   }
 }
 export default timeline;