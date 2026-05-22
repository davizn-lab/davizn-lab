const titulo = document.getElementById("titulo");

titulo.addEventListener("click", function() {
    titulo.style.color = "blue";
});
function renderizarCards(bike) {
    const novoCard = `
        <div class="card">
            <div class="letras">
                <h3 id="titulo">${bike.titulo}</h3>
                <p>${bike.texto}</p>
            </div>

            <div class="img">
                <img src="${bike.imagem}" alt="${bike.descricao}"/>
            </div>
        </div>
    `;

    colecao.innerHTML += novoCard;
}
