const express = require('express');
const app = express();

app.use(express.json()); 

let tarefas = [{
    "titulo": "Teste, deu certo! :D"
}];
let id = 1;


app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: "Título é obrigatório" });
    }

    const novaTarefa = { id: id++, titulo };
    tarefas.push(novaTarefa);
    
    res.status(201).json(novaTarefa);
});

app.listen(3000, () =>{
    console.log("Rodando na Porta 3000")
})