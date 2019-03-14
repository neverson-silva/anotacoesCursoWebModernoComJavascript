const fs = require('fs')

const arquivo = __dirname + '/arquivo.json'


// forma sincrona - trava o event loop
const conteudo  = fs.readFileSync(arquivo, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(arquivo, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//especifico json
const config = require('./arquivo.json')
console.log(config.db)

//lendo diretorios
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
