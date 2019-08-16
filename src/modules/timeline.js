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
                        <input type="text" id="input-prueba" data-id=${doc.id} value="${doc.data().textPost}" disabled=${true}>
                        <button class="delete-btn" id="${doc.id}" data-id=${doc.id}>Eliminar</button>
                        <button class="edit-btn" id="edit-btn" data-id=${doc.id}>Editar</button>
                    </section>`;
            });
        //     printPost.addEventListener("click", (e) =>  {
        //         if (e.target.tagName !== "BUTTON" || !e.target.classList.contains("delete-btn") || !e.target.classList.contains("edit-btn")) {
        //             return;
        //         }
        //         console.log(!e.target.classList.contains("delete-btn"));
        //         window.firebaseFunction.deletePost(e.target.dataset.id);
        //         console.log("si funciona");
        //     document.querySelector("#input-prueba").disabled=false;
        //     });
            const inputText = Array.from(document.querySelectorAll(`button.edit-btn`));
            inputText.forEach( item => {
                item.addEventListener('click', (e) => {

                // if (e.target.tagName === "BUTTON" && e.target.classList.contains("edit-btn")){
                    const editButton = document.querySelector(`button.edit-btn[data-id='${e.target.dataset.id}']`);
                    const inputText = document.querySelector(`input[data-id='${e.target.dataset.id}']`);
                    console.log(inputText);


                    // console.log(input.disabled);
                    if (inputText.disabled &&  editButton.innerHTML === "Editar" ) {
                        console.log("cambiar input a false y cambiar boton Guardar");
                        inputText.disabled = false;
                        inputText.focus();
                        editButton.innerHTML = "Guardar";
                        return;
                    } 
                        console.log("cambiar input a true y cambiar boton Editar");
                        // window.firebaseFunction.editPost(e.target.dataset.id, inputText.value);
                        inputText.disabled = true;
                        editButton.innerHTML = "Editar";
                })
            })
            printPost.addEventListener("click", (e) =>  {
            console.log(e.target);
                if (e.target.tagName !== "BUTTON" && e.target.classList.contains("delete-btn")){
                    console.log(!e.target.classList.contains("delete-btn"));
                    window.firebaseFunction.deletePost(e.target.dataset.id);
                }
                
            });
        });
    }
 }
 export default timeline;