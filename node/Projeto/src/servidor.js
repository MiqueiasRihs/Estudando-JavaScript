const porta = 3003

const express = require('express')
const app = express()
const bancoDedados = require('./bancoDedados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos()) // Convertido para JSON automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})