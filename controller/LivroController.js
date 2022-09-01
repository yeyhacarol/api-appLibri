/* rotas para: criar (post), listar (get), alterar (put) e excluir (delete) livros */

/* import do módulo de express */
const express = require('express')

/* import da model de livro */
const LivroModel = require('../model/LivroModel')

/* configurando recursos de roteamento (Router) */
const router = express.Router()

router.post('/cadastrarLivro', (req, res) => {
    console.log(req.body)
    res.send('ROTA DE CADASTRO DE LIVROS')
})

router.get('/listarLivros', (req, res) => {
    res.send('ROTA DE LISTAGEM DE LIVROS')
})

router.put('/alterarLivro', (req, res) => {
    res.send('ROTA DE ALTERÇÃO DE LIVROS')
})

router.delete('/excluirLivro', (req, res) => {
    res.send('ROTA DE EXCLUSÃO DE LIVROS')
})

module.exports = router
