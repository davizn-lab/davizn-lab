const container = document.querySelector('.todosCards');

// Escapa caracteres especiais para evitar injeção de HTML (XSS)
const escapar = (texto) =>
    String(texto ?? '').replace(/[&<>"']/g, (c) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));

fetch('/api/lista')
    .then((resposta) => {
        if (!resposta.ok) throw new Error('Falha ao carregar a lista');
        return resposta.json();
    })
    .then((dados) => {
        let html = '';

        dados.forEach((obra) => {
            html += `
            <div class="card">
                <div class="texto">
                    <h3 class="titulo">${escapar(obra.titulo)}</h3>
                    <p>${escapar(obra.descricao)}</p>
                </div>
                <div class="img">
                    <img src="${escapar(obra.imagem)}" alt="${escapar(obra.descImagem)}">
                </div>
            </div>
            `;
        });

        // Atribui uma única vez, em vez de recriar o DOM a cada iteração
        container.innerHTML = html;
    })
    .catch((erro) => console.error("Erro ao buscar as obras:", erro));
