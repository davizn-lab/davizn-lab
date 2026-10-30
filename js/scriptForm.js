// Classe ObraDeArte com a ordem exata dos atributos
class ObraDeArte {
    constructor(titulo, descricao, imagem, descImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }
}

/*********************************************************/

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o recarregamento padrão da página

    // Captura os valores digitados nos inputs
    const titulo = document.getElementById('titulo').value;
    const imagem = document.getElementById('imagem').value;
    const descImagem = document.getElementById('descricao').value; // input da descrição da IMAGEM
    const descricao = document.getElementById('paragrafo').value;  // input do texto da OBRA

    // Ordem: titulo, descricao, imagem, descImagem
    const novaObra = new ObraDeArte(titulo, descricao, imagem, descImagem);

    // Dispara a requisição POST para a API
    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaObra)
    })
        .then((resposta) => {
            if (!resposta.ok) throw new Error('Falha no servidor');
            return resposta.json();
        })
        .then(() => {
            alert('Obra enviada com sucesso!');
            formulario.reset();
            window.location.href = 'index.html'; // Redireciona para ver o card na galeria
        })
        .catch((erro) => {
            console.error("Erro ao enviar:", erro);
            alert('Não foi possível enviar a obra. Verifique os campos e tente novamente.');
        });
});
