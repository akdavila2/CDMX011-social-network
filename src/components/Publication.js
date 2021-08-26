
export const Publication = () => {
    const view = `
        <textarea id="review" placeholder="Share your opinion"></textarea><br>
        <a href="/profile" id="profilePerfil"><img class="icon-post" src="../img/plusazul.png">Add post</a>
        `;


        const publicationsDiv = document.createElement('div')
        publicationsDiv.setAttribute("class", "post")
        publicationsDiv.innerHTML = view

    //en el botón de enviar poner la lógica para mandar el post a firebase y también para que aparezca ya sea en home o perfil, intentar usar un parámetro para indicar si está en home o perfil para usar la misma lógica del componente

        return publicationsDiv

};




