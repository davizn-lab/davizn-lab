const express = require('express');
const app = express();

// Middleware essencial para ler o JSON vindo do formulário (POST)
app.use(express.json());

// Serve a pasta 'site' onde estão os arquivos estáticos (HTML, CSS, JS)
app.use(express.static('site'));

// Banco de dados temporário em memória RAM
let lista = [
    {
        titulo: "obra de arte 1",
        descricao: "ficticio",
        imagem: "https://via.placeholder.com/150",
        descImagem: "Imagem ficticia 1"
    },
    {
        titulo: "obra de arte 2",
        descricao: "ficticio2",
        imagem: "https://via.placeholder.com/150",
        descImagem: "Imagem ficticia 2"
    }
];

// Rota GET: Devolve a lista inteira para a página principal
app.get('/api/lista', (req, res) => {
    res.json(lista);
});

// Rota POST: Recebe uma nova obra do formulário, valida e guarda no Array
app.post('/api/lista', (req, res) => {
    const { titulo, descricao, imagem, descImagem } = req.body;

    if (!titulo || !descricao || !imagem) {
        return res.status(400).json({
            status: "erro",
            mensagem: "Campos obrigatórios faltando"
        });
    }

    lista.push({ titulo, descricao, imagem, descImagem });
    res.status(201).json({ status: "sucesso" });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor escutando em http://localhost:3000");
});
