const filesystem = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1234.8,
    desconto: 0.15
}

filesystem.writeFile(__dirname + 'arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo')
})