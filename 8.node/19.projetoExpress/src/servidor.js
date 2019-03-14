const porta = 3003

const express = require('express')

const app = express()

const bancoDeDados = require('./bancoDeDados')

const bodyParser = require('body-parser')
// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...') /conta/<id>/<nome>
//     next()
// })

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
//    res.send({nome: 'Notebook', preco: 123.45}) 
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

// app.delete( )

app.listen(porta, ()=> {
    console.log('Servidor está executando')
})