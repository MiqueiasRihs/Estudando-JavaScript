const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDedados = require('./bancoDedados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos()) // Convertido para JSON automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})