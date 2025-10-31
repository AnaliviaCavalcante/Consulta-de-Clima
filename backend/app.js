const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());



app.get('/api/clima/:cidade', (req, res) => {
    const cidade = req.params.cidade.toLowerCase();

    fs.readFile(path.join(__dirname, 'dados.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).json({erro: 'Erro ao ler dados.'});
        const infos = JSON.parse(data);
        const clima = infos[cidade];
        if (clima) {
            res.json(clima);
        } else {
            res.status(404).json({erro: 'Cidade não encontrada.'});
        }
    });
});


app.post('/api/clima', (req, res) => {
    const { cidade, clima } = req.body;
    if (!cidade || !clima) return res.status(400).json({erro: 'Dados insuficientes.'});

    fs.readFile(path.join(__dirname, 'dados.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).json({erro: 'Erro ao ler dados.'});
        const infos = JSON.parse(data);
        infos[cidade.toLowerCase()] = clima;
        fs.writeFile(path.join(__dirname, 'dados.json'), JSON.stringify(infos, null, 2), (err) => {
            if (err) return res.status(500).json({erro: 'Erro ao salvar dados.'});
            res.json({sucesso: true});
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

});
