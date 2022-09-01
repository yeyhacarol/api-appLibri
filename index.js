const express = require('express');

const app = express();

/* para permitir que o json seja interpretado */
app.use(express.json())

/* import do arquivo de rotas de livros */
const livrosController = require('./controller/LivroController')

/* sempre que alguma requisição na raíz ela será encaminhada para a controller de livros */
app.use('/', livrosController)

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});