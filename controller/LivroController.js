/* rotas para: criar (post), listar (get), alterar (put) e excluir (delete) livros */

/* import do módulo de express */
const express = require('express')

/* import da model de livro */
const livroModel = require('../model/LivroModel')

/* configurando recursos de roteamento (Router) */
const router = express.Router()

router.post('/cadastrarLivro', (req, res) => {
    /* console.log(req.body)
    res.send('ROTA DE CADASTRO DE LIVROS') */

    /* resgantando os dados do corpo da requisição utilizando o método de desestruturação */
    let { titulo, descricao, imagem } = req.body
    livroModel.create({ 
        titulo, 
        descricao, 
        imagem 
    }).then(
        () => {
            res.status(201).json({ "Message": "Livro inserido com sucesso!" })
        }
    ).catch(
     (error) => {
        res.status(500).json({ "Message": "Tivemos problema para inserir o livro." })
     }   
    )
})

router.get('/listarLivros', (req, res) => {
    /* res.send('ROTA DE LISTAGEM DE LIVROS') */

    livroModel.findAll()
        .then( 
            (livros) => {
                res.status(200).send(livros)
            }
        )
        .catch(
            (error) => {
                res.status(404).json({ "Message": "Ainda não há livros a serem mostrados." })
            }
        )
})

router.get('/listarLivro/:cod_livro', (req, res) => {
    let { cod_livro } = req.params

    /* há muitas maneiras de fazer um select com algum filtro. Utilizando o findAll() e passando o where ou por meio do findByPk() */

    livroModel.findAll({
        where: {
            cod_livro
        }
    })
    .then(
        (livro) => {
            res.status(200).send(livro)
        }
    )
    .catch(
        (error) => {
            res.status(400).json({ "Message": error })
        }
    )

    /* livroModel.findByPk(cod_livro)
    .then(
        (livro) => {
            res.status(200).send(livro)
        }
    )
    .catch(
        (error) => {
            res.status(400).json({ "Message": error })
        }
    ) */
})

router.put('/alterarLivro', (req, res) => {
    /* res.send('ROTA DE ALTERÇÃO DE LIVROS') */

    let { titulo, descricao, imagem, cod_livro } = req.body

    livroModel.update(
        {
            titulo,
            descricao,
            imagem,
        },   
        {
            where: {
                cod_livro 

            }
        }
    )
    .then(
        () => {
            res.status(200).json({ "Message": "Livro editado com sucesso!" })
        }
    )
    .catch(
        (error) => {
            res.status().json({ "Message": error })
        }
    )
})

router.delete('/excluirLivro/:cod_livro', (req, res) => {
    /* res.send('ROTA DE EXCLUSÃO DE LIVROS') */

    let { cod_livro } = req.params

    livroModel.destroy({ 
        where: {
            cod_livro
        }
     })
    .then(
        () => {
            res.status(200).json({ "Message": "Livro excluído com sucesso!" })
        }
    )
    .catch(
        (error) => {
            res.status(500).json({ "Message": error })
        }
    )
})

module.exports = router
